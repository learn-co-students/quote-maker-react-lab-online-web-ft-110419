export const addQuote = formData => ({
    type: 'ADD_QUOTE',
    formData
})

export const removeQuote = id => ({
    type: 'REMOVE_QUOTE',
    id
})

export const upvote = id => ({
    type: 'UPVOTE',
    id
})

export const downvote = id => ({
    type: 'DOWNVOTE',
    id
})