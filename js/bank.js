/*=======
 Deposit button 
 ===========*/

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

    // step 9: clear the deposit input filed
    depositField.value = "";
  });

/*=======
Withdraw button 
 ===========*/

//  step 1: add click event handler with Withdraw button
document
  .getElementById("withdraw-button")
  .addEventListener("click", function (event) {
    // step 2: stop button reload issue
    event.preventDefault();

    // step 3: get the input filed value
    const withdrawFiled = document.getElementById("withdraw-input");
    const newWithdrawAmountString = withdrawFiled.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // step 4: get the value from top withdraw section
    const withdrawTotalElement = document.getElementById("withdraw-total");
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // step 5: calculate new withdraw from input and previous withdraw from top
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // step 6: reduce withdraw input amount from total balance
    const newBalanceTotalElement = document.getElementById("balance-total");
    const newBlanceTotalString = newBalanceTotalElement.innerText;
    const newBalanceTotalConvert = parseFloat(newBlanceTotalString);
    const newCurrentWithdrawConvert = parseFloat(currentWithdrawTotal);
    const newBlanceTotal = newBalanceTotalConvert - newCurrentWithdrawConvert;
    newBalanceTotalElement.innerText = newBlanceTotal;

    // step 7: clear withdraw input value
    withdrawFiled.value = "";
  });
