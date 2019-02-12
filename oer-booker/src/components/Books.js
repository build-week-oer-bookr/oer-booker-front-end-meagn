import React from 'react';

const Books = props => {
    return (
        <div className='books-container'>
            {props.books.map((b, i) => {
                return(
                    <div className='card-container' key={i}>
                            {b.subject}
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