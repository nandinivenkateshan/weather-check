import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

function DisplayCard({city}) {
    const [temp,setTemp] = useState('')
    useEffect (() => { 
        calcTemp()
    },[city])
   
    const calcTemp = async () => {
        try {
       const response =  await window.fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b5fcf708ed0d4273613436f8dd9851b6`)
        const result = await response.json()
        setTemp((Number(result.main.temp)-273.15).toFixed())
        } catch {
            console.log('network error')
        } 
    }

  return (
     temp &&
        <Card style={{ width: "18rem", background: "lightgrey" ,boxShadow:'5px 5px grey'}} className="mt-4">
        <Card.Body>
    <Card.Title>{city}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">
        {temp}
        <span>&#8451;</span>
        </Card.Subtitle>
        </Card.Body>
      </Card>

     
  )

}

export default DisplayCard;
