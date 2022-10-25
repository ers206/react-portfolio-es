import React from 'react'

export const SingularProject = (props) => {
  return (
    <div>
        <h1> title: {props.projectName}</h1>
        <h1> imageMaybe: <img src={props.projectScreenie} alt={"yo"} style={{width: "400px", height: "400px"}} /></h1>
    </div>
  )
}
