// Adding an event listener for the mousemove.....mounting it and unmounting it with the useEffect

import "./App.css";
import React, { useEffect } from "react";
import { useForm } from "./useForm";
// import Hello from "./Hello"

const App = () => {
  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firstName: "",
  });
  // const [showHello, setShowHello] = useState(true)
  // const [values2, handleChange2] = useForm({ firstName: "", lastName: "" });

  useEffect(() => {
    const onMouseMove = e => {
      console.log(e)
    }
    window.addEventListener('mousemove', onMouseMove)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [values.email]);

  return (
    <div>
      <>
        {/* <button onClick={() => setShowHello(!showHello)}>Toggle</button>
        {showHello && <Hello />} */}
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
        </>
    </div>
  );
};

export default App;
