const inputNumber = document.getElementById("number");
const convertButton = document.getElementById("convert-btn");
const outputBox = document.getElementById("output-box");
const romanOutput = document.getElementById("output");

const checkNumber = (input) => {
  if (!input) {
    romanOutput.textContent = "Please enter a valid number";
    return;
  }
  else if (input <= 0) {
    romanOutput.textContent = "Please enter a number greater than or equal to 1";
    return;
  }
  else if (input > 3999) {
    romanOutput.textContent = "Please enter a number less than or equal to 3999";
    return;
  } 
  else {
    convertNumber(input);
  }
};

const convertNumber = async (number) => {
  let roman = "";

  while (number > 0) {
    if (number >= 1000) {
      roman += "M";
      number -= 1000;
    } else if (number >= 900) {
      roman += "CM";
      number -= 900;
    } else if (number >= 500) {
      roman += "D";
      number -= 500;
    } else if (number >= 400) {
      roman += "CD";
      number -= 400;
    } else if (number >= 100) {
      roman += "C";
      number -= 100;
    } else if (number >= 90) {
      roman += "XC";
      number -= 90;
    } else if (number >= 50) {
      roman += "L";
      number -= 50;
    } else if (number >= 40) {
      roman += "XL";
      number -= 40;
    } else if (number >= 10) {
      roman += "X";
      number -= 10;
    } else if (number === 9) {
      roman += "IX";
      number -= 9;
    } else if (number >= 5) {
      roman += "V";
      number -= 5;
    } else if (number === 4) {
      roman += "IV";
      number -= 4;
    } else {
      roman += "I";
      number -= 1;
    }
  }

  romanOutput.textContent = roman;
  return;
};

convertButton.addEventListener("click", () => {
  checkNumber(parseInt(inputNumber.value))
  outputBox.style.display = "flex";
});
