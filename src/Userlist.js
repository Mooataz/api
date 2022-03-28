import React from 'react'
import {Card,ListGroup,Button,Nav} from 'react-bootstrap'
function Userlist({el}) {
  return (
    <div>
 <Card border="primary" style={{ width: '80%' }}>
    <Card.Header>{el.name} ({el.id})</Card.Header>
    <Card.Body>
      <Card.Title>{el.username}</Card.Title>
      <Card.Text>
      address: <br/>
      street : {el.address.street}<br/>
      suite : {el.address.suite}<br/>
      city : {el.address.city}<br/>
      zipcode : {el.address.zipcode}<br/>
      geo: lat={el.address.geo.lat} , lng={el.address.geo.lng}
      <br/>

      <Card border="danger" style={{ width: '' }}>
    <Card.Header>contact</Card.Header>
    <Card.Body>
      <Card.Title>phone: {el.phone}</Card.Title>
      <Card.Text>
        website: {el.website}
      </Card.Text>
    </Card.Body>
  </Card></Card.Text>
    </Card.Body>
  </Card>
 </div>
  )
}

export default Userlist