import * as yup from 'yup';
import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useFormik } from 'formik';

export default function DepartmentsForm({ onhandlesubmit, updateData }) {
  const [openDialog, setOpenDialog] = React.useState(false);

  useEffect(() => {
    if (updateData) {
      setValues(updateData);
      handleClickOpenDialog()
    }
  }, [updateData])

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    openDialog(false);
  };

  let deptSchema = yup.object().shape({
    name: yup.string().required("Please enter name"),
    sortdes: yup.string().required("Please enter Sort-Discripation"),
    longdes: yup.string().required("Please enter Long-Discripation")
  })

  const formikObject = useFormik({
    initialValues: {
      name: '',
      sortdes: '',
      longdes: ''
    },

    onSubmit: (values, action) => {
      onhandlesubmit(values);
      console.log(values);
      action.resetForm();
      handleCloseDialog();

    },
    validationSchema: deptSchema
  })

  const { handleSubmit, handleBlur, handleChange, errors, values, touched, setValues } = formikObject
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpenDialog} >
        Add Departments
      </Button>
      <Dialog open={openDialog} onClose={handleCloseDialog} onSubmit={handleSubmit}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your Departments Details.
          </DialogContentText>
          <TextField
            margin="dense"
            id="name"
            name="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.name}
          />
           {errors.name && touched.name ? <span>{errors.name}</span> : null}
           <TextField
            margin="dense"
            id="sortdes"
            name="sortdes"
            label="sortdes"
            type="text"
            fullWidth
            variant="standard"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.sortdes}
          />
           {errors.sortdes && touched.sortdes ? <span>{errors.sortdes}</span> : null}
           <TextField
            margin="dense"
            id="longdes"
            name="longdes"
            label="longdes"
            type="text"
            fullWidth
            variant="standard"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.longdes}
          />
           {errors.longdes && touched.longdes ? <span>{errors.longdes}</span> : null}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleSubmit} type='submit'>{updateData ? 'Update' : 'Add'}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
