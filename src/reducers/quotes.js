import Quotes from "../containers/Quotes"

export default (state = [], action) => {
  let idx 
  let quote
  
  switch(action.type) {

    case 'ADD_QUOTE':
      return [...state, action.formData]
    
    case 'REMOVE_QUOTE':
      idx = state.findIndex(quote => quote.id === action.id)
      return [...state.slice(0,idx), ...state.slice(idx + 1)]

    case 'UPVOTE':
      idx = state.findIndex(quote => quote.id === action.id)
      quote = {...state[idx]}

      if (quote.votes === undefined) {
        quote = {...quote, votes: 1}
      } else {
        quote = {...quote, votes: quote.votes += 1}
      }

      return [...state.slice(0,idx), quote, ...state.slice(idx + 1)]
    
    case 'DOWNVOTE':
      idx = state.findIndex(quote => quote.id === action.id)
      quote = {...state[idx]}

      if (quote.votes === undefined) {
        quote = {...quote, votes: 1}
      } else {
        quote = {...quote, votes: quote.votes -= 1}
      }

      return [...state.slice(0,idx), quote, ...state.slice(idx + 1)]

    default:
      return state
  }
}
