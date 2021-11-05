import './App.css';
import { useState, useRef } from 'react';
import FormInput from "./components/FormInput";

function App() {
  const [value, setValue] = useState({
    username:"",
    email:"",
    birthday:"",
    password:"",
    confirmPassword:"",
  });

  const inputs = [
    {
    id:1,
    name:"username",
    type:"text",
    placeholder:"Username",
    label: "Username"
    },
    {
      id:2,
      name:"email",
      type:"text",
      placeholder:"Email",
      label: "Email"
      },
      {
        id:3,
        name:"birthday",
        type:"text",
        placeholder:"birthday",
        label: "Birthday"
        },
        {
          id:4,
          name:"password",
          type:"text",
          placeholder:"Password",
          label: "Password"
          },
          {
            id:5,
            name:"confirmPassword",
            type:"text",
            placeholder:"Confirm Password",
            label: "Confirm Password"
            }
  ]
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target)
    console.log(Object)
  };

  return (
    <div className="app">
       
       <form onSubmit={handleSubmit}>
         {inputs.map((input) => (
           <FormInput name="username" {...input}/>
         ))}
         
         <button>Submit</button>
       </form>
    </div>
  );
}

export default App;
