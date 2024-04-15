function calculate() {
  var num1 = parseFloat(document.getElementById("number1").value);
  var num2 = parseFloat(document.getElementById("number2").value);
  var operation = document.getElementById("operation").value;
  var result;

  switch(operation) {
    case "addition":
      result = num1 + num2;
      break;
    case "subtraction":
      result = num1 - num2;
      break;
    case "multiplication":
      result = num1 * num2;
      break;
    case "division":
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        result = "Cannot divide by zero";
      }
      break;
    default:
      result = "Please select an operation";
  }

  var resultAlert = document.querySelector(".result");
  if (typeof result === 'number') {
    resultAlert.innerText = "Result: " + result;
    resultAlert.classList.remove("alert-warning");
    if (result >= 0) {
      resultAlert.classList.remove("alert-danger");
      resultAlert.classList.add("alert-success");
    } else {
      resultAlert.classList.remove("alert-success");
      resultAlert.classList.add("alert-danger");
    }
  } else {
    resultAlert.innerText = result;
    resultAlert.classList.remove("alert-success", "alert-danger");
    resultAlert.classList.add("alert-warning");
  }
}

  resultAlert.innerHTML = "Result: " + result;

   
  