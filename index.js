function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true
      }

    }

  }
  return false
}

/* 
  Write the Big O time complexity of your function here
 
  - O(n^2)
*/

/* 
  Add your pseudocode here
  function takes in array and target
  loop throught the array using two loops
  set i = 0  and j = i+1
  if array[i] + array[j] is equal to the target return true else false

*/

/*
  Add written explanation of your solution here
The outer for loop iterates over the given array (array[i]).
the nested for loop the current element in the outer loop to every element in the array exept itself {array[i+1]} 
when array[i] + array[i+1] is equal to the target return true else return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
