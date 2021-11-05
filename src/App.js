import './App.css';
import { useState, useRef } from 'react';
import FormInput from "./components/FormInput";

function App() {
  const [username, setUsername] = useState("");
  const usernameRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="app">
       
       <form onSubmit={handleSubmit}>
         <FormInput refer={usernameRef} placeholder="Username" setUsername/>
         <FormInput placeholder="Email"/>
         <FormInput placeholder="Full Name"/>
         <FormInput placeholder="Sth else"/>
         <button>Submit</button>
       </form>
    </div>
  );
}

export default App;
