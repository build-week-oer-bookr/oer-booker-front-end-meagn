import {
    GET_BOOKS,
    GET_BOOKS_SUCCESS,
    GET_BOOKS_FAIL,
    GET_BOOK,
    GET_BOOK_SUCCESS,
    GET_BOOK_FAIL
} from '../actions';

const initialState = {
    books: [],
    gettingBooks: false,
    gettingBook: false,
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
            case GET_BOOK:
            return{
                ...state,
                fetchingNote: true
            }
        case GET_BOOK_SUCCESS:
            return {
                ...state,
                fetchingNote: false,
                note: action.payload,
                error: null
            }
        case GET_BOOK_FAIL:
            return {
                ...state,
                error: action.payload
            }

            default:
        return state;
    }
}

export default reducer;