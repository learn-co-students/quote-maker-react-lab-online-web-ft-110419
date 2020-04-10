// The action argument is coming from the QuotesForm, defined inside the mapDispatchToProps
// But called on the form's handle Submit

// The React store holds the state for the entire App
// The QuotesForm has it's own seperate state.

export default (state = [], action) => {
  console.log(action, "Inside Reducer")

  switch ( action.type ) {
    case "ADD_QUOTE": 
      return [...state, action.quote]
    case "REMOVE_QUOTE": 
      return state.filter( quote => quote.id !== action.quoteId )
    case "UPVOTE_QUOTE":
      state.find( quote => quote.id === action.quoteId ).votes ++ 
      return state 
    case "DOWNVOTE_QUOTE":
      let quote = state.find( quote => quote.id === action.quoteId )
      if (quote.votes > 0) {
        quote.votes -- 
      }  
      return state 
    default: 
      return state 
  }
  
}
