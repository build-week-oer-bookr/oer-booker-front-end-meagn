import React from 'react';

const Books = props => {
    return (
        <div className='books-container'>
            <h1>Books</h1>
            {props.books.map((b, i) => {
                return(
                    <div key={i}>
                            <img src={b.image} /> <br/>
                            {b.title} <br/>
                            {b.author} <br/>
                    </div>
                )
            })}
        </div>
    )
}

export default Books;