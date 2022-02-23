/**
 * This is a function.
 *
 * @param {number[]} nums1 - An array of numbers
 * @param {number[]} nums2 - An array of numbers
 * @return {number} A number
 */

/*
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)). 

+ Example 1:
* Input: nums1 = [1,3], nums2 = [2]
* Output: 2.00000
* Explanation: merged array = [1,2,3] and median is 2.

+ Example 2:
* Input: nums1 = [1,2], nums2 = [3,4]
* Output: 2.50000
* Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 
+ Constraints:
* nums1.length == m
* nums2.length == n
* 0 <= m <= 1000
* 0 <= n <= 1000
* 1 <= m + n <= 2000
* -106 <= nums1[i], nums2[i] <= 106
*/

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let wholeArray = [...nums1, ...nums2].sort((a, b) => (a > b ? 1 : -1));

    let singleNumber = wholeArray.length % 2, // if 1, array is of odd length which has just one median. if 0, array is of eveb length which has two numbers as median
        middlePosition = Math.ceil(wholeArray.length / 2) - 1,
        middleNumber = wholeArray[middlePosition];

    if (!singleNumber) {
        middleNumber = (middleNumber + wholeArray[middlePosition + 1]) / 2;
    }

    return middleNumber;
}

findMedianSortedArrays([1, 3], [2]);
findMedianSortedArrays([1, 2], [3, 4]);
