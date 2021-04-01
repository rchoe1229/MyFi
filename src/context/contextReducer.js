// Reducer => a function that takes in the old state, and an action => new state
const contextReducer = (state, action) => {
  let transactions;
  // const transactionsUrl = "http://localhost:3001/transactions"

  switch (action.type) {
    case "DELETE_TRANSACTION":
      transactions = state.filter((t) => t.id !== action.payload);
      // fetch(transactionsUrl + `/${id}`, {method: "DELETE"})
      localStorage.setItem("transactions", JSON.stringify(transactions));
      return transactions;
    case "ADD_TRANSACTION":
      transactions = [action.payload, ...state];
      localStorage.setItem("transactions", JSON.stringify(transactions));
      return transactions;
    default:
      return state;
  }
};

export default contextReducer;
