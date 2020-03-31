import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { upvoteQuote } from '../actions/quotes';
import { downvoteQuote } from '../actions/quotes';
import { removeQuote } from '../actions/quotes';


class Quotes extends Component {

  renderQuoteCard = (quote, id) => {
    console.log(quote)
    console.log(this)
    return (
    <div key={id}>
            {/* {<QuoteCard quote={quote} />} */}
        {<QuoteCard quote={quote} handleUpvote={mapDispatchToProps} />}
      {/* {<QuoteCard quote={quote} handleUpvote={this.props.dispatch} handleDownvote={dispatch} handleDelete={dispatch(removeQuote)}/>} */}
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
              {/*
                TODO: Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */}
               {this.props.state.quotes.quotes.map((quote, id) => this.renderQuoteCard(quote, id))}
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

const mapDispatchToProps = (dispatch) => {
  console.log("upvote!")
  return {
    upvoteQuote: (quote) => {
      dispatch(upvoteQuote(quote.id))
    }
  } 
}



//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
