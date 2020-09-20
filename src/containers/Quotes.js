import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import {removeQuote,downvoteQuote,upvoteQuote} from '../actions/quotes'
class Quotes extends Component {


  renderQuotes = q => {
 
  return(  this.props.quotes.map(u => 
  
  < QuoteCard quote={u} removeQuote={this.props.removeQuote}
  upvoteQuote={this.props.upvoteQuote}
  downvoteQuote={this.props.downvoteQuote}
  key={u.id} />))}

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
              {this.renderQuotes()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    quotes: state.quotes
  };
};
const mapDispatchToProps = dispatch =>({
  removeQuote: quoteid => dispatch(removeQuote(quoteid)),
  upvoteQuote: quoteid => dispatch(upvoteQuote(quoteid)),
  downvoteQuote: quoteid => dispatch(downvoteQuote(quoteid))
})
//add arguments to connect as needed
export default connect(mapStateToProps,mapDispatchToProps)(Quotes);
