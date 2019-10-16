import React from "react";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import Style from "./style.css";

// RecipeList renders a bootstrap list item
export function BookList({ children }) {
  return <ul className="list-group">{children}</ul>;
}



export function BookDetail(props) {
  return (
    <div className="text-center">
    <Container >
     <Row >
      <Col size="md-6">
      <h3>{props.title}</h3>
      </Col>
      <Col size="md-6">
          <div className="btn-group">
            <button type="button" className="btn btn-primary">View</button>
      
            <button type="button" className="btn btn-primary" data-author={props.authors} id={props.id} onClick={props.onClick}>Save</button>
          </div>
      </Col>
     </Row> 
     <Row >
       <Col size="md-4">
          <img alt={props.title} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} />
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


