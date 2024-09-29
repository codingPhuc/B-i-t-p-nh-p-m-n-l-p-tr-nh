// 1a
function sumOfFirstNNumbers(n) {
  let sum = 0;
  let i = 1;
  while (i <= n) {
    sum += i;
    i++;
  }
  console.log(sum);
}
// 1b
function SumOfDivisors(n) {
  sum = 0;
  i = 0;
  while (i <= n) {
    if (n % i == 0) {
      sum += i;
    }
    i++;
  }
  console.log(sum);
}
// 1c
function SumOfDigits(n) {
  sum = 0;
  lastDigit = 0;
  while (n > 0) {
    lastDigit = n % 10;
    n = Math.floor(n / 10);
    sum = sum + lastDigit;
  }
  return sum;
}

// 1d
function findMaxDigit(n) {
  currentDigit = 0;
  max = 0;
  while (n > 0) {
    currentDigit = n % 10;
    n = Math.floor(n / 10);
    if (max < currentDigit) {
      max = currentDigit;
    }
  }
  return max;
}
// 7
// 2a
function findMaxInArray(arr) {
  let max = arr[0];
  let i = 1;
  while (i < arr.length) {
    if (arr[i] > max) {
      max = arr[i];
    }
    i++;
  }
  console.log(max);
}
// 2b
function findSecondMaxInArray(arr) {
  let max = arr[0];
  let i = 0;
  let secondMax = arr[0];
  while (i < arr.length) {
    if (arr[i] > max) {
      secondMax = max;
    }
    i++;
  }
  console.log(secondMax);
}
// 2c
function findSecondMinInArray(arr) {
  let min = arr[0];
  let i = 1;
  let secondMin = arr[0];
  while (i < arr.length) {
    if (arr[i] < min) {
      secondMin = min;
      min = arr;
    }
    i++;
  }
  console.log(secondMin);
}
// 2d
function findPrimesInArray(arr) {
  let i = 0;
  while (i < arr.length) {
    j = 2;
    let isPrime = true;
    while (j <= Math.floor(arr[i] / 2)) {
      if (arr[i] % j == 0) {
        isPrime = false;
        break;
      }
      j++;
    }
    if (isPrime && arr[i] > 1) {
      console.log(arr[i]);
    }
    i++;
  }
}
// 3a
function primeNumberCheckAlgorithm(n) {
  if (n <= 1) return false;
  let i = 2;
  while (i <= Math.floor(n / 2)) {
    if (n % i == 0) return false;
    i++;
  }
  return true;
}
// 3b
function CheckPerfectNumber(n) {
  let i = 1;
  let perfectNumber = 0;
  while (perfectNumber < n) {
    perfectNumber = Math.pow(2, i - 1) * (Math.pow(2, i) - 1);
    if (perfectNumber == n) {
      return true;
    }
    i++;
  }
  return false;
}
//  3c
function CheckPerfectSquare(n) {
  if (Number.isInteger(Math.sqrt(n))) {
    return true;
  }
  return false;
}
function printFibonacciSequence(n) {
  i = 0;
  j = 1;
  while (i <= n) {
    console.log(i);
    temp = i + j;
    i = j;
    j = temp;
  }
}
// 3d
function printPrimesUpToN(n) {
  let i = 1;
  while (i <= n) {
    j = 2;
    while (j <= Math.floor(i / 2)) {
      if (i % j == 0) {
        break;
      }
      j++;
    }
    if (j >= Math.floor(i / 2)) {
      console.log(i);
    }
    i++;
  }
}
// 4a
function reverseString(str) {
  let arrStr = str.split("");
  let i = arrStr.length - 1;
  let reverseStr = "";
  while (i >= 0) {
    reverseStr += arrStr[i];
    i--;
  }
  // console.log(reverseStr);
  return reverseStr;
}
// 4b
function RemoveWhitespaceFromString(str) {
  let arrStr = str.split("");
  let i = 0;
  let noSpaceStr = "";
  while (i < arrStr.length) {
    if (arrStr[i] != " ") {
      noSpaceStr += arrStr[i];
    }
    i++;
  }

  return noSpaceStr;
}
// 4c
function checkPalindromeString(str) {
  let reverseStr = reverseString(str);
  if (reverseStr == str) {
    return true;
  }
  return false;
}
// 4d
function findLongestPalindromicSubstring(str) {
  let longestPalindromic = "";
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      let substring = str.substring(i, j + 1);
      if (
        checkPalindromeString(substring) &&
        substring.length > longestPalindromic.length
      ) {
        longestPalindromic = substring;
      }
    }
  }
  return longestPalindromic;
}
//  5
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
// 6a
function calculateAndPrintFactorial(n) {
  i = 1;
  nFactorial = 1;
  while (i <= n) {
    nFactorial *= i;
    i++;
  }
  console.log(nFactorial);
}
// 6b
function calculateAndPrintSumOfDigits(n) {
  let nSum = 0;
  let temp = n;
  while (n > 0) {
    nSum = nSum + (n % 10);
    n = Math.floor(n / 10);
  }
  console.log(nSum);
}

