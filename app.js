// deposit section start here
var add_btn = document.getElementById("add_btn");
add_btn.addEventListener("click", function () {
  var deposit_input = document.getElementById("deposit_input").value;
  var New_Deposit_input = parseFloat(deposit_input);
  var total_deposit = document.getElementById("total_deposit").innerHTML;
  var New_total_deposit = parseFloat(total_deposit);
  var total_deposit = New_Deposit_input + New_total_deposit;
  document.getElementById("total_deposit").innerHTML = total_deposit.toFixed(2);

  // total balance section start here
  var total_balance = document.getElementById("total_balance").innerHTML;
  var New_Total_balance = parseFloat(total_balance);
  var New_balance = New_Deposit_input + New_Total_balance;
  var total_balance = document.getElementById("total_balance").innerHTML =
    New_balance.toFixed(2);

  // total balance section end here
});

// deposit section end here

// withdraw section start here
var widthraw_btn = document.getElementById("widthraw_btn");
widthraw_btn.addEventListener("click", function () {
  var Widthrow_input = document.getElementById("Widthrow_input").value;
  var New_Widthrow_input = parseFloat(Widthrow_input);
  var widthrow_balance = document.getElementById("widthrow_balance").innerHTML;
  var New_widthrow_balance = parseFloat(widthrow_balance);
  var total_withdraw = New_Widthrow_input + New_widthrow_balance;
  document.getElementById("widthrow_balance").innerHTML = total_withdraw.toFixed(2);

  var total_balance = document.getElementById("total_balance").innerHTML;
  var New_Total_balance = parseFloat(total_balance);
  var multiplication = New_Total_balance - New_Widthrow_input;
  document.getElementById("total_balance").innerHTML = multiplication.toFixed(2);
});

// withdraw section end  here
