import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import styled from 'styled-components';

const FormContainer = styled.div`

    input {
        margin: 20px 0;
        padding: 10px;
        font-size: 1rem;
        border: none;
    }

    button {
        padding: 10px;
        margin-left: 5px;
        border: none;
        background-color: #0088CC;
        color: white;
        font-size: 1rem;
        cursor: pointer; 
    }
`;
const SearchForm = ( { errors, touched, values, status } ) => {

    // useEffect(() => {
    //     if(status) {

    //     }
    // }, [status])

    return (
        <FormContainer>
            <Form>
                <Field type='text' name='search' placeholder='Search users...' />
                <button type='submit'>Search</button>
            </Form>
        </FormContainer>
    );
};

const formikHOC = withFormik({
    mapPropsToValues({ search }) {
        return {
            search: search || ''
        };
    },

    handleSubmit(values, { setStatus }) {
        axios.post('https://reqres.in/api/users', values)
        .then(apiData => {
             console.log('res: ', apiData);
            setStatus(apiData.data);
        })
        .catch(err => alert(err));
    }
});

const SearchFormWithFormik = formikHOC(SearchForm);

export default SearchFormWithFormik;
