import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as yup from 'yup';
import { useFormik } from 'formik';

function DoctorForm({ onhandlesubmit, updateData }) {

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
        setOpenDialog(false);
    };


    let docSchema = yup.object().shape({
        name: yup.string().required("Please enter name"),
        desc: yup.string().required("Please enter Descripation"),
        desig: yup.string().required("Please enter Designation"),
        profile: yup.string().required("Please enter Profile")

    })


    const formikObject = useFormik({
        initialValues: {
            name: '',
            desc: '',
            desig: '',
            profile: ''
        },
        onSubmit: (values, action) => {
            onhandlesubmit(values);
            console.log(values);
            action.resetForm();
            handleCloseDialog();

        },
        validationSchema: docSchema
    })

    const { handleSubmit, handleBlur, handleChange, errors, values, touched, setValues } = formikObject
    return (
        <>
            <Button variant="outlined" onClick={handleClickOpenDialog}>
                Add Doctor Details
            </Button>
            <Dialog open={openDialog} onClose={handleCloseDialog} onSubmit={handleSubmit}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter Doctor Details.
                    </DialogContentText>
                    <TextField
                        margin="dense"
                        id="name"
                        name="name"
                        label="Doctor Name"
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
                        id="name"
                        name="desc"
                        label="Descripation"
                        type="text"
                        fullWidth
                        variant="standard"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.desc}
                    />
                    {errors.desc && touched.desc ? <span>{errors.desc}</span> : null}
                    <TextField
                        margin="dense"
                        id="name"
                        name="desig"
                        label="Designation"
                        type="text"
                        fullWidth
                        variant="standard"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.desig}
                    />
                    {errors.desig && touched.desig ? <span>{errors.desig}</span> : null}
                    <TextField
                        margin="dense"
                        id="name"
                        name="profile"
                        label="Profile"
                        type="text"
                        fullWidth
                        variant="standard"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.profile}
                    />
                    {errors.profile && touched.profile ? <span>{errors.profile}</span> : null}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog}>Cancel</Button>
                    <Button onClick={handleSubmit} type='submit'>{updateData ? 'Update' : 'Add'}</Button>
                </DialogActions>
            </Dialog>

        </>
    );
}

export default DoctorForm;