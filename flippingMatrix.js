/**
 * Finds the maximum sum of the elements in the submatrix located in the upper-left quadrant of the matrix.
 *
 * @param {number[][]} matrix - Input 2d array.
 * @returns {number} - Array median number.
 *
 *
 * Sample Input:
 * [
 *   [112, 42, 83, 119],
 *   [56, 125, 56, 49],
 *   [15, 78, 101, 43],
 *   [62, 98, 114, 108],
 * ]
 *
 * Sample Output: 414
 */

const flippingMatrix = (matrix) => {
	const n = matrix.length / 2;
	let max = 0;

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			max += Math.max(
				matrix[i][j],
				matrix[i][2 * n - 1 - j],
				matrix[2 * n - 1 - i][j],
				matrix[2 * n - 1 - i][2 * n - 1 - j]
			);
		}
	}
	return max;
};

/**
 * Runner Code
 */
const res = flippingMatrix([
	[112, 42, 83, 119],
	[56, 125, 56, 49],
	[15, 78, 101, 43],
	[62, 98, 114, 108],
]);
console.log("Result: ", res);
