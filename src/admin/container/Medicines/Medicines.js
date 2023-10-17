import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import MedicinesForm from './MedicinesForm';
import { Update } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMedicines, getMedicines } from '../../../redux/action/medicines.action';
import { GET_MEDICINES } from '../../../redux/Action.type';


export function Medicines() {

    const [mData, setMData] = useState([]);
    const [updateMedicine, setUpdateMedicine] = useState(false)

    const dispatch = useDispatch();
    const medicine = useSelector(state => state.medicines)

    React.useEffect(() => {
       dispatch(getMedicines())
    }, [])

    const handleFormSubmit = (data) => {
        let id = Math.floor(Math.random() * 1000);
        let locaData = JSON.parse(localStorage.getItem('medicines'));

        if (locaData) {

            if(updateMedicine){
                let index = locaData.findIndex((v) => v.id == data.id);
        
                locaData[index]=data;
        
                localStorage.setItem('medicines', JSON.stringify(locaData));
        
                setUpdateMedicine(false)
                
                setMData(locaData)
            } else {
                locaData.push({ id: id, ...data });
                localStorage.setItem('medicines', JSON.stringify(locaData));
                setMData(locaData)
            }
        } else {
            localStorage.setItem('medicines', JSON.stringify([{ id, ...data }]));
            setMData([{ id, ...data }])
        }
    }

    const handleDelete = (id) => {
        // console.log("ddddddd");
        // let locaData = JSON.parse(localStorage.getItem('medicines'));
        // const updateData = locaData.filter((v) => v.id !== id);
        // localStorage.setItem('medicines', JSON.stringify(updateData));
        // setMData(updateData);
        dispatch(deleteMedicines(id))
    }

    const handleEdit = (data) => {
        // console.log(data);
        // handleClickOpenDialog();
        // setValues(data);
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
                    <IconButton aria-label="edit" onClick={() => {handleEdit(params.row)}}>
                        <EditIcon />
                    </IconButton>
                    <IconButton aria-label="delete" onClick={() => {handleDelete(params.row.id)}}>
                        <DeleteIcon />
                    </IconButton>
                </>
            )
        },
    ];

    return (
        <div>
            <MedicinesForm onhandlesubmit={handleFormSubmit} updateData={updateMedicine}/>
           
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

        </div>

    );
}

export default Medicines;