export default (state = [], action) => {
  // return state;
  switch (action.type){
    case "ADD_QUOTE":
      return state; //+ something else;
    case "REMOVE_QUOTE":
      return state; // something else
    case "UPVOTE_QUOTE":
      return state; //some function 
    case "DOWNVOTE_QUOTE":
      return state; //some function
    
    // return state;

    default:
      return state;
  }
}
