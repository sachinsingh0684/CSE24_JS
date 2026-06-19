function checkArmstrong() {
  const input = document.getElementById('numInput').value.trim();
  const resultBox = document.getElementById('result');

  if (input === '' || !/^\d+$/.test(input)) {
    resultBox.className = 'error';
    resultBox.innerHTML = '<div class="verdict">Please enter a valid non-negative integer.</div>';
    return;
  }

  const numStr = input;
  const digits = numStr.split('').map(Number);
  const power = digits.length;
  const terms = digits.map(d => Math.pow(d, power));
  const sum = terms.reduce((a, b) => a + b, 0);
  const num = parseInt(numStr, 10);
  const isArmstrong = sum === num;

  const termsLine = digits.map(d => d + '^' + power).join(' + ');
  const valuesLine = terms.join(' + ');

  resultBox.className = isArmstrong ? 'yes' : 'no';
  resultBox.innerHTML = `
    <div class="verdict">${num} is ${isArmstrong ? '' : 'NOT '}an Armstrong number</div>
    <div class="breakdown">
      digits: ${digits.join(', ')} (count: ${power})<br>
      ${termsLine}<br>
      = ${valuesLine}<br>
      = ${sum}
    </div>
  `;
}

// Run once on page load with the default value
checkArmstrong();

// Allow pressing Enter to trigger the check
document.getElementById('numInput').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') checkArmstrong();
});
