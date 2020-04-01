  export default (state = [], action) => {
    console.log("inside reducer")
    console.log(action)

  switch (action.type) {
    case 'ADD_QUOTE':
      console.log("inside add quote switch")
      return [...state, action.quote]

    case 'REMOVE_QUOTE':
      console.log("inside remove quote switch in reducer")
      console.log(action)
      console.log(state)
      let idx = state.findIndex(quote => quote.id  === action.quoteId)
      return [...state.slice(0, idx), ...state.slice(idx + 1)];

    case 'UPVOTE_QUOTE':
      console.log("inside upvote reducer switch")
      console.log(action)
      let i = state.findIndex(quote => quote.id  === action.quoteId)
      let quote = state[i]
      return [
        ...state.slice(0, i), 
        Object.assign({}, quote, {votes: quote.votes += 1}), 
        ...state.slice(i + 1)
      ]

    case 'DOWNVOTE_QUOTE':
      console.log("inside downvote reducer switch")
      console.log(action)

      let index = state.findIndex(quote => quote.id  === action.quoteId)
      quote = state[index]


      if (quote.votes > 0) {

        return [
          ...state.slice(0, index), 
          Object.assign({}, quote, {votes: quote.votes -= 1}), 
          ...state.slice(index + 1)
        ]   
      } else {
        return state
      }

      default:
        return state
  }
}
