// Day 16: Recursion

// Activity 1: Basic Recursion

// Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  }
  console.log(factorial(5)); // Logs: 120
  console.log(factorial(7)); // Logs: 5040
  
  // Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.
  function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  console.log(fibonacci(6)); // Logs: 8
  console.log(fibonacci(10)); // Logs: 55
  
  // Activity 2: Recursion with Arrays
  
  // Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.
  function sumArray(arr) {
    if (arr.length === 0) return 0;
    return arr[0] + sumArray(arr.slice(1));
  }
  console.log(sumArray([1, 2, 3, 4, 5])); // Logs: 15
  console.log(sumArray([10, 20, 30])); // Logs: 60
  
  // Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.
  function maxArray(arr) {
    if (arr.length === 1) return arr[0];
    const maxOfRest = maxArray(arr.slice(1));
    return arr[0] > maxOfRest ? arr[0] : maxOfRest;
  }
  console.log(maxArray([1, 5, 3, 9, 2])); // Logs: 9
  console.log(maxArray([10, 20, 30, 5])); // Logs: 30
  
  // Activity 3: String Manipulation with Recursion
  
  // Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.
  function reverseString(str) {
    if (str === '') return '';
    return reverseString(str.substr(1)) + str[0];
  }
  console.log(reverseString('hello')); // Logs: 'olleh'
  console.log(reverseString('world')); // Logs: 'dlrow'
  
  // Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.
  function isPalindrome(str) {
    if (str.length <= 1) return true;
    if (str[0] !== str[str.length - 1]) return false;
    return isPalindrome(str.slice(1, -1));
  }
  console.log(isPalindrome('racecar')); // Logs: true
  console.log(isPalindrome('hello')); // Logs: false
  
  // Activity 4: Recursive Search
  
  // Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.
  function binarySearch(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) return -1;
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] > target) return binarySearch(arr, target, left, mid - 1);
    return binarySearch(arr, target, mid + 1, right);
  }
  console.log(binarySearch([1, 2, 3, 4, 5], 3)); // Logs: 2
  console.log(binarySearch([10, 20, 30, 40, 50], 25)); // Logs: -1
  
  // Task 8: Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.
  function countOccurrences(arr, target) {
    if (arr.length === 0) return 0;
    const count = arr[0] === target ? 1 : 0;
    return count + countOccurrences(arr.slice(1), target);
  }
  console.log(countOccurrences([1, 2, 3, 1, 4, 1], 1)); // Logs: 3
  console.log(countOccurrences([10, 20, 30, 40, 50], 25)); // Logs: 0
  
  // Activity 5: Tree Traversal (Optional)
  
  // Binary tree node definition
  class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  // Task 9: Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.
  function inOrderTraversal(node) {
    if (node === null) return;
    inOrderTraversal(node.left);
    console.log(node.value);
    inOrderTraversal(node.right);
  }
  const root = new TreeNode(5);
  root.left = new TreeNode(3);
  root.right = new TreeNode(7);
  root.left.left = new TreeNode(2);
  root.left.right = new TreeNode(4);
  root.right.left = new TreeNode(6);
  root.right.right = new TreeNode(8);
  inOrderTraversal(root); // Logs: 2, 3, 4, 5, 6, 7, 8
  
  // Task 10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.
  function calculateDepth(node) {
    if (node === null) return 0;
    const leftDepth = calculateDepth(node.left);
    const rightDepth = calculateDepth(node.right);
    return Math.max(leftDepth, rightDepth) + 1;
  }
  console.log(calculateDepth(root)); // Logs: 3
  