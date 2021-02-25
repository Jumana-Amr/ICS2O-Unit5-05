function calculateArea () { // eslint-disable-line no-unused-vars
  let area = 0
  const side = document.getElementById('id-side').value
  area = side * side
  document.getElementById('id-output').innerHTML = 'Area = ' + area
}
