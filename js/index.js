// select the Credit and Debit buttons
const creditBtn = document.getElementById("credit");
const debitBtn = document.getElementById("debit");

// select the input fields
const dateInput = document.getElementById("date");
const amountInput = document.getElementById("amount");
const descriptionInput = document.getElementById("description");

// select the table body
const tableBody = document.querySelector("#expenses tbody");

// select the balance element
const balanceElement = document.getElementById("balance");

// set initial balance to 0
let balance = 0;

// add event listeners to the Credit and Debit buttons
creditBtn.addEventListener("click", ()=> {
  if (validateInput()) {
    const amount = parseFloat(amountInput.value);
    addRow('table-success');
    balance += amount;
    balanceElement.textContent = balance.toFixed(2);
  }
});

debitBtn.addEventListener("click", ()=> {
    if (validateInput()) {
      const amount = parseFloat(amountInput.value);
      if (amount > balance) {
        alert("Debit amount cannot exceed the current balance.");
        return;
      }
      addRow('table-danger');
      balance -= amount;
      balanceElement.textContent = balance.toFixed(2);
    }
});
  

// function to validate the input fields
function validateInput() {
  if (dateInput.value.trim() === "" || amountInput.value.trim() === "" || descriptionInput.value.trim() === "") {
    alert("Please enter valid values for all fields.");
    return false;
  }
  
  return true;
}

// function to add a new row to the table
function addRow(typeofclass) {
  // create a new row element
  const newRow = document.createElement("tr");
  newRow.classList.add(typeofclass);

  // create three new cell elements for the date, amount, and description
  const dateCell = document.createElement("td");
  const amountCell = document.createElement("td");
  const descriptionCell = document.createElement("td");
  dateCell.classList.add('text-dark')
  amountCell.classList.add('text-dark')
  descriptionCell.classList.add('text-dark')
  // set the text content of the date, amount, and description cells to the values entered in the form
  dateCell.textContent = dateInput.value;
  amountCell.textContent = amountInput.value;
  descriptionCell.textContent = descriptionInput.value;

  // append the date, amount, and description cells to the new row element
  newRow.appendChild(dateCell);
  newRow.appendChild(amountCell);
  newRow.appendChild(descriptionCell);

  // append the new row element to the table body
  tableBody.appendChild(newRow);
}


let resetValue = document.getElementById('reset');
resetValue.addEventListener('click', ()=>{
    tableBody.innerHTML='';
})