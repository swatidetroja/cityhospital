import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../component/UI/Button/Button';
import Inputbox from '../../component/UI/InputBox/Inputbox';
import { Sectionheading } from '../../component/UI/Heading/Heading';
import * as yup from 'yup';
import { useFormik } from 'formik';

function Auth(props) {

    const [type, setType] = useState('login');

    let authObj, intiVal;

    if (type === 'login') {
        authObj = {
            email: yup.string().required(),
            password: yup.string().required(),
        }
        intiVal = {
            email: '',
            password: ''
        }
    } else if (type === 'signup') {
        authObj = {
            name: yup.string().required(),
            email: yup.string().required(),
            password: yup.string().required(),
            con_password : yup.string().required().test("con_password", "Password not same", function(val){
                if(val === this.parent.password){
                    return true;
                } else {
                    return false ;
                }
            }),
        }
        intiVal = {
            name: '',
            email: '',
            password: '',
            con_password : ''
        }
    } else {
        authObj = {
            email: yup.string().required(),
        }
        intiVal = {
            email: ''
        }
    }

    let authSchema = yup.object().shape(authObj);

    const formikObj = useFormik({
        initialValues: intiVal,

        onSubmit: values => {
            console.log(values);
        },
        enableReinitialize: true,
        validationSchema: authSchema
    });

    const { handleSubmit, handleBlur, handleChange, errors, values, touched } = formikObj

    console.log(errors);
    return (
        <main>
            <section id="appointment" className="appointment ">
                <div className="container">
                    <div className="section-title">

                        {
                            type === 'login' ? <Sectionheading>Login</Sectionheading> : type === 'forgot' ? <h2>Forgot</h2> : <h2>Signup</h2>
                        }
                    </div>
                    <form onSubmit={handleSubmit} role="form" className="php-email-form">
                        <div className="row justify-content-center">
                            <div className="col-md-8 form-group">
                                {

                                    type === 'signup' ? <Inputbox
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        id="name"
                                        placeholder="Your Name"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        values={values.name}
                                        errorText={errors.name && touched.name ? errors.name : ''}
                                    /> : null
                                }
                            </div>
                            <div className="col-md-8 form-group mt-3 mt-md-0">
                                {
                                    <Inputbox
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        id="email"
                                        placeholder="Your Email"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        values={values.email}
                                        errorText={errors.email && touched.email ? errors.email : ''}
                                    />
                                }
                            </div>
                            <div className="col-md-8 form-group mt-3 mt-md-0">
                                {
                                    type === 'login' || type === 'signup' ?<Inputbox
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        id="password"
                                        placeholder="Your Password"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        values={values.password}
                                        errorText={errors.password && touched.password ? errors.password : ''}
                                    />
                                        : null  
                                }
                            </div>
                            <div className="col-md-8 form-group mt-3 mt-md-0">
                                {
                                   type === 'signup' ?<Inputbox
                                        type="password"
                                        className="form-control"
                                        name="con_password"
                                        id="con_password"
                                        placeholder="Your confirm Password"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        values={values.con_password}
                                        errorText={errors.con_password && touched.con_password ? errors.con_password : ''}
                                    />
                                        : null  
                                }
                            </div>
                            <div className="col-md-8 form-group mt-3 mt-md-0">
                                {
                                    type === 'login' ? <NavLink><a type="submit" onClick={() => setType('forgot')}>Forgot password? </a></NavLink> : null
                                }
                            </div>
                        </div>
                        <div className="text-center">
                            {
                                type === 'login' ? <Button type="submit">Login</Button> :
                                    type === 'signup' ? <Button Btntype='outline' type="submit">Signup</Button> :
                                        <Button Btntype='secondary' type="submit">Submit</Button>
                            }
                        </div>
                    </form>
                    <div className=" php-email-form text-center">
                        {
                            type === 'login' ?
                                <span>Create an account?  <NavLink><a type="submit" onClick={() => setType('signup')}>Signup</a></NavLink></span>
                                :
                                <span>Already an account?  <NavLink><a type="submit" onClick={() => setType('login')}>Login</a></NavLink></span>
                        }
                    </div>
                </div>
            </section>
        </main>

    );
}

export default Auth;