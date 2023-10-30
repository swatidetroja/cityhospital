import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DoctorForm from './DoctorForm';
import { useDispatch, useSelector } from 'react-redux';
import { addDoctor, deleteDoctor, editDoctor, getDoctor } from '../../../redux/action/doctor.action';

function Doctor(props) {
    const [dData, setDData] = useState([]);
    const [updateDoctor, setUpadteDoctor] = useState(false);

    const dispatch = useDispatch();

    const doctor = useSelector(state=>state.doctor);
    console.log(doctor);

    React.useEffect(() => {
        dispatch(getDoctor())
    },[])

    const handleFormSubmit = (data) => {
       if(updateDoctor){
        dispatch(editDoctor(data))
       }else{
        dispatch(addDoctor(data))
       }

       setUpadteDoctor (false);
    }

    const handleDelete = (id) => {
       dispatch(deleteDoctor(id))
    }

    const handleEdit = (data) => {
        setUpadteDoctor(data);
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Doctor Name', width: 130 },
        { field: 'desc', headerName: 'Descripation', width: 130 },
        { field: 'designation', headerName: 'Designation', width: 130 },
        { field: 'profile', headerName: 'Profile', width: 130 },
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
             <DoctorForm onhandlesubmit={handleFormSubmit} updateData={updateDoctor}/>
           
           <div style={{ height: 400, width: '100%' }}>
               <DataGrid
                   rows={doctor.doctor}
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

export default Doctor;