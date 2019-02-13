import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBooks } from '../actions';
import SingleBook from '../components/SingleBook';

class BookView extends Component {
    componentDidMount() {
        this.props.getBooks()

    }
    render() {
        return (
            <SingleBook {...this.props} gettingBooks={this.props.gettingBooks}  />
        )
    }
}

const mapStateToProps = state => {
    return {
        books: state.books,
        gettingBooks: state.gettingBooks
    }
}


export default connect(mapStateToProps, {getBooks})(BookView);


