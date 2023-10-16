import React from 'react';
import { Sectionheading } from '../../component/UI/Heading/Heading';
import * as yup from 'yup';
import { useFormik } from 'formik';


function Appointment(props) {

    let d = new Date();
    let nd = new Date();
    nd.setDate(d.getDate() - 1);

    let aptSchema = yup.object().shape({

        name: yup.string().required("Please enter name").matches(/^[a-zA-Z ]{2,30}$/, "Please enter valid name"),
        email: yup.string().email("Enter valid email").required("Please enter name"),
        phone: yup.string()
            .required("Please enter phone")
            .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits'),
        date: yup.date()
            .required("Please enter date")
            .min(nd, 'Please select future date'),
        department: yup.string().required("Please select department"),
        message: yup.string()
            .required("Please enter message")
            .min(10, "Minimum 10 characters Required")
            .max(100, "Minimum 100 characters Allowed")
            .matches(/^([A-Za-z]+ )+[A-Za-z]+$|^[A-Za-z]+$/, "More than single space between word")
            .matches(/^(\w+\s?){1,5}$/, 'Message must have at most 5 words'),
        image: yup
        .mixed( /^([a-zA-Z0-9\s_\\.\-:])+(.jpg)$/,"Only jpg allowed")
        .required("Please select image")

        // .test("type", "Only JPEG accepted", (value) => {
        //     return value && (
        //         value[0].type === "image/jpeg" 
        //     );
        // })
        // .test('fileType','Only JPEG file allowed', function (value) {
        //     if(value && value.type === 'image/jpeg'){
        //         return true;
        //     } else{
        //         return false;
        //     }
        // })
        .test('fileSize','Up to 2MB file allowed', function (value) {
            if(value && value.size <= 2000000 ){
                return true;
            } else{
                return false;
            }
        }),


    })

    const formikObj = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            date: '',
            department: '',
            message: '',
            image:''
        },
        onSubmit: values => {
            console.log(values);
            let arr = values.message.split(" ");
            // console.log(arr);

            let newarr = arr.map((v) => {
                return v[0].toUpperCase() + v.substring(1)
            })

            console.log(newarr);
            let joinarr = newarr.join(" ");
            console.log(joinarr);
        },
        validationSchema: aptSchema
    })

    const { handleSubmit, handleBlur, handleChange, errors, values, touched } = formikObj
    return (
        <main>
            <section id="appointment" className="appointment">
                <div className="container">
                    <div className="section-title">
                        <Sectionheading>Make an Appointment</Sectionheading>
                        <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                            blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
                            Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
                    </div>
                    <form onSubmit={handleSubmit} className="php-email-form">
                        <div className="row">
                            <div className="col-md-4 form-group">
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    id="name"
                                    placeholder="Your Name"
                                    data-rule="minlen:4"
                                    data-msg="Please enter at least 4 chars"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    values={values.name}
                                />
                                {errors.name && touched.name ? <span>{errors.name}</span> : null}

                            </div>
                            <div className="col-md-4 form-group mt-3 mt-md-0">
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    id="email"
                                    placeholder="Your Email"
                                    data-rule="email"
                                    data-msg="Please enter a valid email"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    values={values.email}
                                />
                                {errors.email && touched.email ? <span>{errors.email}</span> : null}

                            </div>
                            <div className="col-md-4 form-group mt-3 mt-md-0">
                                <input
                                    type="tel"
                                    className="form-control"
                                    name="phone"
                                    id="phone"
                                    placeholder="Your Phone"
                                    data-rule="minlen:4"
                                    data-msg="Please enter at least 4 chars"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    values={values.phone}
                                />
                                {errors.phone && touched.phone ? <span>{errors.phone}</span> : null}

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 form-group mt-3">
                                <input
                                    type="date"
                                    name="date"
                                    className="form-control datepicker"
                                    id="date"
                                    placeholder="Appointment Date"
                                    data-rule="minlen:4"
                                    data-msg="Please enter at least 4 chars"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    values={values.date}
                                />
                                {errors.date && touched.date ? <span>{errors.date}</span> : null}

                            </div>
                            <div className="col-md-4 form-group mt-3">
                                <select
                                    name="department"
                                    id="department"
                                    className="form-select"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    values={values.department}
                                >
                                    <option value=''>Select Department</option>
                                    <option value="Department 1">Department 1</option>
                                    <option value="Department 2">Department 2</option>
                                    <option value="Department 3">Department 3</option>
                                </select>
                                {errors.department && touched.department ? <span>{errors.department}</span> : null}

                            </div>
                            <div className="col-md-4 form-group mt-3">
                                <input
                                    type='file'
                                    name="image" 
                                    id="image" 
                                    className="form-select"  
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    values={values.image} 
                                />
                                
                                {errors.image && touched.image ? <span>{errors.image}</span> : null}
                                
                            </div>

                        </div>

                        <div className="form-group mt-3">
                            <textarea
                                className="form-control"
                                name="message"
                                rows={5} placeholder="Message (Optional)"
                                defaultValue={""}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                values={values.message}
                            />
                            {errors.message && touched.message ? <span>{errors.message}</span> : null}

                        </div>
                        <div className="mb-3">
                            <div className="loading">Loading</div>
                            <div className="error-message" />
                            <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                        </div>
                        <div className="text-center"><button type="submit">Make an Appointment</button></div>
                    </form>
                </div>
            </section>
        </main>

    );
}

export default Appointment;