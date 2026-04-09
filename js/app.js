import data from "./data.js";
import initModal from "./utils/modal.js";

document.addEventListener('DOMContentLoaded', () => {
    initModal('addTransactionModal', 'btnOpenAddTransaction', 'btnCloseAddTransaction');
});