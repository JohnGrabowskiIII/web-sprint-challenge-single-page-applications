import React, {useState} from "react";

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
  const [databaseReturnValue, setDatabaseReturnValue] = useState([]);

    // YUP SCHEMA

    // USE STATE TO DISABLE BUTTON

    // YUP FORM ERROR CREATOR
    // VALIDATION FOR NAME READS "name must be at least 2 characters"

    // FORM CHANGE HANDLER

    // FORM SUBMIT
    // AXIOS CALL HERE


  return (
    <>
      <h1>Lambda Eats</h1>
      <Pizza />
      
    {/* ROUTE HERE */}
    {/* ROUTE FOR HOME */}
    {/* ROUTE FOR /PIZZA FORM */}
    {/* LINK FOR /PIZZA FORM MUST HAVE ORDER-PIZZA ID */}
    

    </>
  );
};
export default App;