//7
function printFirstnFibonacciNumbers(n) {
  let i = 0;
  let j = 1;
  while (i <= n) {
    temp = i + j;
    console.log(i);
    i = j;
    j = temp;
  }
}
// 8a
function countVowelsInString(str) {
  str = str.toLowerCase();
  let arrStr = str.split();
  let vowels = ["a", "e", "i", "o", "u"];
  let numberOfVowels = 0;
  let i = 0;
  while (i < arrStr.length) {
    if (vowels.includes(arrStr[i])) {
      numberOfVowels++;
    }
    i++;
  }
  console.log(numberOfVowels);
}
//  8b
function countCharOccurrences(str, charToFind) {
  str = str.toLowerCase();
  let arrStr = str.split("");
  let numberOfRepeat = 0;
  let i = 0;
  while (i < arrStr.length) {
    if (arrStr[i] == charToFind) {
      numberOfRepeat++;
    }
    i++;
  }
  console.log(numberOfRepeat);
}
// 8c
function findMostFrequentChars(str) {
  str = str.toLowerCase();
  let arrStr = str.split("");
  let MaxCount = 0;
  let charDict = {};
  let result = [];
  let i = 0;
  while (i < arrStr.length) {
    if (arrStr[i] in charDict) {
      charDict[arrStr[i]] += 1;
    } else {
      charDict[arrStr[i]] = 1;
    }
    i++;
  }
  for (let value of Object.values(charDict)) {
    if (value > MaxCount) {
      MaxCount = value;
    }
  }
  for (let key of Object.keys(charDict)) {
    if (charDict[key] === MaxCount) {
      result.push(key);
    }
  }
  return result;
}
//  9a
function findLongestIncreasingAndDecreasingSubsequence(str) {
  let maxIncreasingSub = "";
  let maxDecreasingSub = "";

  for (let i = 0; i < str.length; i++) {
    let increasingSub = str[i];
    let decreasingSub = str[i];
    for (let j = i; j < str.length - 1; j++) {
      if (str[j] < str[j + 1]) {
        increasingSub += str[j + 1];
      } else {
        if (maxIncreasingSub.length < increasingSub.length) {
          maxIncreasingSub = increasingSub;
        }
        increasingSub = str[j + 1];
      }
    }
    if (maxIncreasingSub.length < increasingSub.length) {
      maxIncreasingSub = increasingSub;
    }
    for (let j = i; j < str.length - 1; j++) {
      if (str[j] > str[j + 1]) {
        decreasingSub += str[j + 1];
      } else {
        if (maxDecreasingSub.length < decreasingSub.length) {
          maxDecreasingSub = decreasingSub;
        }
        decreasingSub = str[j + 1];
      }
    }
    if (maxDecreasingSub.length < decreasingSub.length) {
      maxDecreasingSub = decreasingSub;
    }
  }

  return {
    maxIncreasingSub,
    maxDecreasingSub,
  };
}

