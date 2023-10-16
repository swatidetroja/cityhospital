import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import * as yup from 'yup';
import { useFormik } from 'formik';

export default function FirstPages() {
  let medSchema = yup.object().shape({
    fname: yup.string().required("Please enter First name"),
    lname: yup.string().required("Please enter Last name "),
    contact: yup.string().required("Please enter Contact number"),
    address: yup.string().required("Please enter Address")
  })

  const formikObject = useFormik({
    initialValues: {
      fname: '',
      lname: '',
      contact: '',
      address: ''
    },

    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    },
    validationSchema: medSchema
  })

  const { handleSubmit, handleBlur, handleChange, errors, values, touched, setValues } = formikObject
  return (
    <Box>
      <div>
        <TextField
          margin="dense"
          id="fname"
          name="fname"
          placeholder='First name'
          fullWidth
          variant="standard"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.fname}
        />
        {errors.fname && touched.fname ? <span>{errors.fname}</span> : null}
        <TextField
          margin="dense"
          id="lname"
          name="lname"
          placeholder='Last name'
          fullWidth
          variant="standard"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.lname}
        />
        {errors.lname && touched.lname ? <span>{errors.lname}</span> : null}
        <TextField
          margin="dense"
          id="contact"
          name="contact"
          placeholder='Contact number'
          fullWidth
          variant="standard"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.contact}
        />
        {errors.contact && touched.contact ? <span>{errors.contact}</span> : null}
        <TextField
          margin="dense"
          id="address"
          name="address"
          placeholder='Address'
          fullWidth
          variant="standard"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.address}
        />
        {errors.address && touched.address ? <span>{errors.address}</span> : null}

      </div>

    </Box>
  );
}