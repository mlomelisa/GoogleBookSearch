import React, { Component } from "react";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import {BookDetail, BookList} from "../components/BookDetail";
import API from "../utils/API";

class GoogleContainer extends Component {
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

  searchBooks = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data.items }))
      .catch(() =>
        this.setState({
          result: [],
          message: "No New Books Found, Try a Different Query"
        })
      );

      
  };

  loadBooks = () => {
    
    
        this.setState({    
        search: "",
        title:"",
        authors:"",
        description:"",
        src:"",
        link:"" })
  
        
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



    handleBookSave = id => {
      const book = this.state.result.find(book => book.id === id);
  
      API.saveBook({
        id: book.id,
        title: book.volumeInfo.title,
        link: book.volumeInfo.infoLink,
        authors: book.volumeInfo.authors,
        description: book.volumeInfo.description,
        image: book.volumeInfo.imageLinks.thumbnail
      }).then(() => this.searchBooks());

      return console.log(book.id)
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
                    key={element.id}
                    id={element.id}
                    title={element.volumeInfo.title}
                    src={element.volumeInfo.imageLinks.thumbnail}
                    authors={element.volumeInfo.authors}
                    description={element.volumeInfo.description}
                    link={element.volumeInfo.previewLink} 
         //           onClick={(e) => this.handleChange(e, element.volumeInfo.title, element.volumeInfo.imageLinks.thumbnail, element.volumeInfo.authors, element.volumeInfo.description, element.selfLink)}
                    onClick={(e) => this.handleBookSave(element.id)}
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

export default GoogleContainer;