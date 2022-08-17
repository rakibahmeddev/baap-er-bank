//  step 1: add click event  handler with the Deposti button
document
  .getElementById("deposit-button")
  .addEventListener("click", function (event) {
    // step 2: stop page reload
    event.preventDefault();

    // step 3 get the deposit input value
    const depositField = document.getElementById("deposit-input");
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    console.log(typeof newDepositAmount);

    // step 5: set deposit input value to the top deposit area
    const depositTotalElement = document.getElementById("deposit-total");
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;

    // step 6: get Total Balance amount
    const balanceTotalElement = document.getElementById("balance-total");
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step 7: calculate current total balance and sum with new deposit amount
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;

    // step 8: set the current balance to the Total Balance
    balanceTotalElement.innerText = currentBalanceTotal;

    // step 10: clear the deposit input filed
    depositField.value = "";
  });
