/**
 * Given a square matrix, calculate the absolute difference between the sums of its diagonals.
 *
 * @param {number[][]} arr
 * @returns {number}
 *
 *
 * Sample Input: [ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ]
 * Sample Output: 15
 */

const getAbsDiagonalDifference = (arr) => {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i][i];
		sum -= arr[i][arr.length - 1 - i];
	}
	return Math.abs(sum);
};
