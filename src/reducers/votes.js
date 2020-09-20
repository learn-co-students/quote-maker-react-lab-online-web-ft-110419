// export default (state = [], action) => {
//   switch(action.type) {

//     case 'UPVOTE':
//       let idx
//       let obj = state.find(count => count.id === action.id)

//       if (!!obj)
//         idx = state.findIndex(count => count.id === action.id)

//       return obj ? [...state.splice(0,idx), {...obj, votes: obj.votes++}, ...state.slice(idx + 1)] : [...state, {id: action.id, votes: 1}]

    

//     default:
//       return state
//   }
// }