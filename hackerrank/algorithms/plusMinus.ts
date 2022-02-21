/*
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

! Note:
This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

+ Example
arr = [1, 1, 0, -1, -1]

There are n = 5 elements, two positive, two negative and one zero. Their ratios are 2/5 = 0.40000, 2/5 = 0.40000 and 1/5 = 0.20000. Results are printed as:
0.40000
0.40000
0.20000

+ Function Description
Complete the plusMinus function in the editor below.

plusMinus has the following parameter(s):
- int arr[n]: an array of integers

+ Print
Print the ratios of positive, negative and zero values in the array. Each value should be printed on a separate line with  digits after the decimal. The function should not return a value.

+ Input Format

The first line contains an integer, , the size of the array.
The second line contains  space-separated integers that describe .

+ Constraints
0 < n <= 100
-100 <= arr[i] <= 100

+ Output Format
Print the following 3 lines, each to  decimals:
 - proportion of positive values
 - proportion of negative values
 - proportion of zeros
*/

const plusMinus = (arr: number[]): void => {
    // Write your code here
    let arrLength = arr.length,
        positive = 0,
        negative = 0,
        zero = 0;

    for (let i = 0; i < arrLength; i++) {
        arr[i] < 0
            ? (negative += 1)
            : arr[i] > 0
            ? (positive += 1)
            : (zero += 1);
    }

    const to6Decimal = (num: number) => num.toFixed(6) as unknown as number;

    positive = to6Decimal(positive / arrLength);
    negative = to6Decimal(negative / arrLength);
    zero = to6Decimal(zero / arrLength);

    console.log(`${positive}\n${negative}\n${zero}`);
};

plusMinus([-4, 3, -9, 0, 4, 1]);
