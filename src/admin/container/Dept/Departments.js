import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DepartmentsForm from './DepartmentsForm';
import { useDispatch, useSelector } from 'react-redux';
import { addDepartments, deleteDepartments, getDepartments, updateDepartments } from '../../../redux/action/department.action';

export function Departments() {

    const [updateDepartment, setUpdateDepartment] = useState(false)

    const dispatch = useDispatch();
    const dep = useSelector(state => state.departments)
    console.log(dep);
    
    React.useEffect(() => {
        dispatch(getDepartments())
    },[])

    const handleFormSubmit = (data) => {
        if(updateDepartment){
            dispatch(updateDepartments(data))
        }else{
            dispatch(addDepartments(data))
        }
        setUpdateDepartment(false)
    }

    const handleDelete = (id) => {
        dispatch(deleteDepartments(id))
    }

    const handleEdit = (data) => {
        setUpdateDepartment(data)
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'sortdes', headerName: 'Sort-Descripation', width: 130 },
        { field: 'longdes', headerName: 'Long-Descripation', width: 130 },
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
            <DepartmentsForm onhandlesubmit={handleFormSubmit} updateData={updateDepartment}/>
           <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={dep.departments}
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

export default Departments;