// 9b
function sortString(str) {
  let arr = str.split("");

  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let j = i;
    while (j > 0 && temp < arr[j - 1]) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = temp;
  }
  return arr.join("");
}

// 10a
function findGreatestCommonDivisor(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

// 10b
function findLeastCommonMultiple(a, b) {
  i = 2;
  leastCommonMul = 1;
  while (a != 1 && b != 1) {
    if (primeNumberCheckAlgorithm(i)) {
      while (a % i == 0 || b % i == 0) {
        if (a % i == 0) {
          a = Math.floor(a / i);
        }
        if (b % i == 0) {
          b = Math.floor(b / i);
        }
        leastCommonMul *= i;
      }
    }
    i++;
  }
  return leastCommonMul;
}

// 11a
function findMaxIndex(arr) {
  let maxIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[maxIndex]) {
      maxIndex = i;
    }
  }
  return maxIndex;
}

// 11b
function findMinIndex(arr) {
  let minIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[minIndex]) {
      minIndex = i;
    }
  }
  return minIndex;
}
// 11c
function findSum(arr) {
  let sumArr = 0;
  for (let i = 0; i < arr.length; i++) {
    sumArr += arr[i];
  }
  return sumArr;
}

// 12a
function findMaxIn2DArray(arr2D) {
  max = arr2D[0][0];
  for (let i = 0; i < arr2D.length; i++) {
    for (let j = 0; j < arr2D[0].length; j++) {
      if (arr2D[i][j] > max) {
        max = arr2D[i][j];
      }
    }
  }
  return max;
}
// 12b
function findMinIn2DArray(arr2D) {
  let min = arr2D[0][0];
  for (let i = 0; i < arr2D.length; i++) {
    for (let j = 0; j < arr2D[0].length; j++) {
      if (arr2D[i][j] < min) {
        min = arr2D[i][j];
      }
    }
  }
  return min;
}
// 12c
function sumRowOrColumn(arr2D, k, isRow = true) {
  sum = 0;
  if (isRow) {
    for (let j = 0; j < arr2D[0].length; j++) {
      sum += arr2D[k][j];
    }
  } else {
    for (let i = 0; i < arr2D.length; i++) {
      sum += arr2D[i][k];
    }
  }
  return sum;
}
//  12d
function findPrimesIn2DArray(arr2D) {
  for (let i = 0; i < arr2D.length; i++) {
    for (let j = 0; j < arr2D[0].length; j++) {
      if (primeNumberCheckAlgorithm(arr2D[i][j])) {
        console.log(arr2D[i][j]);
      }
    }
  }
}
//   12
// Test cases for sumOfFirstNNumbers
console.log("Calling sumOfFirstNNumbers with argument 5");
sumOfFirstNNumbers(5); // Expected output: 15

// Test cases for SumOfDivisors
console.log("Calling SumOfDivisors with argument 6");
SumOfDivisors(6); // Expected output: 12 (1 + 2 + 3 + 6)

// Test cases for SumOfDigits
console.log("Calling SumOfDigits with argument 123");
console.assert(SumOfDigits(123) === 6, "Test Case 1 Failed"); // 1 + 2 + 3 = 6
console.log("Calling SumOfDigits with argument 456");
console.assert(SumOfDigits(456) === 15, "Test Case 2 Failed"); // 4 + 5 + 6 = 15

// Test cases for findMaxDigit
console.log("Calling findMaxDigit with argument 12345");
console.assert(findMaxDigit(12345) === 5, "Test Case 1 Failed");
console.log("Calling findMaxDigit with argument 98765");
console.assert(findMaxDigit(98765) === 9, "Test Case 2 Failed");

// Test cases for findMaxInArray
console.log("Calling findMaxInArray with argument [1, 2, 3, 4, 5]");
findMaxInArray([1, 2, 3, 4, 5]); // Expected output: 5

// Test cases for findSecondMaxInArray
console.log("Calling findSecondMaxInArray with argument [1, 2, 3, 4, 5]");
findSecondMaxInArray([1, 2, 3, 4, 5]); // Expected output: 4

