import React from 'react';
import { Link } from 'react-router-dom';

const Books = props => {
    return (
        <div className='books-container'>
            {props.books.map((b, i) => {
                return(
                    <div className='card-container' key={i}>
                            {b.subject}
                            <img src={b.image} alt={'book'} /> <br/>
                            <Link to={`/books/${b.id}`}>
                                {b.title} <br/>
                            </Link>
                            {b.author} <br/>
                    </div>
                )
            })}
        </div>
    )
}

export default Books;