import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";



export default {
  // Search for a New title on Google API
  search: function(query) {
    return axios.get(BASEURL + query)
    
  },

  //Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("api/books", bookData);
  }

}