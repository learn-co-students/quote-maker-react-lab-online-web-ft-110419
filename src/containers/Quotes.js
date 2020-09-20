import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import {removeQuote, upvoteQuote, downvoteQuote} from '../actions/quotes.js'

class Quotes extends Component {
  removeQuote = (id) => {
    this.props.dispatch(removeQuote(id))
  }

  upvoteQuote = (id) => {
    this.props.dispatch(upvoteQuote(id))
  }

  downvoteQuote = (id) => {
    this.props.dispatch(downvoteQuote(id))
  }

  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {this.props.quotes.map((quote, id) => <QuoteCard key={id} quote={quote} remove={this.removeQuote} upvote = {this.upvoteQuote} downvote={this.downvoteQuote} />)


              /*
                TODO:

                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {quotes: state.quotes}
}
export default connect(mapStateToProps)(Quotes);
