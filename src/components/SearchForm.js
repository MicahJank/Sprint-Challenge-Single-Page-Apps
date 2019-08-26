import React, { useState, useEffect } from "react";
import {Form, Field, withFormik} from 'formik';

import styled from 'styled-components';

import axios from 'axios';
import { stat } from "fs";

const SearchingForm = styled.section`
  display: flex;
  justify-content: center;
  
  input {
    padding: 5px;
    border: 2px solid #24325FFF;
    margin-right: 5px;
  }
  button {
    padding 7px;
    background-color: #24325FFF;
    border: none;
    color: white;
    cursor: pointer;
  }
`;

 function SearchForm({ errors, touched, values, status, setCharacters }) {
  // TODO: Add stateful logic for query/form data

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/?name=${values.search}`)
      .then(apiData => {
        setCharacters(apiData.data.results);
      })
      .catch(err => {
        alert(err);
      })
  }, [status])


  return (
    <SearchingForm>
      <Form>
        <Field type='text' name='search' placeholder='Search characters...' />
        <button type='submit'>Search</button>
      </Form>
    </SearchingForm>
  );
}

const formikHOC = withFormik({
  mapPropsToValues({ search }) {
      return {
          search: search || ''
      };
  },

  handleSubmit(values, { setStatus }) {
      setStatus(values.search);
     
  },
});

const SearchFormWithFormik = formikHOC(SearchForm);

export default SearchFormWithFormik;