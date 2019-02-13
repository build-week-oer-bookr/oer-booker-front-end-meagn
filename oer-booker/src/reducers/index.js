import {
    GET_BOOKS,
    GET_BOOKS_SUCCESS,
    GET_BOOKS_FAIL,
} from '../actions';

const initialState = {
    books: [],
    reviews: [],
    gettingBooks: false,
    gettingBook: false,
    gettingReviews: false,
    error: null
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_BOOKS:
            return {
                ...state,
                gettingBooks: true
            }
        case GET_BOOKS_SUCCESS:
            return{
                ...state,
                gettingBooks: false,
                books: action.payload
            }
        case GET_BOOKS_FAIL:
            return {
                ...state,
                gettingBooks: false,
                error: action.payload
            }
            default:
        return state;
    }
}

export default reducer;