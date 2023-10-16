import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import * as yup from 'yup';
import { useFormik } from 'formik';

export default function FirstPages() {
  let medSchema = yup.object().shape({
    eduction: yup.string().required("Please enter Education"),
    marks: yup.string().required("Please enter Marks "),
    year: yup.string().required("Please enter Passing Year")
      .min(new Date(), "Please select future date"),
    university: yup.string().required("Please enter University")
      .max(100, "Maximum 100 characters Required"),

  })

  const formikObject = useFormik({
    initialValues: {
      eduction: '',
      marks: '',
      year: '',
      university: ''
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
          id="eduction"
          name="eduction"
          placeholder='Eduction'
          fullWidth
          variant="standard"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.eduction}
        />
        {errors.eduction && touched.eduction ? <span>{errors.eduction}</span> : null}
        <TextField
          margin="dense"
          id="marks"
          name="marks"
          placeholder='Marks'
          fullWidth
          variant="standard"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.marks}
        />
        {errors.marks && touched.marks ? <span>{errors.marks}</span> : null}
        <TextField
          margin="dense"
          id="year"
          name="year"
          placeholder='Passing Year'
          fullWidth
          variant="standard"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.year}
        />
        {errors.year && touched.year ? <span>{errors.year}</span> : null}
        <TextField
          margin="dense"
          id="university"
          name="university"
          placeholder='University'
          fullWidth
          variant="standard"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.university}
        />
        {errors.university && touched.university ? <span>{errors.university}</span> : null}

      </div>

    </Box>
  );
}