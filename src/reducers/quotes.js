import {
  ADD_QUOTE,
  REMOVE_QUOTE,
  UPVOTE_QUOTE,
  DOWNVOTE_QUOTE
} from "../actions/quoteTypes";

export default (state = [], action) => {
  switch (action.type) {
    case ADD_QUOTE:
      return [...state, action.quote];

    case REMOVE_QUOTE:
      return state.filter(quote => quote.id !== action.quoteId);

    case UPVOTE_QUOTE:
      return state.map(quote => {
        return quote.id === action.quoteId
          ? { ...quote, vote: quote.vote + 1 }
          : quote;
      });

    case DOWNVOTE_QUOTE:
      return state.map(quote => {
        if (
          quote.id === action.quoteId &&
          quote.votes >= 1 &&
          typeof quote.votes === "number"
        ) {
          return { ...quote, vote: quote.vote - 1 };
        } else {
          return quote;
        }
      });

    default:
      return state;
  }
};
