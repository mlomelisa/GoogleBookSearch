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
    search: "",
    title:"",
    authors:"",
    description:"",
    src:"",
    link:""
  };

  searchBooks = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data.items }))
      .catch(err => console.log(err));
      
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


//handleChange = (e, title, src, authors, description, link) => {
 handleChange = (e) => {
    e.preventDefault();
    // this.setState({
    //   thisBook:{
    //   title: title,
    //   src: src,
    //   authors: authors,
    //   description: description,
    //   link: link
    //   }
    //  })
  
     API.saveBook({
      title: this.state.title,
      image: this.state.src,
      authors: this.state.authors,
      description: this.state.description,
      link: this.state.link
     })
     .then(res => console.log(this.state.authors))
     .catch(err => console.log(err));

     
    //  return console.log(this.state.thisBook)
    
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
                    link={element.volumeInfo.previewLink} 
                    onClick={(e) => this.handleChange(e, element.volumeInfo.title, element.volumeInfo.imageLinks.thumbnail, element.volumeInfo.authors, element.volumeInfo.description, element.selfLink)}
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