import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Books from '../components/Books';
import { getBooks } from '../actions';

class BooksView extends Component {
    componentDidMount() {
        this.props.getBooks()
    }

    deleteBook = (e, id) => {
        e.preventDefault();
        const endpoint =
          `https://oer-bookr-api.herokuapp.com/books/${id}`;
        axios
          .delete(endpoint)
          .then(res => {
            console.log(res);
            this.getBooks();
          })
          .catch(err => err.data)
      }


    render() {
        return (
            <Books {...this.props} deleteBook={this.props.deleteBook} />
        )
    }
}

const mapStateToProps = state => {
    return {
        books: state.books
    };
}



export default connect( mapStateToProps, { getBooks })(BooksView);


