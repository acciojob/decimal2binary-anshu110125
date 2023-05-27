function threeSum(arr, target) {
// write your code here
	function decimalToBinary(decimal) {
  let binary = '';

  // Edge case: handle input 0 separately
  if (decimal === 0) {
    return '0';
  }

  while (decimal > 0) {
    // Append the remainder to the binary representation string
    binary = (decimal % 2) + binary;
    // Integer division by 2 to get the quotient
    decimal = Math.floor(decimal / 2);
  }

  return binary;
}

// Example usage:
console.log(decimalToBinary(7)); // Output: 111
console.log(decimalToBinary(10)); // Output: 1010
console.log(decimalToBinary(33)); // Output: 100001

  
}

module.exports = threeSum;
