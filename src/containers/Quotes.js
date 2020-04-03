import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { addQuote } from '../actions/quotes';

class Quotes extends Component {

  render() {
    return (
      <div>
        const {addQuote} = this.props;
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {/*
                TODO:
                map to quote card but addQuote is wrong
                {addQuote.map(quote => <QuoteCard key={quote.id} quote={quote} />)}

                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return({
    quotes: state.quotes
  })
}

const mapDispatchToProps = dispatch => {
  return{
    add_quote : () => dispatch({type: 'ADD_QUOTE'}),
    remove_quote : () => dispatch({type: 'REMOVE_QUOTE'}),
    upvote_quote : () => dispatch({type: 'UPVOTE_QUOTE'}),
    downvote_quote : () => dispatch({type: 'DOWNVOTE_QUOTE'}),
  }
}

//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
//null, mapDispatchToProps