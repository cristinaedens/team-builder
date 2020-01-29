import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import MemberCard from "./Components/Card";
import Form from "./Components/Form";

function App() {
  const [member, setMember] = useState([])

  const addNewMember = registerMember => {
const newMember ={
  id:Date.now(),
  name: registerMember.name,
  email: registerMember.email,
  role: registerMember.role
};
setMember([...member, newMember]);
  }

  return (
    <div className="container">
      <h1 className="header">Your Team</h1>
      <div className="inputForm">
        <Form addNewMember={addNewMember}/>
        <MemberCard member={member}/>
      </div>
    </div>
  );
}

export default App;
