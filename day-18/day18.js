// Day 18: Algorithms

// Activity 1: Sorting Algorithms
// Task 1: Bubble Sort
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}
console.log('Bubble Sort:', bubbleSort([64, 34, 25, 12, 22, 11, 90]));

// Task 2: Selection Sort
function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}
console.log('Selection Sort:', selectionSort([64, 25, 12, 22, 11]));

// Task 3: Quicksort
function quickSort(arr) {
    if (arr.length <= 1) return arr;
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}
console.log('Quicksort:', quickSort([10, 7, 8, 9, 1, 5]));

// Activity 2: Searching Algorithms
// Task 4: Linear Search
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}
console.log('Linear Search:', linearSearch([2, 3, 4, 10, 40], 10));

// Task 5: Binary Search
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}
console.log('Binary Search:', binarySearch([2, 3, 4, 10, 40], 10));

// Activity 3: String Algorithms
// Task 6: Count Character Occurrences
function countCharacters(str) {
    let charCount = {};
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    return charCount;
}
console.log('Character Occurrences:', countCharacters('hello world'));

// Task 7: Longest Substring Without Repeating Characters
function longestSubstringWithoutRepeatingCharacters(s) {
    let maxLength = 0;
    let start = 0;
    let seenChars = {};
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (seenChars[char] >= start) {
            start = seenChars[char] + 1;
        }
        seenChars[char] = i;
        maxLength = Math.max(maxLength, i - start + 1);
    }
    return maxLength;
}
console.log('Longest Substring Without Repeating Characters:', longestSubstringWithoutRepeatingCharacters('abcabcbb'));

// Activity 4: Array Algorithms
// Task 8: Rotate Array by k Positions
function rotateArray(arr, k) {
    k = k % arr.length;
    return arr.slice(-k).concat(arr.slice(0, -k));
}
console.log('Rotate Array:', rotateArray([1, 2, 3, 4, 5, 6, 7], 3));

// Task 9: Merge Two Sorted Arrays
function mergeSortedArrays(arr1, arr2) {
    let mergedArray = [];
    let i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) mergedArray.push(arr1[i++]);
    while (j < arr2.length) mergedArray.push(arr2[j++]);
    return mergedArray;
}
console.log('Merge Sorted Arrays:', mergeSortedArrays([1, 3, 5], [2, 4, 6]));

// Activity 5: Dynamic Programming (Optional)
// Task 10: Fibonacci Sequence Using Dynamic Programming
function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[n];
}
console.log('Fibonacci:', fibonacci(10));

// Task 11: Knapsack Problem Using Dynamic Programming
function knapsack(values, weights, capacity) {
    let n = values.length;
    let dp = Array(n + 1).fill().map(() => Array(capacity + 1).fill(0));
    for (let i = 1; i <= n; i++) {
        for (let w = 0; w <= capacity; w++) {
            if (weights[i - 1] <= w) {
                dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - weights[i - 1]] + values[i - 1]);
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }
    return dp[n][capacity];
}
console.log('Knapsack:', knapsack([60, 100, 120], [10, 20, 30], 50));
