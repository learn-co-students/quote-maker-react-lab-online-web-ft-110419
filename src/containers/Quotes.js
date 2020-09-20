import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { upvoteQuote } from '../actions/quotes';
import { downvoteQuote } from '../actions/quotes';
import { removeQuote } from '../actions/quotes';


class Quotes extends Component {

  renderQuoteCard = (quote, id) => {
    return (
    <div key={id}>
        {<QuoteCard  quote={quote} removeQuote={this.props.removeQuote} upvoteQuote={this.props.upvoteQuote} downvoteQuote={this.props.downvoteQuote} />}
    </div>
    )
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
               {this.props.state.quotes.map((quote, id) => this.renderQuoteCard(quote, id))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return { state }
}

export default connect(mapStateToProps, {removeQuote, upvoteQuote, downvoteQuote})(Quotes);