// Test cases for findSecondMinInArray
console.log("Calling findSecondMinInArray with argument [5, 4, 3, 2, 1]");
findSecondMinInArray([5, 4, 3, 2, 1]); // Expected output: 2

// Test cases for findPrimesInArray
console.log(
  "Calling findPrimesInArray with argument [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
);
findPrimesInArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // Expected output: 2, 3, 5, 7

// Test cases for primeNumberCheckAlgorithm
console.log("Calling primeNumberCheckAlgorithm with argument 5");
console.assert(primeNumberCheckAlgorithm(5) === true, "Test Case 1 Failed");
console.log("Calling primeNumberCheckAlgorithm with argument 4");
console.assert(primeNumberCheckAlgorithm(4) === false, "Test Case 2 Failed");

// Test cases for CheckPerfectNumber
console.log("Calling CheckPerfectNumber with argument 6");
console.assert(CheckPerfectNumber(6) === true, "Test Case 1 Failed");
console.log("Calling CheckPerfectNumber with argument 28");
console.assert(CheckPerfectNumber(28) === true, "Test Case 2 Failed");
console.log("Calling CheckPerfectNumber with argument 12");
console.assert(CheckPerfectNumber(12) === false, "Test Case 3 Failed");

// Test cases for CheckPerfectSquare
console.log("Calling CheckPerfectSquare with argument 4");
console.assert(CheckPerfectSquare(4) === true, "Test Case 1 Failed");
console.log("Calling CheckPerfectSquare with argument 5");
console.assert(CheckPerfectSquare(5) === false, "Test Case 2 Failed");

// Test cases for printFibonacciSequence
console.log("Calling printFibonacciSequence with argument 5");
printFibonacciSequence(5); // Expected output: 0, 1, 1, 2, 3, 5

// Test cases for printPrimesUpToN
console.log("Calling printPrimesUpToN with argument 10");
printPrimesUpToN(10); // Expected output: 2, 3, 5, 7

// Test cases for reverseString
console.log("Calling reverseString with argument 'hello'");
console.assert(reverseString("hello") === "olleh", "Test Case 1 Failed");
console.log("Calling reverseString with argument 'world'");
console.assert(reverseString("world") === "dlrow", "Test Case 2 Failed");

// Test cases for RemoveWhitespaceFromString
console.log("Calling RemoveWhitespaceFromString with argument 'hello world'");
console.assert(
  RemoveWhitespaceFromString("hello world") === "helloworld",
  "Test Case 1 Failed"
);
console.log("Calling RemoveWhitespaceFromString with argument ' a b c '");
console.assert(
  RemoveWhitespaceFromString(" a b c ") === "abc",
  "Test Case 2 Failed"
);

// Test cases for checkPalindromeString
console.log("Calling checkPalindromeString with argument 'madam'");
console.assert(checkPalindromeString("madam") === true, "Test Case 1 Failed");
console.log("Calling checkPalindromeString with argument 'hello'");
console.assert(checkPalindromeString("hello") === false, "Test Case 2 Failed");

// Test cases for findLongestPalindromicSubstring
console.log("Calling findLongestPalindromicSubstring with argument 'babad'");
console.assert(
  findLongestPalindromicSubstring("babad") === "bab" ||
    findLongestPalindromicSubstring("babad") === "aba",
  "Test Case 1 Failed"
);
console.log("Calling findLongestPalindromicSubstring with argument 'cbbd'");
console.assert(
  findLongestPalindromicSubstring("cbbd") === "bb",
  "Test Case 2 Failed"
);

// Test cases for bubbleSort
console.log("Calling bubbleSort with argument [5, 3, 8, 4, 2]");
console.assert(
  JSON.stringify(bubbleSort([5, 3, 8, 4, 2])) ===
    JSON.stringify([2, 3, 4, 5, 8]),
  "Test Case 1 Failed"
);

// Test cases for calculateAndPrintFactorial
console.log("Calling calculateAndPrintFactorial with argument 5");
calculateAndPrintFactorial(5); // Expected output: 120

