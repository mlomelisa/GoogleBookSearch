import React from "react";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import Style from "./style.css";

function BookDetail(props) {
  return (
    <div className="text-center">
    <Container>
     <Row >
      <Col size="md-6">
      <h3>{props.title}</h3>
      </Col>
      <Col size="md-6">
          <div class="btn-group">
            <button type="button" class="btn btn-primary">View</button>
            <button type="button" class="btn btn-primary">Delete</button>
          </div>
      </Col>
     </Row> 
     <Row >
       <Col size="md-4">
          <img alt={props.title} className="img-fluid" src={props.image} style={{ margin: "0 auto" }} />
       </Col>
      <Col size="md-8">
          <h3>Authors: {props.authors}</h3>
          <h3>Description: {props.description}</h3>
          <h3>Link: {props.link}</h3>
      </Col>
      </Row>
      </Container>
    </div>
  );
}

export default BookDetail;
