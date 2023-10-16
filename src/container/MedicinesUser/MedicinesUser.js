import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../component/UI/Card/Card';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


function MedicinesUser({ incrementCart, wishList ,setWishList}) {

  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');
  let locaData = JSON.parse(localStorage.getItem('medicines'));

  const handleSerachSort = () => {

    let fData = [];
    fData = locaData.filter((v) =>
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

  const handleAddToWishlist = (id) => {
    console.log(id);
    if (wishList.includes(id)) {
      let fData = wishList.filter((v) => v != id);
      setWishList(fData)
    } else {
      setWishList( prev => [...prev,id])
    }
  }
  console.log(wishList);  
  
  const handleAddToCart = () => {

    console.log("adddd");
    incrementCart((prev) => prev + 1);

  }
  return (
    <>
      <div style={{ marginLeft: '40%', }}>
        <input
          type='text'
          placeholder='Search Medicines'
          onChange={(event) => setSearch(event.target.value)}
          style={{
            marginBottom: "15px",
            width: "300px",
            padding: "10px",
          }}
        />
      </div>
      <div style={{ marginLeft: '40%', }}>
        <select onChange={(event) => setSort(event.target.value)}>
          <option value='0'>--Select--</option>
          <option value='1'>Price (Low to High)</option>
          <option value='2'>Price (High to Low)</option>
          <option value='3'>Name (a to z)</option>
          <option value='4'>Name (z to a)</option>
        </select>
      </div>
      <div className='container' style={{ display: 'flex', flexWrap: 'wrap' }}>
        {
          finalData.map((v, i) => {
            return (
              <div className='row'>
                {/* <Link to={"/medicinedata/" + v.id}> */}
                <div className='col-md-3' style={{ width: '200px',margin: '20px 60px', textAlign: 'center'}}>
                  <Card
                    title={v.name}
                    subtitle={v.price}
                    btnValue='Add to cart'
                    btnClick={handleAddToCart}
                    favClick={() => handleAddToWishlist(v.id)}
                    favStatus={(wishList.includes(v.id)) ? true : false}
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