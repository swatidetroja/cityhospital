import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import MedicinesForm from './MedicinesForm';
import { Update } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { addMedicines, deleteMedicines, getMedicines, updateMedicines } from '../../../redux/action/medicines.action';
import { GET_MEDICINES } from '../../../redux/Action.type';
import CircularProgress from '@mui/material/CircularProgress';


export function Medicines() {

    const [updateMedicine, setUpdateMedicine] = useState(false)

    const dispatch = useDispatch();
    const medicine = useSelector(state => state.medicines)

    React.useEffect(() => {
        dispatch(getMedicines())
    }, [])

    const handleFormSubmit = (data) => {

        if (updateMedicine) {
            dispatch(updateMedicines(data))
        } else {
            dispatch(addMedicines(data))
        }
        setUpdateMedicine(false)
    }

    const handleDelete = (id) => {
        dispatch(deleteMedicines(id))
    }

    const handleEdit = (data) => {
        setUpdateMedicine(data)
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'price', headerName: 'Price', width: 130 },
        { field: 'expiry', headerName: 'Expiry', width: 130 },
        { field: 'desc', headerName: 'Descripation', width: 130 },
        {
            field: 'action', headerName: 'Action', width: 130, renderCell: (params) => (
                <>
                    <IconButton aria-label="edit" onClick={() => { handleEdit(params.row) }}>
                        <EditIcon />
                    </IconButton>
                    <IconButton aria-label="delete" onClick={() => { handleDelete(params.row.id) }}>
                        <DeleteIcon />
                    </IconButton>
                </>
            )
        },
    ];

    return (
        <div>
            <MedicinesForm onhandlesubmit={handleFormSubmit} updateData={updateMedicine} />
            {
                medicine.isLoading ? <div style={{ margin: '0 auto', padding: '10px 0' }}> <CircularProgress /> </div> :
                    medicine.error ? <div style={{ margin: '0 auto', color: 'red', fontSize: '25px', padding: '10px 0' }}> {medicine.error} </div> :


                        <div style={{ height: 400, width: '100%' }}>
                            <DataGrid
                                rows={medicine.medicines}
                                columns={columns}
                                initialState={{
                                    pagination: {
                                        paginationModel: { page: 0, pageSize: 5 },
                                    },
                                }}
                                pageSizeOptions={[5, 10]}
                                checkboxSelection
                            />
                        </div>
            }

        </div>

    );
}

export default Medicines;