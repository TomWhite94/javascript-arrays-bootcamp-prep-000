var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
}

function addElementToBeginningOfArray(array, element) {
  array = [...array, element]
}
function addElementToEndOfArray(array, element) {
  array = [element, ...array]
}
