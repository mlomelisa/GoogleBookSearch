import React, { Component } from "react";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import {BookDetail, BookList} from "../components/BookDetail";
import API from "../utils/API";

class Saved extends Component {
  state = {
    result: [],
    search: "",
    title:"",
    authors:"",
    description:"",
    src:"",
    link:"",
    id:"",
  };
  componentDidMount() {
    this.getSavedBooks();
  }


  getSavedBooks = () => {
    API.getSavedBooks()
      .then(res => 
        this.setState({
        result: res.data 
      })
      )
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



    handleBookDelete = id => {
      
      API.deleteBook(id).then(() => this.getSavedBooks());

      return console.log(id)
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
              {this.state.result.length === 0 ? (
                <h3>No Results to Display</h3>
              ) : (
              <BookList>
                {this.state.result.map((element, index) => {
                  
                  return (
                  
 
                    <BookDetail
                    key={element._id}
                    id={element._id}
                    title={element.title}
                    src={element.image}
                    authors={element.authors}
                    description={element.description}
                    link={element.link}
                    btnvalue="Delete"
                    onClick={(e) => this.handleBookDelete(element._id)}
                    /> 
                  )
                })} 
              </BookList>   
              )}
          </div>
      </Container>
    );
  }
}

export default Saved;