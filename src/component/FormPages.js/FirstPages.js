import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import * as yup from 'yup';
import { useFormik } from 'formik';

export default function FirstPages() {
  let medSchema = yup.object().shape({
    email: yup.string().required("please enter Email"),
    password: yup.string().required(),
    con_password: yup.string().required().test("con_password", "Password not same", function (val) {
      if (val === this.parent.password) {
        return true;
      } else {
        return false;
      }
    }),

  })

  const formikObject = useFormik({
    initialValues: {
      email: '',
      password: '',
      con_password: ''
      
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
          id="email"
          name="email"
          placeholder='Email'
          fullWidth
          variant="standard"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.email}
        />
        {errors.email && touched.email ? <span>{errors.email}</span> : null}
        <TextField
          margin="dense"
          id="password"
          name="password"
          placeholder='Password'
          fullWidth
          variant="standard"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.password}
        />
        {errors.password && touched.password ? <span>{errors.password}</span> : null}
        <TextField
          margin="dense"
          id="con_password"
          name="con_password"
          placeholder='con_password'
          fullWidth
          variant="standard"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.con_password}
        />
        {errors.con_password && touched.con_password ? <span>{errors.con_password}</span> : null}
       

      </div>

    </Box>
  );
}