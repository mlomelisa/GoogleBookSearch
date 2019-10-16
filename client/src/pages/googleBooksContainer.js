import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";
import SearchForm from "../components/SearchForm";
import {BookDetail, BookList} from "../components/BookDetail";
import API from "../utils/API";

class GoogleContainer extends Component {
  state = {
    result: [],
    search: ""
  };

  // When this component mounts, search for the movie "The Matrix"
  // componentDidMount() {
  //   this.searchBooks("The Hunger Games");
  // }

  searchBooks = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data.items }))
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



  // handleChange = (event) => {
  //   event.preventDefault();

  //   this.setState({
  //     id: event.target.id,
  //     author: event.target.author
    
  //    })
  //    return console.log(this.state.author)

  // }

  

    handleChange = (title, src, authors, description, link) => {
    

    this.setState({
   
      title: title,
      src: src,
      authors: authors,
      description: description,
      link: link
     })
     return console.log(this.state.title, this.state.src, this.state.authors, this.state.description ,this.state.link)

  }

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
                    link={element.selfLink}
                  // onClick={(e) => this.handleChange(e, element.volumeInfo.title)}
                  onClick={() => this.handleChange(element.volumeInfo.title, element.volumeInfo.imageLinks.thumbnail, element.volumeInfo.authors, element.volumeInfo.description, element.selfLink)}
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