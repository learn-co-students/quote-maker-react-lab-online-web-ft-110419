import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeQuote, upvote, downvote } from '../actions/quotes';
// import { upvote } from '../actions/votes';
import QuoteCard from '../components/QuoteCard';

class Quotes extends Component {

  handleRemoveClick = id => {
    this.props.removeQuote(id)
  }

  handleUpvote = id => {
    this.props.upvote(id)
  }

  handleDownvote = id => {
    this.props.downvote(id)
  }

  renderQuoteCards() {
    return this.props.quotes.map(quote => {
      const {id, content, author, votes} = quote
      // const count = this.props.votes.find(count => count.id === quote.id)
      // console.log(count, this.props.votes)
      return <QuoteCard
              key={id}
              id={id}
              content={content}
              author={author}
              votes={votes}
              handleRemoveClick={this.handleRemoveClick}
              handleUpvote={this.handleUpvote}
              handleDownvote={this.handleDownvote}
            />;
    });
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
               {this.renderQuoteCards()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    quotes: state.quotes,
    votes: state.votes
  }
}

//add arguments to connect as needed
export default connect(mapStateToProps, { removeQuote, upvote, downvote })(Quotes);
