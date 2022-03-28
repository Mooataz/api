
import './App.css';
import React, { useEffect, useState } from "react";
import axios from "axios";
import Userlist from './Userlist';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  const [listOfUSer, setListOfUSer] = useState([]);
  const getListOfUSer = async () => {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    setListOfUSer(data);
  };
  useEffect(() => {
    getListOfUSer();
  }, []);
  return (
    <div className="App">
     
  
         
     {
       listOfUSer.map((el,key)=>{return <Userlist el={el}/>})
     }
    </div>
  );
}

export default App;
