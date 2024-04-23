import React, { useState } from 'react';
import { Box, Typography, TextField, Button, CircularProgress, Container } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Styles } from '../style.ts';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  phoneNumber: Yup.string()
    .test('is-phone-valid', 'Phone number is invalid', (value) => {
      // Check if value is empty or matches the phone number pattern
      return !value || /^[0-9]{11}$/.test(value);
    })
    .required('Phone number is required'),
  message: Yup.string()
    .required('Message is required')
});

function ContactUs() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (values, { resetForm }) => {
    // Set loading state to true when the form is submitted
    setIsLoading(true);

    // Simulate an asynchronous operation (like form submission)
    setTimeout(() => {
      // After the operation is done, set loading state back to false
      setIsLoading(false);

      // Perform form submission logic here
      alert(JSON.stringify(values));

      // Reset the form after successful submission
      resetForm();
    }, 2000); // Replace this with your actual asynchronous operation
  };

  return (
    <>  
    <Container>
      <Box>
        <Typography variant='h2' textAlign={'center'} sx={{...Styles.font_50_700 , ...Styles.font_Montserrat}} mt={10}>Contact Us</Typography>
        <Box mt={10} sx={{...Styles.mainForm}}>
          <Box display={'flex'} justifyContent="center">
            <img width={'600px'} src='./images/contact_us.jpg' alt="Contact Us" />
          </Box>
          <Box display="flex" justifyContent="center" mt={5}>
            <Formik
              initialValues={{
                name: '',
                email: '',
                phoneNumber: '',
                message: ''
              }}
              onSubmit={handleSubmit} // Pass handleSubmit function here
              validationSchema={validationSchema}
            >
              {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                  <Box display="flex" flexDirection="column" alignItems="center">
                    <TextField
                      sx={{...Styles.fromTextfield}}
                      label="Name"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.name && !!errors.name}
                      helperText={touched.name && errors.name}
                    />
                    <TextField
                      sx={{marginTop: '25px',...Styles.fromTextfield}}
                      label="Email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.email && !!errors.email}
                      helperText={touched.email && errors.email}
                    />
                    <TextField
                      sx={{marginTop: '25px',...Styles.fromTextfield}}
                      label="Phone Number"
                      name="phoneNumber"
                      value={values.phoneNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.phoneNumber && !!errors.phoneNumber}
                      helperText={touched.phoneNumber && errors.phoneNumber}
                    />
                    <TextField
                      sx={{marginTop: '25px',...Styles.fromTextAerafield}}
                      label="Message"
                      name="message"
                      multiline
                      rows={4}
                      value={values.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.message && !!errors.message}
                      helperText={touched.message && errors.message}
                    />
                    <Button
                      sx={{marginTop: '25px', width: '100%'}}
                      type="submit"
                      variant="contained"
                      color="primary"
                      mt={2}
                      disabled={isLoading} // Disable the button when loading
                    >
                      {isLoading ? <CircularProgress size={24} /> : 'Submit'}
                    </Button>
                  </Box>
                </Form>
              )}
            </Formik>
          </Box>
        </Box>
      </Box>
    </Container>
    </>
  );
}

export default ContactUs;
