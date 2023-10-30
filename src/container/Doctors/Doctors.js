import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Sectionheading } from '../../component/UI/Heading/Heading';
import { useDispatch, useSelector } from 'react-redux';
import { getDoctor } from '../../redux/action/doctor.action';


function Doctors(props) {

    const dispatch = useDispatch();

    const doctor = useSelector(state=>state.doctor)
    console.log(doctor);

    useEffect(() => {
        dispatch(getDoctor())
    },[])
    return (
        <>
            <main>
                <section id="doctors" className="doctors">
                    <div className="container">
                        <div className="section-title">
                            <Sectionheading>Doctors</Sectionheading>
                            <p>Duis sagittis rutrum neque, quis tincidunt arcu pretium ac. Suspendisse sem risus, molestie vitae arcu et,
                                tincidunt viverra erat. Quisque in lectus id nulla viverra sodales in a risus. Aliquam ut sem ex. Duis viverra
                                ipsum lacus, ut pharetra arcu sagittis nec. Phasellus a eleifend elit.</p>
                        </div>
                        <div style={{display:'flex', flexWrap:'wrap',justifyContent: 'space-between'}} >
                            {
                                doctor.doctor.map((v) => {
                                    return (
                                        <div style={{width:'420px',border:'2px solid grey', borderRadius:'5px',textAlign:'center',padding:'10px',margin:'20px 15px'}}>
                                            <h4>{v.name}</h4>
                                            <span>{v.desc}</span>
                                            <p>{v.desig}</p>
                                            <p>{v.profile}</p>
                                            <div class="social">
                                                <a href=""><i class="ri-twitter-fill"></i></a>
                                                <a href=""><i class="ri-facebook-fill"></i></a>
                                                <a href=""><i class="ri-instagram-fill"></i></a>
                                                <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>
            </main>
        </>


    );
}

export default Doctors;