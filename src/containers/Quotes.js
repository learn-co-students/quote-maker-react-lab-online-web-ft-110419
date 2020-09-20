import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';

import QuoteCard from '../components/QuoteCard';

class Quotes extends Component {

  // renderQuoteCards(){
  //   console.log(this.props.quotes)
    
  //   this.props.quotes.map( quote => {
  //     return (
  //       <QuoteCard 
  //         key={quote.id} 
  //         quote={quote} 
  //         upvoteQuote={this.props.upvoteQuote} 
  //         downvoteQuote={this.props.downvoteQuote} 
  //         removeQuote={this.props.removeQuote}/>
  //     )
  //   });
  // }

  render() {
    console.log(this.props)
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
              {/* {this.renderQuoteCards()} */
                this.props.quotes.map( quote => {
                  return (
                    <QuoteCard 
                      key={quote.id} 
                      quote={quote} 
                      upvoteQuote={this.props.upvoteQuote} 
                      downvoteQuote={this.props.downvoteQuote} 
                      removeQuote={this.props.removeQuote}/>
                  )
                })
              
              
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  //mapStateToProps is redefining the store/state here

  return {
    quotes: state.quotes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeQuote: quoteId => { dispatch(removeQuote(quoteId)) },
    downvoteQuote: quoteId => { dispatch(downvoteQuote(quoteId)) },
    upvoteQuote: quoteId => { dispatch(upvoteQuote(quoteId)) }
  }
}


//add arguments to connect as needed
// export default connect(mapStateToProps, { removeQuote, upvoteQuote, downvoteQuote })(Quotes);

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