// Test cases for calculateAndPrintSumOfDigits
console.log("Calling calculateAndPrintSumOfDigits with argument 123");
calculateAndPrintSumOfDigits(123); // Expected output: 6

// Test cases for printFirstnFibonacciNumbers
console.log("Calling printFirstnFibonacciNumbers with argument 5");
printFirstnFibonacciNumbers(5); // Expected output: 0, 1, 1, 2, 3, 5

// Test cases for countVowelsInString
console.log("Calling countVowelsInString with argument 'hello'");
countVowelsInString("hello"); // Expected output: 2

// Test cases for countCharOccurrences
console.log("Calling countCharOccurrences with argument 'hello' and 'l'");
countCharOccurrences("hello", "l"); // Expected output: 2

// Test cases for findMostFrequentChars
console.log("Calling findMostFrequentChars with argument 'hello'");
console.assert(
  JSON.stringify(findMostFrequentChars("hello")) === JSON.stringify(["l"]),
  "Test Case 1 Failed"
);

// Test cases for findLongestIncreasingAndDecreasingSubsequence
console.log(
  "Calling findLongestIncreasingAndDecreasingSubsequence with argument 'abcde'"
);
console.assert(
  JSON.stringify(findLongestIncreasingAndDecreasingSubsequence("abcde")) ===
    JSON.stringify({ maxIncreasingSub: "abcde", maxDecreasingSub: "a" }),
  "Test Case 1 Failed"
);

// Test cases for sortString
console.log("Calling sortString with argument 'hello'");
console.assert(sortString("hello") === "ehllo", "Test Case 1 Failed");

// Test cases for findGreatestCommonDivisor
console.log("Calling findGreatestCommonDivisor with argument 54 and 24");
console.assert(findGreatestCommonDivisor(54, 24) === 6, "Test Case 1 Failed");

// Test cases for findLeastCommonMultiple
console.log("Calling findLeastCommonMultiple with argument 4 and 5");
console.assert(findLeastCommonMultiple(4, 5) === 20, "Test Case 1 Failed");

// Test cases for findMaxIndex
console.log("Calling findMaxIndex with argument [1, 2, 3, 4, 5]");
console.assert(findMaxIndex([1, 2, 3, 4, 5]) === 4, "Test Case 1 Failed");

// Test cases for findMinIndex
console.log("Calling findMinIndex with argument [1, 2, 3, 4, 5]");
console.assert(findMinIndex([1, 2, 3, 4, 5]) === 0, "Test Case 1 Failed");

// Test cases for findSum
console.log("Calling findSum with argument [1, 2, 3, 4, 5]");
console.assert(findSum([1, 2, 3, 4, 5]) === 15, "Test Case 1 Failed");

// Test cases for findMaxIn2DArray
console.log("Calling findMaxIn2DArray with argument [[1, 2], [3, 4]]");
console.assert(
  findMaxIn2DArray([
    [1, 2],
    [3, 4],
  ]) === 4,
  "Test Case 1 Failed"
);

// Test cases for findMinIn2DArray
console.log("Calling findMinIn2DArray with argument [[1, 2], [3, 4]]");
console.assert(
  findMinIn2DArray([
    [1, 2],
    [3, 4],
  ]) === 1,
  "Test Case 1 Failed"
);

// Test cases for sumRowOrColumn
console.log("Calling sumRowOrColumn with argument [[1, 2], [3, 4]], 0, true");
console.assert(
  sumRowOrColumn(
    [
      [1, 2],
      [3, 4],
    ],
    0,
    true
  ) === 3,
  "Test Case 1 Failed"
); // Sum of first row
console.log("Calling sumRowOrColumn with argument [[1, 2], [3, 4]], 0, false");
console.assert(
  sumRowOrColumn(
    [
      [1, 2],
      [3, 4],
    ],
    0,
    false
  ) === 4,
  "Test Case 2 Failed"
); // Sum of first column

// Test cases for findPrimesIn2DArray
console.log("Calling findPrimesIn2DArray with argument [[1, 2], [3, 4]]");
findPrimesIn2DArray([
  [1, 2],
  [3, 4],
]); // Expected output: 2, 3
