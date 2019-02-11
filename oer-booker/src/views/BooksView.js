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
            <Books books={this.props.books} />
        )
    }
}

const mapStateToProps = state => {
    return {
        ...state
    };
}

const mapDispatchToProps = dispatch => {
    return {
        getBooks: () => dispatch(getBooks())
    }
}

export default connect( mapStateToProps, mapDispatchToProps)(BooksView);