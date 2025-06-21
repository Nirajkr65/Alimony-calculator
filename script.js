const calculateBtn = document.getElementById('calculateBtn');

calculateBtn.addEventListener('click', () => {
  const husbandIncome = Number(document.getElementById('husbandIncome').value);
  const wifeIncome = Number(document.getElementById('wifeIncome').value);
  const resultDiv = document.getElementById('result');

  if (isNaN(husbandIncome) || isNaN(wifeIncome) || husbandIncome <= 0 || wifeIncome < 0) {
    resultDiv.textContent = "Please enter valid incomes.";
    return;
  }

const re = document.getElementById('result');
    re.textContent = "CALCULATE ALIMONY $ =  "+"Ae Pagal Aaurat!";
});
