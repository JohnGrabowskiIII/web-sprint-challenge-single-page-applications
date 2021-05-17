import React, {useState, useEffect} from "react";
import * as yup from 'yup'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import axios from 'axios';

import Pizza from './components/Pizza';

const App = () => {

  const initialPizzaFormValue = {
    name: '',
    size: 'small',
    pepperoni: false,
    sausage: false,
    spinach: false,
    onion: false,
    special: ''
  }

  const [pizzaFormValue, setPizzaFormValue] = useState(initialPizzaFormValue);
  const [pizzaError, setPizzaError] = useState([])
  const [order, setOrder] = useState([]);
  const [buttonDisabled, setButtonDisabled] = useState(true);

    // YUP SCHEMA
    const formSchema = yup.object().shape({
      name: yup
        .string()
        .required("name must be at least 2 characters")
        .min(2, "name must be at least 2 characters"),
      size: yup.string().notRequired(),
      pepperoni: yup.boolean().notRequired(),
      sausage: yup.boolean().notRequired(),
      spinach: yup.boolean().notRequired(),
      onion:  yup.boolean().notRequired(),
      special: yup.string().notRequired()
    })

    // USE EFFECT TO DISABLE BUTTON
    useEffect(() => {
      formSchema.isValid(pizzaFormValue)
        .then(valid => {
          setButtonDisabled(!valid)
        })
    }, [pizzaFormValue]);

    // FORM CHANGE HANDLER
    const formChangeHandler = e => {
      const {name, value} = e.target;
      e.target.type === 'checkbox' ?
      setPizzaFormValue({...pizzaFormValue, [name]: !pizzaFormValue[name]}) :
      setPizzaFormValue({...pizzaFormValue, [name]: value});
      yup.reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setPizzaError([])
      })
      .catch(err => {
        setPizzaError(err.errors);
      })
    }

    // FORM SUBMIT
    // AXIOS CALL HERE
    const submitOrder = e => {
      e.preventDefault();
      axios.post('https://reqres.in/api/orders', pizzaFormValue)
        .then(post => {
          console.log(post.data)
          setOrder(post.data);
        })
        .catch(err => {
          console.log(err);
        })
    }


  return (
    <>
      <h1>Lambda Eats</h1>
      <Router>
        <Link to='/'>Home</Link>
        <Link to='/pizza' id='order-pizza' >Order Now!</Link>
        <Switch>
          <Route exact path='/' />
          <Route path='/pizza'>
            <Pizza change={formChangeHandler} state={pizzaFormValue} disabler={buttonDisabled} error={pizzaError} submit={submitOrder} order={order} />
          </Route>
        </Switch>
      </Router>

    </>
  );
};
export default App;
