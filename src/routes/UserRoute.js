import React from 'react';
import Home from '../container/Home/Home';
import { Form, Route, Routes } from 'react-router-dom';
import Header from '../component/Header/Header';
import Footer from '../component/Footer/Footer';
import Departments from '../container/Departments/Departments';
import Doctors from '../container/Doctors/Doctors';
import About from '../container/About/About';
import Contact from '../container/Contact/Contact';
import Appointment from '../container/Appointment/Appointment';
import Auth from '../container/Auth/Auth';
import PrivateRoute from './PrivateRoute';
import Dept from '../container/Departments/Dept';
import Reviewlink from '../container/Home/Reviewlink';
import MedicinesUser from '../container/MedicinesUser/MedicinesUser';
import Product from '../container/Product/Product';
import MedicinesData from '../container/MedicinesUser/MedicinesData';
import FormData from '../container/Form/FormData'
import { useState } from 'react';
import Counter from '../container/Counter/Counter';

function UserRoute(props) {
  const [countCart, setCountCart] = useState(0);
  const [wishList, setWishList] = useState([]);

    return (
      <>
       <Header countCart={countCart} wishList={wishList}/>
        <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/reviewlink/:id' element={<Reviewlink />} />
        <Route exact path='/departments' element={<Departments />} />
        <Route exact path='/departments/:id' element={<Dept />} />
        <Route exact path='/doctors' element={<Doctors />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/medicines' element={<MedicinesUser wishList={wishList} setWishList={setWishList} incrementCart={setCountCart} />} />
        <Route exact path='/medicinedata/:id' element={<MedicinesData />} />
        <Route exact path='/form' element={<FormData />} />
        <Route exact path='/counter' element={<Counter />} />
        <Route element={<PrivateRoute />}>
        <Route exact path='/appointment' element={<Appointment />} />
        </Route>
        <Route exact path='/auth' element={<Auth />} />
      </Routes>
       <Footer />
      </>
     
    );
}

export default UserRoute;