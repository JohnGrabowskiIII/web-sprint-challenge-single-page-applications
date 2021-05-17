import React, {useState, useEffect} from "react";
import * as yup from 'yup'

import Pizza from './components/Pizza';

const App = () => {

  const initialPizzaFormValue = {
    name: '',
    size: '',
    pepperoni: false,
    sausage: false,
    spinach: false,
    onion: false,
    special: ''
  }

  const [pizzaFormValue, setPizzaFormValue] = useState(initialPizzaFormValue);
  const [pizzaError, setPizzaError] = useState('')
  const [databaseReturnValue, setDatabaseReturnValue] = useState([]);
  const [buttonDisabled, setButtonDisabled] = useState(true);

    // YUP SCHEMA
    const formSchema = yup.object().shape({
      name: yup
        .string()
        .required("name must be at least 2 characters")
        .min(2, "name must be at least 2 characters")
    })

    // USE EFFECT TO DISABLE BUTTON
    useEffect(() => {
      formSchema.isValid(pizzaFormValue)
        .then(valid => {
          setButtonDisabled(!valid)
        })
    }, [pizzaFormValue]);

    // YUP FORM ERROR CREATOR
    // VALIDATION FOR NAME READS "name must be at least 2 characters"

    // FORM CHANGE HANDLER
    const formChangeHandler = e => {
      e.target.type === 'checkbox' ?
      setPizzaFormValue({...pizzaFormValue, [e.target.name]: !pizzaFormValue[e.target.name]}) :
      setPizzaFormValue({...pizzaFormValue, [e.target.name]: e.target.value});
    }

    // DEBUG USE EFFECT FOR PIZZA FORM
    useEffect(() => {
      console.log(pizzaFormValue)
    }, [pizzaFormValue]);

    // FORM SUBMIT
    // AXIOS CALL HERE


  return (
    <>
      <h1>Lambda Eats</h1>
      <Pizza change={formChangeHandler} state={pizzaFormValue} disabler={buttonDisabled} />
      
    {/* ROUTE HERE */}
    {/* ROUTE FOR HOME */}
    {/* ROUTE FOR /PIZZA FORM */}
    {/* LINK FOR /PIZZA FORM MUST HAVE ORDER-PIZZA ID */}
    

    </>
  );
};
export default App;
