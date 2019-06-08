import React from 'react';
import { Formik, FastField, Form, Field, ErrorMessage } from 'formik';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { KeyboardDatePicker } from "@material-ui/pickers";
import MomentUtils from '@date-io/moment';


import classesScss from './MediaForm.module.scss';



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
        // style= {{ color: '#999'}}
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
    const id = values.id;
    onSaveForm(id, values);
    
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
          validate={(values) => {
            const titleRegex = /^[-a-z0-9,/()&:.' ]*[a-z][-a-z0-9,/()&:.' ]*$/i;
            const imageUrlRegex = /^https?:\/\/(?:[a-z-]+\.)+[a-z]{2,6}(?:\/[^/#?]+)+\.(?:jpe?g|gif|png)$/;
            const scoreRegex = /(^\d*\.?\d*[1-9]+\d*$)|(^[1-9]+\d*\.\d*$)/;
          
            let errors = {};
            // title
            if (!values.title ) {
              errors.title = 'title required';
            } else if (!values.title.trim() || !titleRegex.test(values.title)) {
              errors.title = 'title not valid';
            } 
            // synopsis
            if (!values.synopsis) {
              errors.synopsis= 'synopsis required'
            } else if (!values.synopsis.trim()) {
              errors.synopsis = 'synopsis not valid';
            }
            // imageUrl
            if (!imageUrlRegex.test(values.imageUrl)
            ) {
              errors.imageUrl = 'link not valid';
              
            }
            // score
            if (!scoreRegex.test(values.score) || values.score > 10) {
              errors.score = 'score not valid'
            }
            // categories
            // episodes

            
            return errors;
          }
          }
          onSubmit={(values, { setSubmitting }) => {
            handleSubmit(values);
            setSubmitting(false);
          }}
          render={({
            isSubmitting,
            setFieldValue,
            values
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
                    <Fieldset
                      name="title"
                      label="Title"
                      type="text"
  
                    />
                    <Fieldset
                      name="categories"
                      label="Categories"
                      type="text"
                    />
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
                        component="textarea" />
                      <ErrorMessage name="synopsis">
                        {msg => <div style={{ color: 'red', fontSize: '1.5rem', marginTop: '5px' }} className="field-error">{msg}</div>}
                      </ErrorMessage>
                    </div>
   
                    <Fieldset
                      name="score"
                      label="Score"
                      type="text"
                      style={{ width: '5rem' }}
                    />
                    {
                      register.type === 'episode' ? null :
                        (
                          <Fieldset
                            name="episodes"
                            label="Episodes"
                            type="text"

                          />      
                      )  
                    }
                    
                    <Fieldset
                      name="imageUrl"
                      label="Img URL"
                      type="text"
                    />
  
  
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