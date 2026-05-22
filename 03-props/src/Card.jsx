import React from 'react'

const Card = (props) => {

    console.log(props)

  return (
    <div className="card">
      <img src={props.img} alt="car" />
         <h2>{props.user}</h2>
         <p>{props.age} years old</p>
         <button>View Profile</button>
    </div>
  )
}

export default Card
