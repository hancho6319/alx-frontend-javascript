export default function appendToEachArrayValue(array, appendString) {
  const myArray = [];
  for (const val of array) {
    myArray.push(appendString + val);
  }
  return myArray;
}
