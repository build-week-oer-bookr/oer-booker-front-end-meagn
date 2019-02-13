import React from 'react';
import axios from 'axios';
import '../App.css';

class SingleBook extends React.Component {
    constructor() {
        super();
        this.state = {
            books: [],
            reviews: [],
            singleReview: {
               review: '',
               reviewer: '',
               rating: '',
               book_id: null
            }
        }
    }

    componentDidMount() {
        this.getReviews();
        let singleReview = {...this.state.singleReview}
        singleReview.book_id = Number(this.props.match.params.id);
        this.setState({singleReview})
    }


    handleReviewChanges = e => {
        e.preventDefault();      
        let singleReview = {...this.state.singleReview}
        singleReview.review = e.target.value
        this.setState({singleReview})
      }
  

      getReviews = () => {
        const endpoint =
          'https://oer-bookr-api.herokuapp.com/reviews';
        axios
          .get(endpoint, {
            headers: {Authorization: localStorage.getItem('jwt')}
          })
          .then(res => {
            this.setState({
                reviews: res.data
            })
          })
          .catch(err => {
            this.setState({ errorMessage: err.response.data.message });
          });
      }

    addReview = e => {
        e.preventDefault();
        const endpoint =
          `https://oer-bookr-api.herokuapp.com/reviews`;
        axios
          .post(endpoint, this.state.singleReview)
          .then(res => {
            console.log(res);
            this.getReviews();
          })
          .catch(err => {
            this.setState({ errorMessage: err.response.data.message });
          });
    }


    showModal = () => {
        this.setState({ show: true });
      }
      
    hideModal = () => {
        this.setState({ show: false });
      }

    render() {
        const book = this.props.books.find(book => book.id == this.props.match.params.id);

        const filteredReviews = this.state.reviews.filter(review => review.book_id === book.id);
        
        return (
            <div>
                <h2>{book.subject}</h2>
                <img src={book.image} alt='book-image' />
                <h3>{book.title}</h3>
                <h4>{book.author}</h4>
                <h5>{book.publisher}</h5>
                <h6>{book.license}</h6>
                <a href={book.link}>Link to Book</a>
                {filteredReviews.map(review => {
                    return (
                        <>
                        <button type='button' onClick={this.showModal}>Add Review</button>
                        <div>
                            <p>{review.rating}</p>
                            <p>{review.review}</p>
                            <p>{review.reviewer}</p>
                            <button>Delete</button>
                        
                            <Modal show={this.state.show} handleClose={this.hideModal}>
                                <form>
                                    <input
                                        type='text'
                                        placeholder='Add a review'
                                        value={this.state.singleReview.review}
                                        name='review'
                                        onChange={this.handleReviewChanges}
                                    />
                                </form>
                                <button onClick={this.addReview}>Add</button>
                            </Modal>
                      </div>
                      </>
                    )
                })}
            </div>
         );
         
    }
    
    
}
const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  
    return (
      <div className={showHideClassName}>
        <section className='modal-main'>
          {children}
          <button
            onClick={handleClose}
          >
            Close
          </button>
        </section>
      </div>
    );
  };


export default SingleBook;
