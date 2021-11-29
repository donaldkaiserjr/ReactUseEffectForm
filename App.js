// import logo from "./logo.svg";
import "./App.css";
import React, { useEffect } from "react";
import { useForm } from "./useForm"


const App = () => {
  const [values, handleChange] = useForm({ email: '', password: '', firstName: '' })
  // const [values2, handleChange2] = useForm({ firstName: "", lastName: "" });


  useEffect(() => {
    console.log('render')
  }, [values.email, values.password])

  return (
    <div>
      <input
        name="email"
        placeholder="email"
        value={values.email}
        onChange={handleChange}
      />

      <input
        name="firstName"
        placeholder="First Name"
        value={values.firstName}
        onChange={handleChange}
      />

      <input
        name="password"
        placeholder="password"
        value={values.password}
        onChange={handleChange}
      />
    </div>
  );
};

export default App;
