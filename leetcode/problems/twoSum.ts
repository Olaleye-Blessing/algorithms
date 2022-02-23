/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

+ Example 1:
* Input: nums = [2,7,11,15], target = 9
* Output: [0,1]
* Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

+ Example 2:
* Input: nums = [3,2,4], target = 6
* Output: [1,2]

+ Example 3:
* Input: nums = [3,3], target = 6
* Output: [0,1]

+ Constraints:
 * 2 <= nums.length <= 104
 * -109 <= nums[i] <= 109
 * -109 <= target <= 109
* Only one valid answer exists.
*/

function twoSum(nums: number[], target: number): number[] {
    // store index here
    let indices: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        if (indices.length === 2) {
            break;
        }

        for (let j = 0; j < nums.length; j++) {
            //
            if (i === j) continue;

            if (nums[i] + nums[j] === target) {
                indices = [i, j];
                break;
            }
        }
    }

    return indices;
}

console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([3, 2, 4], 6));
// console.log(twoSum([3, 2, 3], 6));
