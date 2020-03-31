import uuid from 'uuid';

export default (state = [], action) => {



  switch (action.type) {
    case 'ADD_QUOTE':
      console.log(action.quote)
      console.log(state)
      return { 
        ...state.concat(action.quote)
        // ...state,
        // quotes: [...state.quotes, action.quote]
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
