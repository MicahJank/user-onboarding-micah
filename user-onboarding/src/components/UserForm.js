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
            margin: 10px;
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
        }
    }
`;

const UserForm = ( { errors, touched, values, status } ) => {


    // Notice the first 4 fields all dont have an 'component' type, this is because formik sets the default component type to input, so its not needed.
    return (
        <FormContainer> 
            <Form>
                <Field type='text' name='name' placeholder='Name' />
                <Field type='email' name='email' placeholder='Email' />
                <Field type='password' name='password' placeholder='Password' />
                <label>
                    <Field type='checkbox' name='tos' />
                    Terms of Service
                </label>
                <button>Submit</button>
            </Form>
        </FormContainer>
    );
};

const formikHOC = withFormik({
    mapPropsToValues({ name, email, password, tos }) {
        return {
            name: name || '',
            email: email || '',
            password: password || '',
            tos: tos || false
        };
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().required(),
        password: Yup.string().required(),
        tos: Yup.bool().required()
    }),
   
})

const UserFormWithFormik = formikHOC(UserForm);

export default UserFormWithFormik;