import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import styled from 'styled-components';

const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    
    form {
        display: flex;
        flex-direction: column;
        align-items: center;

        input {
            margin-top: 20px;
            padding: 10px;
            font-size: 1rem;
        }

        button {
           width: 100%;
           padding: 10px;
           border: none;
           background-color: #0088CC;
           color: white;
           font-size: 1rem;
           cursor: pointer; 
        }

        p {
            align-self: flex-start;
        }
    }
`;

const Error = styled.p`
    position: relative;
    color: red;
    margin: 0;
`;

const UserForm = ( { errors, touched, values, status } ) => {


    // Notice the first 4 fields all dont have an 'component' type, this is because formik sets the default component type to input, so its not needed.
    return (
        <FormContainer> 
            <Form>
                <Field type='text' name='name' placeholder='Name' />
                {touched.name && errors.name && (
                    <Error>{errors.name}</Error>
                )}
                <Field type='email' name='email' placeholder='Email' />
                {touched.email && errors.email && (
                    <Error>{errors.email}</Error>
                )}
                <Field type='password' name='password' placeholder='Password' />
                {touched.password && errors.password && (
                    <Error>{errors.password}</Error>
                )}
                <label>
                    <Field type='checkbox' name='tos' checked={values.tos}/>
                    Terms of Service
                </label>
                {touched.tos && errors.tos && (
                    <Error>{errors.tos}</Error>
                )}
                <button type='submit'>Submit</button>
            </Form>
        </FormContainer>
    );
};

const formikHOC = withFormik({
    // this sets up setting the values of the inputs
    mapPropsToValues({ name, email, password, tos }) {
        return {
            name: name || '',
            email: email || '',
            password: password || '',
            tos: tos || false
        };
    },
    // this sets up form validation
    validationSchema: Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().required(),
        password: Yup.string().required(),
        tos: Yup.bool().oneOf([true], 'Terms of Service required')
    }),
    // this sets ups submitting the form
   handleSubmit(values, { setStatus, resetForm }) {
       axios.post('https://reqres.in/api/users', values)
        .then(apiData => {
            console.log('res: ', apiData);
            setStatus(apiData.data);
            resetForm();
        })
        .catch(err => alert(err));
   }
});

const UserFormWithFormik = formikHOC(UserForm);

export default UserFormWithFormik;