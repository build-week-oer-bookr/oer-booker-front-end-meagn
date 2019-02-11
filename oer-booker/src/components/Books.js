import React from 'react';

const Books = props => {
    return (
        <div className='books-container'>
            <h1>Books</h1>
            {props.books.map((n, i) => {
                return(
                    <div key={i}>
                            <img src={n.image} />
                            {n.title}
                            {n.author}
                    </div>
                )
            })}
        </div>
    )
}

export default Books;