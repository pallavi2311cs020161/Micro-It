function appendValue(value) {
  document.getElementById('result').value += value;
}

function clearResult() {
  document.getElementById('result').value = '';
}

function calculateResult() {
  try {
    const output = eval(document.getElementById('result').value);
    document.getElementById('result').value = output;
  } catch {
    document.getElementById('result').value = 'Error';
  }
}
