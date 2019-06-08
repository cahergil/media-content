import React from 'react';
import { Formik, FastField, Form, Field, ErrorMessage } from 'formik';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { KeyboardDatePicker } from "@material-ui/pickers";
import MomentUtils from '@date-io/moment';


import classesScss from './MediaForm.module.scss';
import { validateScore, validateEpisodes, validateTitle, validateCategories, validateSynopsis, validateImageUrl } from './validations';
import {Debug} from './Debug'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginBottom: '2rem'
  },
  fieldsRoot: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridColumnGap: '2rem'
  },
  margin: '1rem',
  textAreaRoot: {
    marginTop: '3rem',
    marginLeft: '3rem',
    paddingRight: '1rem',
    display: 'grid',
    gridTemplateRows: 'repeat(2, min-content)',
    gridRowGap: '5px',
    fontSize: '1.5rem'
  },
  formHeaderStyle: {
    height: '4rem',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    padding: '1rem'
  },
  releaseDateStyle: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: '3rem'
  },
  formFieldStyle: {
    fontSize: '1.5rem',
    padding: '0.3rem 0.3rem'

  },
  formLabelStyle: {
    marginRight: '1rem',
    fontSize: '1.5rem' 
  },
  formFiedWrapperStyle: {
    margin: '3rem'
  },
  errorMessageStyle: {
    color: 'red',
    fontSize: '1.5rem',
    marginTop: '5px'
  }
}));

const Fieldset = ({ label, name, ...props }) => (
  <React.Fragment>
    <div 
      style={{ margin: '3rem' }}
    >
      <label style={{ 'marginRight': '1rem','fontSize': '1.5rem' }} htmlFor={name}>{label}</label>
      <FastField
        className={classesScss.FormField}
        name={name} {...props} />
      <ErrorMessage name={name}>
        {msg => <div style={{ color: 'red', fontSize:'1.5rem', marginTop:'5px' }} className="field-error">{msg}</div>}
      </ErrorMessage>
    </div>
  </React.Fragment>
);

