export default (state = [], action) => {
	switch (action.type) {
		case 'ADD_QUOTE':
			let newState = state.slice()
			newState.push(action.quote)
			return newState
		case 'REMOVE_QUOTE':
			console.log("remove")
			index = state.findIndex(quote => quote.id === action.quoteId)
			return (state.slice(0, index)).concat(state.slice(index+1))
		case 'UPVOTE_QUOTE':
			console.log("upvote")
			let index = state.findIndex(quote => quote.id === action.quoteId)
			newState = state.slice()
			newState[index].votes += 1
			return newState
		case 'DOWNVOTE_QUOTE':
			index = state.findIndex(quote => quote.id === action.quoteId)
			newState = state.slice()
			if (newState[index].votes > 0) {
				newState[index].votes -= 1
			}
			return newState
		default:
			return state
	}
}
