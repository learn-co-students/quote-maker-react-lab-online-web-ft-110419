// TODO: Create action creators as defined in tests

export const addQuote = quote => {
    debugger
    // quote: Object.assign({}, quote)
    return{
        type: 'ADD_QUOTE',
        quote: Object.assign({}, quote ) 
    }
}