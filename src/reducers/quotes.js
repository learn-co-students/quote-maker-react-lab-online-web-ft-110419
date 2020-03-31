  export default (state = [], action) => {

  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]

    // case 'REMOVE_QUOTE':
    //   return [...state]
    case 'UPVOTE_QUOTE':
      console.log(action)

      return [...state]
    // case 'DOWNVOTE_QUOTE':
    //   return [state]
    default:
      return state
  }
}
