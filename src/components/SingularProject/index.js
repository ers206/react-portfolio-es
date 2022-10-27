import React from 'react'

export const SingularProject = (props) => {
  return (
    <div>
        <h1>  {props.projectName}</h1>
        <h1> <img src={props.projectScreenie} alt={"yo"} style={{width: "700px", height: "400px"}} /></h1>
    </div>
  )
}
