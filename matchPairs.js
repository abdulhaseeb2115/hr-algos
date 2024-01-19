/**
 * There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each
 * sock, determine how many pairs of socks with matching colors there are.
 *
 * @param {number[]} arr - Input array.
 * @returns {number} - No of pairs.
 *
 *
 * Sample Input: [10, 20, 20, 10, 10, 30, 50, 10, 20]
 * Sample Output: 3
 */

const getNoOfPairs = (arr) => {
	let pairs = new Set();
	let totalCount = 0;

	for (let i = 0; i < arr.length; i++) {
		const color = arr[i];
		if (pairs.has(color)) {
			totalCount++;
			pairs.delete(color);
		} else {
			pairs.add(color);
		}
	}

	return totalCount;
};

/**
 * Runner Code
 */
const res = getNoOfPairs([10, 20, 20, 10, 10, 30, 50, 10, 20]);
console.log("Result: ", res);
