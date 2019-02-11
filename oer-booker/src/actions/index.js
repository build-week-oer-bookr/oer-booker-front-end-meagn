import axios from 'axios';
export const GET_BOOKS = 'GET_BOOKS';
export const GET_BOOKS_SUCCESS = 'GET_BOOKS_SUCCESS';
export const GET_BOOKS_FAIL = 'GET_BOOKS_FAIL';


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