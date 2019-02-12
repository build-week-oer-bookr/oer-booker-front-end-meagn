
import React from 'react';

const Book = props => {
    return (
        <div className='books-container'>
            <h1>{props.book.title}</h1>
        </div>
    )
}

export default Book;