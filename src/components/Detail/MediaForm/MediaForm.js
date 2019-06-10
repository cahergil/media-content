import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Formik, FastField, Form, Field, ErrorMessage } from 'formik';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { KeyboardDatePicker } from "@material-ui/pickers";
import MomentUtils from '@date-io/moment';

import * as Yup from 'yup';
import * as YupFormSchemas from './schemaShape';
import { MediaType } from './../../../Utils/utils';





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

const DatePickerField = ({ field, form, ...other }) => {
  const currentError = form.errors[field.name];
  return (
    <KeyboardDatePicker
      format="YYYY/MM/DD"
      name={field.name}
      value={field.value}
      // helperText={currentError}
      error={Boolean(currentError)}
      onError={(_, error) => form.setFieldError(field.name, error)}
      onChange={date => form.setFieldValue(field.name, date, true)}
      {...other}
    />
  );
};



const MediaForm = (props) => {
  const { register, onSaveForm } = props;
 
  const classes = useStyles(props);
  let content = null;

  useEffect(() => {
    const element = document.getElementById('breadcrum');
    element.scrollIntoView();
  }, []);

  

  const handleSubmit = (values) => {
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
      values.episodes = formattedEpisodes;
    }

    if ((typeof values.score) === 'string') {
      values.score = parseFloat(values.score);
    }
   
    onSaveForm(id, values);
    console.log('submitted values', JSON.stringify(values, null, 2));
  }



  if (register) {
    let initialValues = {}
 
    const validationSchemaShape = register.type === 'show' ? YupFormSchemas.schemaShows : YupFormSchemas.SchquemaEpidose;
    
    for (let key in register) {
      initialValues[key] = register[key];
    }

    content = (
      <div className={classes.root} >
        <Formik
          initialValues={initialValues}
          validationSchema={Yup.object().shape(validationSchemaShape)}
          onSubmit={(values, { setSubmitting }) => {
            handleSubmit(values);
            setSubmitting(false);
          }}
          render={({
    
            isValid
          }) => (
              <Form>
                <div className={classes.formHeaderStyle}>
                  <Typography variant="h5" >
                    Info
                  </Typography>
                  <div className={classes.grow}></div>
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    disabled={!isValid}
                    className={classes.button}>
                    Save
                  </Button>

                </div>


                <div className={classes.fieldsRoot}>
                  <div>
                    {/* ID */}
                    <div className={classes.formFiedWrapperStyle}>
                      <label className={classes.formLabelStyle} >Id</label>
                      <FastField
                        className={classes.formFieldStyle}
                        type="text"
                        name="id"
                        style={{ width: '4rem' }}
                        disabled={true}
                      />
                    </div>

                    {/* TYPE */}
                    <div className={classes.formFiedWrapperStyle}>
                      <label className={classes.formLabelStyle} >Type</label>
                      <FastField
                        className={classes.formFieldStyle}
                        type="text"
                        name="type"
                        style={{ width: '10rem' }}
                        disabled={true}
                      />
                    </div>

                    {/* TITLE */}
                    <div className={classes.formFiedWrapperStyle}>
                      <label className={classes.formLabelStyle} >Title</label>
                      <FastField
                        className={classes.formFieldStyle}
                        type="text"
                        name="title" />
                      <ErrorMessage name="title">
                        {msg => <div className={`field-error ${classes.errorMessageStyle}`}>{msg}</div>}
                      </ErrorMessage>
                    </div>

                    {/* CATEGORIES */}
                    <div className={classes.formFiedWrapperStyle}>
                      <label className={classes.formLabelStyle} >Categories</label>
                      <FastField
                        className={classes.formFieldStyle}
                        type="text"
                        name="categories" />
                      <ErrorMessage name="categories">
                        {msg => <div className={`field-error ${classes.errorMessageStyle}`}>{msg}</div>}
                      </ErrorMessage>
                    </div>

                    {/* RELEASE DATE */}
                    <div className={classes.releaseDateStyle}>
                      <label style={{ 'marginRight': '1rem', 'fontSize': '1.5rem' }} >Release Date </label>
                      <MuiPickersUtilsProvider utils={MomentUtils}>
                        <Field name="releaseDate" component={DatePickerField} />
                        {/* <KeyboardDatePicker

                          name={'releaseDate'}
                          value={values['releaseDate']}
                          onChange={date => setFieldValue('releaseDate', date)
                          
                          }
                                     
                          format="YYYY/MM/DD"

                        /> */}

                      </MuiPickersUtilsProvider>
                    </div>

                  </div>
                  <div>
                    {/* SYNOPSIS */}
                    <div className={classes.textAreaRoot}>
                      <label>Synopsis</label>
                      <Field
                        name="synopsis"
                        style={{ fontSize: '1.5rem', fontFamily: 'Roboto' }}
                        rows="5"
                        cols="10"
                        component="textarea" />
                      <ErrorMessage name="synopsis">
                        {msg => <div className={`field-error ${classes.errorMessageStyle}`}>{msg}</div>}
                      </ErrorMessage>
                    </div>

                    {/* SCORE */}
                    <div className={classes.formFiedWrapperStyle}>
                      <label className={classes.formLabelStyle} >Score</label>
                      <FastField
                        className={classes.formFieldStyle}
                        style={{ width: '5rem' }}
                        type="text"
                        name="score" />
                      <ErrorMessage name="score">
                        {msg => <div className={`field-error ${classes.errorMessageStyle}`}>{msg}</div>}
                      </ErrorMessage>
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
                              name="episodes" />
                            <ErrorMessage name="episodes">
                              {msg => <div className={`field-error ${classes.errorMessageStyle}`}>{msg}</div>}
                            </ErrorMessage>
                          </div>

                        )
                    }
                    {/* IMAGE */}
                    <div className={classes.formFiedWrapperStyle} >
                      <label className={classes.formLabelStyle} >Img URL
                            </label>
                      <FastField
                        className={classes.formFieldStyle}
                        type="text"
                        name="imageUrl" />
                      <ErrorMessage name="imageUrl">
                        {msg => <div className={`field-error ${classes.errorMessageStyle}`}>{msg}</div>}
                      </ErrorMessage>
                    </div>

                  </div>
                 
                </div>
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

MediaForm.propTypes = {
  register: PropTypes.shape(MediaType).isRequired,
  onSaveForm: PropTypes.func.isRequired
}

export default MediaForm;