import React from 'react'
import { Card, Button } from 'react-bootstrap'
export const SingularProject = (props) => {
  return (
    // <div>
    //     <h1>  {props.projectName}</h1>
    //     <img src={props.projectScreenie} alt={"yo"} style={{width: "700px", height: "400px"}} />
    //     <a href={props.projectLink} target='_blank' rel="noreferrer">Link to Site</a>
    // </div>
    // change size rem npm run bui
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={props.projectScreenie} />
    <Card.Body>
      <Card.Title>{props.projectName}</Card.Title>
      <Card.Text>
        descriptionhere
      </Card.Text>
      <a href={props.projectLink} target='_blank' rel="noreferrer">
      <Button variant="primary">link to site</Button>
      </a>
    </Card.Body>
  </Card>
  )
}