const MediaForm = (props) => {
  const { register, onSaveForm } = props;
  const classes = useStyles(props);
  let content = null;

  const handleSubmit = (values) => {
    console.log(values.score);
    const id = values.id;

    if (!Array.isArray(values.categories)) {
      
      const formattedCategories = values.categories.split(',');
      for (let i = 0; i < formattedCategories.length; i++) {
        formattedCategories[i] = formattedCategories[i].trim();
      }
      values.categories = formattedCategories;
    }
    
    if (values.episodes && !Array.isArray(values.episodes)) {
      
      const formattedEpisodes = values.episodes.split(',');
      for (let i = 0; i < formattedEpisodes.length; i++) {
        formattedEpisodes[i] = formattedEpisodes[i].trim();
        formattedEpisodes[i] = parseInt(formattedEpisodes[i]);
      }
      values.categories = formattedEpisodes;
    }

    if ((typeof values.score) === 'string') {
      console.log('is string');
      values.score = parseFloat(values.score);
      console.log(values.score);
    }
    // onSaveForm(id, values);
    // console.log(values);
    console.log('submitted values', JSON.stringify(values, null, 2));
  }

  if (register) {
    let initialValues = {}
    let dateString = register.releaseDate.substr(0, 10).split('-').join('/');
    const date = new Date(dateString); // to eliminate the momentjs warning

    for (let key in register) {
      initialValues[key] = key === 'releaseDate'? date.toISOString() :register[key];
     
    }

    content = (
      <div className={classes.root} >
        <Formik
          initialValues={initialValues}
          onSubmit={(values, { setSubmitting }) => {
            handleSubmit(values);
            setSubmitting(false);
          }}
          render={({
            isSubmitting,
            setFieldValue,
            values,
            errors,
            touched
          }) => (
              <Form>
                <div  className={classes.formHeaderStyle}>
                  <Typography  variant="h5" >
                    Info
                  </Typography>
                  <div className={classes.grow}></div>
                  <Button
                    type="submit"
                    variant="contained" 
                    color="primary"
                    disabled={isSubmitting}
                    className={classes.button}>
                    Save
                  </Button>

                </div>
                
                
                <div className={classes.fieldsRoot}>
                  <div>
                    <Fieldset
                      name="id"
                      label="Id"
                      type="text"
                      style={{ width: '4rem' }}
                      disabled={true}
  
                    />
                    <Fieldset
                      name="type"
                      label="Type"
                      type="text"
                      style={{ width: '10rem' }}
                      disabled={true}
                    />

                    {/* TITLE */}
                    <div
                      className={classes.formFiedWrapperStyle}
                    >
                      <label className={classes.formLabelStyle} >Title</label>
                      <FastField
                        className={classes.formFieldStyle}
                        type="text"
                        // validate={validateTitle}
                        name="title" />
                      {errors.title && touched.title && <div>{errors.title}</div>}
                      {/* <ErrorMessage name="title">
                        {msg => <div className={`field-error ${classes.errorMessageStyle}`}>{msg}</div>}
                      </ErrorMessage> */}
                    </div>
                    
                    {/* CATEGORIES */}
                    <div
                      className={classes.formFiedWrapperStyle}
                    >
                      <label className={classes.formLabelStyle} >Categories</label>
                      <FastField
                        className={classes.formFieldStyle}
                        type="text"
                        validate={validateCategories}
                        name="categories" />
                      {errors.categories && touched.categories && <div>{errors.categories}</div>}
                      {/* <ErrorMessage name="categories">
                        {msg => <div className={`field-error ${classes.errorMessageStyle}`}>{msg}</div>}
                      </ErrorMessage> */}
                    </div>

                    {/* RELEASE DATE */}
                    <div className={classes.releaseDateStyle}>
                      <label style={{ 'marginRight': '1rem', 'fontSize': '1.5rem' }} >Release Date </label>
                      <MuiPickersUtilsProvider utils={MomentUtils }>
                      
                          <KeyboardDatePicker 
                           
                            name={'releaseDate'}
                            value={values['releaseDate']}
                            onChange={date => setFieldValue('releaseDate',date)}
                            format="YYYY/MM/DD"
                            
                            />
                       
                      </MuiPickersUtilsProvider>
                    </div>
                   
                  </div>
                  <div>
                    <div className={classes.textAreaRoot}>
                      <label>Synopsis</label>
                      <Field
                        name="synopsis"
                        style={{ fontSize: '1.5rem', fontFamily: 'Roboto'}}
                        rows="5"
                        cols="10"
                        validate={validateSynopsis}
                        component="textarea" />
                      {errors.synopsis && touched.synopsis && <div>{errors.synopsis}</div>}
                      {/* <ErrorMessage name="synopsis">
                        {msg => <div className={`field-error ${classes.errorMessageStyle}`}>{msg}</div>}
                      </ErrorMessage> */}
                    </div>
                    
                    {/* SCORE */}
                    <div
                      className={classes.formFiedWrapperStyle}
                    >
                      <label className={classes.formLabelStyle} >Score</label>
                      <FastField
                        className={classes.formFieldStyle}
                        style={{ width: '5rem' }}
                        type="text"
                        validate={validateScore}
                        name="score" />
                      {errors.score && touched.score && <div>{errors.score}</div>}
                      {/* <ErrorMessage name="score">
                        {msg => <div className={`field-error ${classes.errorMessageStyle}`}>{msg}</div>}
                      </ErrorMessage> */}
                    </div>

                    {
                      register.type === 'episode' ? null :
                        (
                          
                          <div className={classes.formFiedWrapperStyle} >
                            <label className={classes.formLabelStyle} >Episodes
                            </label>
                            <FastField
                              className={classes.formFieldStyle}
                              type="text"
                              validate={validateEpisodes}
                              name="episodes" />
                            {errors.episodes && touched.episodes && <div>{errors.episodes}</div>}
                            {/* <ErrorMessage name="episodes">
                              {msg => <div className={`field-error ${classes.errorMessageStyle}`}>{msg}</div>}
                            </ErrorMessage> */}
                          </div>
                          
                      )  
                    }
                    <div className={classes.formFiedWrapperStyle} >
                      <label className={classes.formLabelStyle} >Img URL
                            </label>
                      <FastField
                        className={classes.formFieldStyle}
                        type="text"
                        validate={validateImageUrl}
                        name="imageUrl" />
                      {errors.imageUrl && touched.imageUrl && <div>{errors.imageUrl}</div>}
                      {/* <ErrorMessage name="imageUrl">
                        {msg => <div className={`field-error ${classes.errorMessageStyle}`}>{msg}</div>}
                      </ErrorMessage> */}
                    </div>
                   
  
  
                  </div>
                </div>
               
  
                {/* <Debug /> */}
              </Form>
            )}
        >
  
        </Formik>
      </div>
    )
  }
  return (
    <React.Fragment>
      {content}

    </React.Fragment> 
    
  );
}

export default MediaForm;