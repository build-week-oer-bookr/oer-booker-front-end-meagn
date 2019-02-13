import React, { Component } from 'react';
import { connect } from 'react-redux';
import Books from '../components/Books';
import { getBooks } from '../actions';

class BooksView extends Component {
    componentDidMount() {
        this.props.getBooks()
    }


    render() {
        return (
            <Books {...this.props} />
        )
    }
}

const mapStateToProps = state => {
    return {
        books: state.books
    };
}



export default connect( mapStateToProps, { getBooks })(BooksView);