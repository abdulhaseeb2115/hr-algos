/**
 * Given a list of integers, count and return the number of times each value appears as an array of integers.
 *
 *
 * @param {number[]} arr
 * @returns {number[]}
 *
 *
 * Sample Input: [1,3,0,2,1]
 * Sample Output: [1,2,1,1]
 */

const getCountingSort = (arr) => {
	let result = Array(100).fill(0);
	for (let i = 0; i < arr.length; i++) {
		result[arr[i]] += 1;
	}
	return result;
};
