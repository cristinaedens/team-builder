import React, { useState } from "react";

const Form = props => {
    const [member, setMember] = useState([{
        id: Date.now(),
        name: "",
        email: "",
        role: ""
    }]);


const handleChanges = event =>{
  setMember({
    ...member,[event.target.name]: event.target.value
  });
};

const handleSumbit = event => {
  event.preventDefault();
  props.addNewMember(member);
  setMember({name:"", email:"", role:""})
};

return (
  <div className="formBackground">
    <form onSubmit={handleSumbit}>
      <label htmlFor="name">Member's Name</label>
      <br/>
      <input type="text" id="name" placeholder="Full Name" name="name" defaultValue={member.name} onChange={handleChanges} required/>
      <br/>
      <br/>
      <label htmlFor="email">Member's Email</label>
      <br/>
      <input type="email" id="email" placeholder="Email" name="email" defaultValue={member.email} onChange={handleChanges} required/>
      <br/>
      <br/>

      <label htmlFor="role">Member's Role</label>
      <br/>

<select name="role" id="role" defaultValue={member.role} onChange={handleChanges}>
  <option value="Select a Role">Select A Role</option>
  <option value="Backend Engineer">Backend Engineer</option>
  <option value="Frontend Engineer">Frontend Engineer</option>
  <option value="UX Designer">UX Designer</option>
  <option value="Fullstack Developer">Fullstack Developer</option>
</select>
<br/>
<br/>

<label htmlFor="addMember">Add Member</label>
<br/>

<button type="submit" id="addMember">Submit</button>
    </form>
    
  </div>
)
}
export default Form;