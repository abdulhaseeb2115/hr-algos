/**
 * You will be given a list of integers, 'arr' , and a single integer 'k'.
 * You must create an array of length 'k' from elements of 'arr' such that its unfairness is minimized. Call that array 'arr`'.
 * Unfairness of an array is calculated as
 * max(arr`) - min(arr`)
 *
 * Where:
 * - max denotes the largest integer in
 * - min denotes the smallest integer in
 *
 *
 * @param {number} k - The number of elements to select.
 * @param {number[]} arr - Array of integers.
 * @returns {number} - The minimum possible unfairness.
 *
 *
 * Sample Input: (2, [1, 4, 7, 2])
 * Sample Output: 1
 */

const maxMin = (k, arr) => {
	arr = arr.sort((a, b) => a - b);
	let min = Number.POSITIVE_INFINITY;
	for (let i = 0; i <= Math.floor((arr.length - k) / 2); i++) {
		let diff = arr[i + k - 1] - arr[i];
		if (diff < min) {
			min = diff;
		}

		if (i < arr.length - i - k) {
			let revDiff = arr[arr.length - i - 1] - arr[arr.length - i - k];
			if (revDiff < min) {
				min = revDiff;
			}
		}
	}
	return min;
};

/**
 * Runner Code
 */
const res = maxMin(2, [1, 4, 7, 2]);
console.log("Result: ", res);
