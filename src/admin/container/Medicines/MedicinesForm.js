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

function MedicinesForm({onhandlesubmit,updateData}) {

    const [openDialog, setOpenDialog] = React.useState(false);

    useEffect(() => {
        if(updateData){
            setValues(updateData);
            handleClickOpenDialog()
        }
    },[updateData])
    const handleClickOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    let medSchema = yup.object().shape({
        name: yup.string().required("Please enter name"),
        price: yup.string().required("Please enter Price"),
        expiry: yup.date().required("Please enter date")
            .min(new Date(), "Please select future date"),
        desc: yup.string().required("Please enter desc")
            .max(100, "Maximum 100 characters Required"),

    })

    const formikObject = useFormik({
        initialValues: {
            name: '',
            price: '',
            expiry: '',
            desc: ''
        },

        onSubmit: (values,action) => {
            onhandlesubmit(values);
            console.log(values);
            action.resetForm();
            handleCloseDialog();

        },
        validationSchema: medSchema
    })

    const { handleSubmit, handleBlur, handleChange, errors, values, touched , setValues} = formikObject
    return (
        <>
           <Button variant="outlined" onClick={handleClickOpenDialog}>
                Add Medicine
            </Button>
            <Dialog open={openDialog} onClose={handleCloseDialog} onSubmit={handleSubmit}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your Medicines Details.
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
                        id="name"
                        name="price"
                        label="Price"
                        type="number"
                        fullWidth
                        variant="standard"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.price}
                    />
                    {errors.price && touched.price ? <span>{errors.price}</span> : null}
                    <TextField
                        margin="dense"
                        id="name"
                        name="expiry"
                        label="Expiry"
                        type="date"
                        fullWidth
                        variant="standard"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.expiry}
                    />
                    {errors.expiry && touched.expiry ? <span>{errors.expiry}</span> : null}
                    <TextField
                        margin="dense"
                        id="name"
                        name="desc"
                        label="Description"
                        type="text"
                        fullWidth
                        variant="standard"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.desc}
                    />
                    {errors.desc && touched.desc ? <span>{errors.desc}</span> : null}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog}>Cancel</Button>
                    <Button onClick={handleSubmit} type='submit'>{updateData ? 'Update' : 'Add'}</Button>
                </DialogActions>
            </Dialog>  
        </>
    );
}

export default MedicinesForm;