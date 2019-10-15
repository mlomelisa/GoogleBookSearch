import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";
import SearchForm from "../components/SearchForm";
import {BookDetail, BookList} from "../components/BookDetail";
import API from "../utils/API";

class Saved extends Component {
  state = {
    result: {},
    search: ""
  };

  // When this component mounts, search for the movie "The Matrix"
  // componentDidMount() {
  //   this.searchBooks("The Hunger Games");
  // }

  searchBooks = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
      
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };


  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.search);
  };

  render() {
    return (
      <Container>
        <div heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
          </div>
          <div
            
              heading={this.state.result.totalItems || "Search for a Book to Begin"}
            >
              {this.state.result.totalItems ? (
                <BookDetail
                  title={this.state.result.items[0].volumeInfo.title}
                  src={this.state.result.items[0].volumeInfo.imageLinks.thumbnail}
                  authors={this.state.result.items[0].volumeInfo.authors}
                  description={this.state.result.items[0].volumeInfo.description}
                  link={this.state.result.items[0].selfLink}          
                />
              ) : (
                <h3>No Results to Display</h3>
              )}    
        </div>
      </Container>
    );
  }
}

export default Saved;