import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Reviewlink(props) {

    const [rData, setRData] = useState([]);

    const { id } = useParams();

    const getReviewData = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/comments")
        const data = await response.json();

        const newData = data.filter((v) => v.id == id);
        console.log(newData);

        setRData(newData[0]);

    }
    useEffect(() => {
        getReviewData();
    }, [])


    return (
        <>
            <h1>Review New Page</h1>
                <h3>{rData.name}</h3>
                <p>{rData.body}</p>
            
        </>
    );
}

export default Reviewlink;