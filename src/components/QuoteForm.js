import React, { Component } from 'react';
import uuid from 'react-uuid'
import { connect } from 'react-redux';

import { addQuote } from '../actions/quotes';

class QuoteForm extends Component {

  //set up a controlled form with internal state
  state = {
    content: '',
    author: ''
  }

  // Handle Updating Component State
  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value}
    )  
  }

  isValid() {
    if (this.state.content === '' && this.state.author === '') {
      return false
    } else {
      return true
    }
  }

  // Handle Form Submit event default
  // Create quote object from state
  // Pass quote object to action creator    
  // Update component state to return to default state
  handleOnSubmit = event => {
    event.preventDefault()
    const id = uuid()
    const {content, author} = this.state
    const actionObj = {
      id,
      content,
      author
    }

    this.props.addQuote(actionObj)

    this.setState({
      content: '',
      author: ''
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form onSubmit={(event) => this.handleOnSubmit(event)} className="form-horizontal">
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                      <textarea
                        onChange={(event) => this.handleOnChange(event)}
                        // onChange={this.handleOnChange}
                        name="content"
                        className="form-control"
                        value={this.state.content}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input
                        name="author"
                        onChange={(event) => this.handleOnChange(event)}
                        // onChange={this.handleOnChange}
                        className="form-control"
                        type="text"
                        value={this.state.author}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button onClick={this.handleOnSubmit} 
                      type="submit" 
                      className="btn btn-default"
                      disabled={!this.isValid()}>Add</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  console.log("Inside mapDispatchToProps")
  // The addQuote function is accessible through the import up top.

  return {
    addQuote: (quote) => { dispatch(addQuote(quote, console.log("Running addQuote function now", quote))) }
  }
}

//add arguments to connect as needed
export default connect(null, mapDispatchToProps)(QuoteForm);
