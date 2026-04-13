import updateTransactions from "./utils/transaction.js";
import initModal from "./utils/modal.js";

document.addEventListener("DOMContentLoaded", () => {
  initModal(
    "addTransactionModal",
    "btnOpenAddTransaction",
    "btnCloseAddTransaction",
  );
});

let existingTrans = [];
function loadTransactions() {
  existingTrans = JSON.parse(localStorage.getItem("myTransactions")) || [];
  updateTransactions(existingTrans);
}
loadTransactions();

const saveToDB = async (formData) => {
  const response = await fetch("http://127.0.0.1:5000/api/transactions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const result = await response.json();
  /* if (result.success) {
    console.log("Entry Added");
  } */
};

const getData = async () => {
  try {
    const response = await fetch("http://127.0.0.1:5000/api/transactions");
    if (!response.ok) {
      throw new Error(`Response Status: ${response.status}`);
    }
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
};

// Add Transactions
const form = document.querySelector("#addTrasactionForm");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  existingTrans = JSON.parse(localStorage.getItem("myTransactions")) || [];
  const formData = new FormData(addTrasactionForm);

  const newTrans = new Object({
    date: formData.get("date-time"),
    time: new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
    description: formData.get("desc"),
    category: formData.get("category"),
    account: formData.get("account"),
    amount: parseFloat(formData.get("price")),
  });
  await saveToDB(newTrans);

  addTrasactionForm.reset();
  await getData();
  updateTransactions(existingTrans);
  loadDetailView();
});

// Load Details Transaction View
function loadDetailView() {
  const detailDescEl = document.querySelector("#detail-desc");
  const detailDateEl = document.querySelector("#detail-date");
  const detailTimeEl = document.querySelector("#detail-time");
  const detailCategoryEl = document.querySelector("#detail-category");
  const detailAccountEl = document.querySelector("#detail-account");
  const detailAmountEl = document.querySelector("#detail-amount");

  existingTrans = JSON.parse(localStorage.getItem("myTransactions")) || [];
  if (existingTrans.length > 0) {
    const date = new Date(existingTrans[0].date);
    const formattedDate = date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

    detailDescEl.textContent = existingTrans[0].description;
    detailDateEl.textContent = formattedDate;
    detailTimeEl.textContent = existingTrans[0].time;
    detailCategoryEl.textContent = existingTrans[0].category;
    detailAccountEl.textContent = existingTrans[0].account;
    detailAmountEl.textContent = `₹${existingTrans[0].amount}`;
  }
}
loadDetailView();
