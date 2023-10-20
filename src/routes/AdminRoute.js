import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Medicines from '../admin/container/Medicines/Medicines';
import PrivateRoute from './PrivateRoute';
import Layout from '../admin/component/Layout';
import Doctor from '../admin/container/Doctor/Doctor';
import Departments from '../admin/container/Dept/Departments';

function AdminRoute(props) {
    return (
        <div>
            <Layout>
            <Routes>
                <Route element={<PrivateRoute />}>
                    <Route exact path='/medicines' element={<Medicines />} />
                    <Route exact path='/doctor' element={<Doctor />} />    
                    <Route exact path='/department' element={<Departments />} />            
                </Route>
            </Routes>
            </Layout>
        </div>
    );
}

export default AdminRoute;