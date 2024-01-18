/**
 * Finds the median from an unsorted array.
 *
 * @param {number[]} arr - Input unsorted array.
 * @returns {number} - Array median number.
 *
 *
 * Sample Input: [5,3,1,2,4]
 * Sample Output: 3
 */

const getMedianFromArray = (arr) => {
	const sortedArr = arr.sort((a, b) => a - b);
	const middleElementIndex = (arr.length + 1) / 2 - 1;
	return sortedArr[middleElementIndex];
};

/**
 * Runner Code
 */
const res = getMedianFromArray([5, 3, 1, 2, 4]);
console.log("Result: ", res);
