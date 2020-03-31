// import uuid from 'uuid';

export default (state = {quotes: []}, action) => {
  // export default (state = [], action) => {

  switch (action.type) {
    case 'ADD_QUOTE':
      return { 
        ...state,
        quotes: [...state.quotes, action.quote]
      }
    // case 'REMOVE_QUOTE':
    //   return {}
    // case 'ADD_QUOTE':
    //   return {}
    // case 'REMOVE_QUOTE':
    //   return {}
    default:
      return state
  }
}
