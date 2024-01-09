/**
 * Given an array of integers, where all elements but one occur twice, find the unique element.
 *
 * @param {number[]} integerArr
 * @returns {number}
 *
 *
 * Sample Input: [1, 2, 3, 4, 5, 4, 3, 2, 1]
 * Sample Output: 5
 */

const getLonelyInteger = (integerArr) => {
	let result = 0;
	for (let i = 0; i < integerArr.length; i++) {
		result ^= integerArr[i];
	}
	return result;
};
