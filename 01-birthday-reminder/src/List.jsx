import React from 'react'

const List = ({id, name, DOB, deleteHandler}) => {

  const currentYear=2023;
  return (
    <div>
        <h3>{name}</h3>
        <p>{DOB}</p>
        <p>Age : {currentYear-(DOB.slice(6,10))}</p>
        <button type='button' onClick={()=>deleteHandler(id)}>Delete</button>
        <hr/>
    </div>
  )
}

export default List