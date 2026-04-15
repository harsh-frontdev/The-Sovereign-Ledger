let state = {
    transactions: [],
    selectedId: null
};

export const setTransactions = (data) => {
    state.transactions = data;
}

export const setSelectedId = (id) => {
    state.selectedId = id;
}

export const getTransactions = () => {
    return state.transactions;
}

export const getSelectedTransaction = () => {
    return state.transactions.find(t => t._id === state.selectedId);
}