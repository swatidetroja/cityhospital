import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function MedicinesData(props) {

  const [mData, setMData] = useState([]);

  const { id } = useParams();

  let locaData = JSON.parse(localStorage.getItem('medicines'));

  const getMedicinesData = async () => {

    const fData = locaData.filter((v, i) => v.id == id);
    console.log(fData);

    setMData(fData[0]);
  }

  useEffect(() => {
    getMedicinesData();
  }, [])

  return (
    <div style={{
      width: '50%',
      height: ' 250px',
      margin: ' 0 auto',
      border: '2px solid black',
      padding: '10px',
      boxShadow:'5px 5px #888888',border: '1px solid black', borderRadius:'5px', textAlign:'center', backgroundColor:'#ca7d68df'
    }}>
      <h3>{mData.id}</h3>
      <p>{mData.name}</p>
      <p>{mData.price}</p>
      <p>{mData.expiry}</p>
      <p>{mData.desc}</p>
    </div>
  );
}

export default MedicinesData;