import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DoctorForm from './DoctorForm';

function Doctor(props) {
    const [dData, setDData] = useState([]);
    const [updateDoctor, setUpadteDoctor] = useState(false);

    React.useEffect(() => {
        let locaData = JSON.parse(localStorage.getItem('doctor'));

        if (locaData) {
            setDData(locaData)
        }
    },[])

    const handleFormSubmit = (data) => {
        let id = Math.floor(Math.random() * 1000);
        let locaData = JSON.parse(localStorage.getItem('doctor'));

        if (locaData) {

            if(updateDoctor){
                let index = locaData.findIndex((v) => v.id == data.id);

                locaData[index]=data;

                localStorage.setItem('doctor', JSON.stringify(locaData));

                setUpadteDoctor(false);

                setDData(locaData)
            }else{
                locaData.push({ id: id, ...data});
                localStorage.setItem('doctor',JSON.stringify(locaData));
                setDData(locaData)
            }
        }else{
            localStorage.setItem('doctor',JSON.stringify([{ id, ...data}]));
            setDData([{ id, ...data}]);
        }
    }

    const handleDelete = (id) => {
        console.log("delete");
        let locaData = JSON.parse(localStorage.getItem('doctor'));
        const updateData = locaData.filter((v) => v.id !== id);
        localStorage.setItem('doctor',JSON.stringify(updateData));
        setDData(updateData);
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
                   rows={dData}
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