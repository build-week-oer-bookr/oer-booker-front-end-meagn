import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBook } from '../actions';
import Book from '../components/Book';

class BookView extends Component {
    componentDidMount() {
        this.props.getBook(this.props.match.params.bookId)
    }
    render() {
        return (
            <Book Book={this.props.book} />
        )
    }
}

const mapStateToProps = state => {
    return {
        ...state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getBook: id => dispatch(getBook(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookView);


