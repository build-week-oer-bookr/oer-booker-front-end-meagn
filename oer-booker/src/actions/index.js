import axios from 'axios';
export const GET_BOOKS = 'GET_BOOKS';
export const GET_BOOKS_SUCCESS = 'GET_BOOKS_SUCCESS';
export const GET_BOOKS_FAIL = 'GET_BOOKS_FAIL';
export const GET_BOOK = 'GET_BOOK';
export const GET_BOOK_SUCCESS = 'GET_BOOK_SUCCESS';
export const GET_BOOK_FAIL = 'GET_BOOK_FAIL';
export const DELETE_BOOK = 'DELETE_BOOK';


const endpoint = 'https://oer-bookr-api.herokuapp.com/books';
    
export const getBooks = () => dispatch => {

    dispatch({
        type: GET_BOOKS
    });
    axios
        .get( endpoint , {
            headers: {Authorization: localStorage.getItem('jwt')}
        })
        .then(res  => {
            dispatch({
              type: GET_BOOKS_SUCCESS,
              payload: res.data
            });
          })
          .catch(err => {
            dispatch({
              type: GET_BOOKS_FAIL,
              payload: err
            });
          });
}

export const deleteBook = () => dispatch => {
  dispatch({
      type: DELETE_BOOK
  })
}


// export const getBook = id => dispatch => {
//     dispatch({ 
//         type: GET_BOOK 
//     })
//     axios
//         .get(`${endpoint}/${id}`, {
//             headers: {Authorization: localStorage.getItem('jwt')}
//         })
//         .then(res => {
//              dispatch ({
//                 type: GET_BOOK_SUCCESS,
//                 payload: res.data
//             })
//         })
//         .catch(err => {
//              dispatch({
//                 type: GET_BOOK_FAIL,
//                 payload: err
//             })

//         });
// }