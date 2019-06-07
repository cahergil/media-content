import React from 'react';
import { Formik, FastField, Form, Field, ErrorMessage } from 'formik';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import * as Yup from 'yup';

import classesScss from './MediaForm.module.scss';
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
  formHeaderStyle: {
    height: '4rem',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.secondary.main,
    padding: '1rem'
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
        style= {{ color: '#999'}}
        name={name} {...props} />
      <ErrorMessage name={name}>
        {msg => <div style={{ color: 'red', fontSize:'1.5rem', marginTop:'5px' }} className="field-error">{msg}</div>}
      </ErrorMessage>
    </div>
  </React.Fragment>
);

const MediaForm = (props) => {
  const { register, onSaveForm } = props;
  // console.log(register);
  const classes = useStyles(props);
  let content = null;
  const handleSubmit = (values) => {
    const id = values.id;
    onSaveForm(id, values);
    
    console.log('submitted values', JSON.stringify(values, null, 2));
  }
  if (register) {
    let initialValues = {}
    let validationSchemaShape = {}
    for (let key in register) {
      initialValues[key] = register[key];
      validationSchemaShape[key] = (key === 'id' || key ==='type') ? Yup.string(): Yup.string().required('field required')
    }
    // console.log(validationSchemaShape);
    content = (
      <div className={classes.root} >
        <Formik
          initialValues={initialValues}
          validationSchema={Yup.object().shape(validationSchemaShape)}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
          render={({
            handleSubmit,
            handleReset,
            isSubmitting,
           
          }) => (
              <Form>
                <div  className={classes.formHeaderStyle}>
                  <Typography  variant="h5" >
                    Info
                  </Typography>
                  <div className={classes.grow}></div>
                  <Button type="submit" variant="contained" color="primary" className={classes.button}>
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
   
                    <Fieldset
                      name="score"
                      label="Score"
                      type="text"
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