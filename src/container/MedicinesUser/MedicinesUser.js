import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../component/UI/Card/Card';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useDispatch, useSelector } from 'react-redux';
import { getMedicines, loadingMedicines } from '../../redux/action/medicines.action';
import CircularProgress from '@mui/material/CircularProgress';
import { addToCart } from '../../redux/action/cart.action';
import { addToWishlist } from '../../redux/action/wishlist.action';

function MedicinesUser(props) {

  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');

  const dispatch = useDispatch();

  const medicines = useSelector(state=>state.medicines);
  console.log(medicines);

  // let locaData = JSON.parse(localStorage.getItem('medicines'));
  useEffect (() => {
    dispatch(getMedicines())
  },[])

  const handleSerachSort = () => {

    let fData = [];
    fData = medicines.medicines.filter((v) =>
      (v.name.toLowerCase().includes(search.toLowerCase())) ||
      (v.price.toString().includes(search.toString()))
    )

    // console.log(fData);

    fData.sort((a, b) => {
      if (sort === '1') {
        return a.price - b.price;
      } else if (sort === '2') {
        return b.price - a.price;
      } else if (sort === '3') {
        return a.title.localeCompare(b.name);
      } else if (sort === '4') {
        return b.title.localeCompare(a.name);
      }
    })
    return fData;
  }

  const finalData = handleSerachSort();

  const handleAddToWishlist = (event, id) => {
    console.log(id);
    dispatch(addToWishlist(id))
    
  }
  
  const handleAddToCart = (event, id) => {
    console.log(id);
    dispatch(addToCart(id));

  }
  return (
    <>
      <div style={{textAlign:'center', marginTop:'15px'}}>
        <input
          type='text'
          placeholder='Search Medicines'
          onChange={(event) => setSearch(event.target.value)}
          style={{
            marginBottom: "15px",
            width: "200px",
            height: '25px',
            padding: "10px",
          }}
        />
      </div>
      <div style={{ textAlign:'center', marginTop:'15px'}}>
        <select onChange={(event) => setSort(event.target.value)} style={{width:'200px',margin:'0 auto'}}>
          <option value='0'>--Select--</option>
          <option value='1'>Price (Low to High)</option>
          <option value='2'>Price (High to Low)</option>
          <option value='3'>Name (a to z)</option>
          <option value='4'>Name (z to a)</option>
        </select>
      </div>
      <div className='container' style={{ display: 'flex', flexWrap: 'wrap' }}>
        
        
        {
          medicines.isLoading ? <div style={{margin:'0 auto', padding:'10px 0'}}> <CircularProgress /> </div>:
          medicines.error ? <div style={{margin:'0 auto',color:'red',fontSize:'25px', padding:'10px 0'}}> {medicines.error} </div> :
            finalData.map((v, i) => {
              return (
                <div className='row'>
                  {/* <Link to={"/medicinedata/" + v.id}> */}
                  <div className='col-md-3' style={{ width: '200px',margin: '20px 60px', textAlign: 'center'}}>
                    <Card
                      title={v.name}
                      subtitle={v.price}
                      btnValue='Add to cart'
                      btnClick={(event) => handleAddToCart(event, v.id)}
                      favClick={(event) => handleAddToWishlist(event, v.id)}
                      // favStatus={(wishList.includes(v.id)) ? true : false}
                    />
  
                  </div>
                  {/* </Link> */}
                </div>
              )
            })
          }
        
        
      </div>
    </>
  );
}

export default MedicinesUser;