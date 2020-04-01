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
      // return [state]
      let idx = state.findIndex(quote => quote.id  === action.quoteId)
      return [...state.slice(0, idx), ...state.slice(idx + 1)];

    // case 'UPVOTE_QUOTE':
    //   console.log("inside upvote reducer switch")
    //   console.log(action)

    //   return [...state]
    // case 'DOWNVOTE_QUOTE':
    //   return [state]
    default:
      return state
  }
}
