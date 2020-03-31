// import uuid from 'uuid';

export default (state = {quotes: []}, action) => {
  // export default (state = [], action) => {

  switch (action.type) {
    case 'ADD_QUOTE':
      console.log(action.quote)

      return { 
        ...state,
        quotes: [...state.quotes, action.quote]
      }
    case 'REMOVE_QUOTE':
      return {}
    case 'UPVOTE_QUOTE':
      return { }
    // case 'DOWNVOTE_QUOTE':
    //   return {}
    default:
      return state
  }
}
