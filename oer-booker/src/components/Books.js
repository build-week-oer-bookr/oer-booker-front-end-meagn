import React from 'react';
import { Link } from 'react-router-dom';


const Books = props => {
    return (
        <div className='books-container'>
            {props.books.map((b, i) => {
                return(
                    <div className='card-container' key={i}>
                            <h2>{b.subject}</h2>
                            <img src={b.image} alt={'book'} /> <br/>
                            <Link to={`/books/${b.id}`} style={{ textDecoration: 'none', color: 'rgb(51, 26, 0)' }}>
                                <h3>{b.title}</h3> <br/>
                            </Link>
                            <h4>{b.author}</h4> <br/>
                    </div>
                )
            })}
        </div>
    )
}

export default Books;