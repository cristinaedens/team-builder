import React from "react";

const MemberCard = props =>{
  return(
    <div className="meemberCard">
      {props.member.map(member =>
      <div className="cardStuff" key={member.id}>
        <h2>{member.name}</h2>
        <p>{member.email}</p>
        <p>{member.role}</p>
      </div>
      )}
    </div>
  )
}

export default MemberCard;