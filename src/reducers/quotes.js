export default (state = [], action) => {
  // return state;
  switch (action.type){
    case "ADD_QUOTE":
      return [...state, action.quote]
    case "REMOVE_QUOTE":
      return state.filter(quote => quote.id !== action.quoteId)
    case "UPVOTE_QUOTE":
      return state.map(quote => quote.id === action.quoteId ? {...quote, votes: quote.votes + 1} : quote); //some function 
    case "DOWNVOTE_QUOTE":
      return state.map(quote => quote.id === action.quoteId && quote.votes > 0 ? {...quote, votes: quote.votes - 1} : quote); //some function

    default:
      return state;
  }
}
