import React from 'react';
import { Formik, FastField, Form, Field, ErrorMessage } from 'formik';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import * as Yup from 'yup';

import scssClasses from './MediaForm.module.scss';
// import { Debug } from './Debug';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  fieldsRoot: {
    // margin: '1rem',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridColumnGap: '2rem'
  },
  margin: '1rem',
  textAreaRoot: {
    marginTop: '5px',
    marginLeft: '3rem',
    paddingRight: '1rem',
    display: 'grid',
    gridTemplateRows: 'repeat(2, min-content)',
    gridRowGap: '5px',
    fontSize: '1.5rem'
  },
  buttonStyle: {
    height: '3rem',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));
const Fieldset = ({ label, name, ...props }) => (
  <React.Fragment>
    <div 
      style={{ margin: '3rem' }}
    >
      <label style={{ 'marginRight': '1rem','fontSize': '1.5rem' }} htmlFor={name}>{label}</label>
      <FastField
        className={scssClasses.FormField}
        style= {{ color: '#999'}}
        name={name} {...props} />
      <ErrorMessage name={name}>
        {msg => <div style={{ color: 'red', fontSize:'1.5rem', marginTop:'5px' }} className="field-error">{msg}</div>}
      </ErrorMessage>
    </div>
  </React.Fragment>
);

const MediaForm = (props) => {
  const { register } = props;
  const classes = useStyles(props);
  let content = null;
  const handleSubmit = (values) => {
    console.log('submitted values', JSON.stringify(values, null, 2));
  }
  if (register) {
      content = (
      <div className={classes.root} >
        <Formik
          initialValues={{
            id: register.id,
            type: register.type,
            title: register.title,
            categories: register.categories.join(','),
            synopsis: register.synopsis,
            releaseDate: register.releaseDate,
            score: register.score,
            episodes: register.episodes,
            imageUrl: register.imageUrl
          }}
          validationSchema={Yup.object().shape({
            id: Yup.string(),
            type: Yup.string(),
            title: Yup.string().required('title required'),
            categories: Yup.string().required('categories required'),
            synopsis: Yup.string().required('synopsis required'),
            releaseDate: Yup.string().required('release date required'),
            score: Yup.string().required('score required'),
            episodes: Yup.string().required('episodes required'),
            imageUrl: Yup.string().required('image url required')
          })}
          onSubmit={(values) => {
            handleSubmit(values);
            // resetForm();
          }}
          // onReset={() => {
          //   console.log('form reset')            
          // }
          // }
          render={({
            handleSubmit,
            handleReset,
            isSubmitting,
           
          }) => (
              <Form>
                <Typography style={{paddingLeft: '1rem'}} variant="h5" >
                  Info
                </Typography>
                
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
                    <Fieldset
                      name="releaseDate"
                      label="Release Date"
                      type="text"
                      style={{ width: '10rem', color: '#999' }}
                    />
                  </div>
                  <div>
                    <div className={classes.textAreaRoot}>
                      <label>Synopsis</label>
                      <Field
                        name="synopsis"
                        style={{ color: '#777' }}
                        rows="5"
                        cols="10"
                        component="textarea" />
                    </div>
                    {/* <Field component={() => <textarea  placeholder="Some placeholder">hola hola</textarea>}/>  
  {/*  */}
                    {/* <Field name="synopsis" component={() => <TextField multiline="true" id="algo" type="textarea" />} /> */}
  
                    <Fieldset
                      name="score"
                      label="Score"
                      type="text"
                    />
                    <Fieldset
                      name="episodes"
                      label="Episodes"
                      type="text"
  
                    />
                    <Fieldset
                      name="imageUrl"
                      label="Img URL"
                      type="text"
                    />
  
  
                  </div>
                </div>
                <div className={classes.buttonStyle}>
                  <Button type="submit" variant="outlined" color="primary" className={classes.button}>
                    Save
                  </Button>
                 
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