import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { useState } from 'react';
import Button from '../../component/UI/Button/Button';
import * as yup from 'yup';
import { useFormik } from 'formik';

const categoryOptions = ['Electronics', 'Clothing', 'Books'];

const validationSchema = yup.object().shape({
  productName: yup.string().required('Product Name is required'),
  category: yup.string().required('Category is required'),
  price: yup.number()
    .required('Price is required')
    .positive('Price must be positive'),
  discount: yup.number().positive('Discount must be positive'),
  productImage: yup.mixed().required('Product Image is required'),
});

function FormData(props) {

  const [step, setStep] = useState(1);

  const initialValues = {
    productName: '',
    category: '',
    description: '',
    price: '',
    discount: '',
    productImage: null,
  };


  const handleNextStep = () => {
    if (step < 4) {
      setStep(step + 1);
    }
  }
  const handlePreviousStep = () => {
    setStep(step - 1);
  }

  return (
    <div className='container'>
      <h1>Product Submission step - {step} </h1>
      <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        // Simulate API call here (e.g., using setTimeout)
        setTimeout(() => {
          alert('Form submitted successfully');
          actions.setSubmitting(false);
        }, 1000);
      }}
      >
        {({ isSubmiting, values, errors, touched }) => (
          <Form>
            <div>
              {step === 1 && (
                <div>
                  <label htmlFor='productName'>Product Name</label>
                  <Field type='text' name='productName' />
                  <ErrorMessage name='productName' component="div" />
                  <label htmlFor='category'>Category</label>
                  <Field as='select' name='category'>
                    <option value="" label='Select a Category' />
                    {categoryOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </Field>
                </div>
              )}
              {
                step === 2 && (
                  <div>
                    <label htmlFor='price'>Price</label>
                    <Field type='number' name="price" />
                    <ErrorMessage name="price" component="div" />
                    <label htmlFor='discount'>Discount (optional)</label>
                    <Field type='discount' name="discount" />
                    <ErrorMessage name='discount' component="div" />
                  </div>
              )}
              {
                step === 3 && (
                  <div>
                    <label htmlFor='productimage'>Productimage</label>
                    <input type="file" name="productimage" />
                    <ErrorMessage name="productimage" component="div" />
                  </div>
                )
              }
              {
                step === 4 && (
                  <div>
                    <label htmlFor='email'>Email</label>
                    <input type="email" name="email" />
                    <ErrorMessage name="email" component="div" />
                  </div>
                )
              }
            
            <div>
            {step > 1 && (
              <Button type="button" onClick={handlePreviousStep}>
                Previous
              </Button>
            )}
            {step < 4 && (
              <Button type="button" onClick={handleNextStep}
              disabled={
                (step === 1 && (!values.productName || !values.category))||
                (step === 2 && (!values.price || !values.discount))||
                (step === 3 && (!values.productimage))
              }
              >
                Next
              </Button>
            )}
            {step === 4 && (
              <Button type="button" onClick={isSubmiting}>
                Submit
              </Button>
            )}
            </div>
            </div>
          </Form>
        )}

      </Formik>
    </div>
  );
}

export default FormData;