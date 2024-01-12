/**
 * Two children, Lily and Ron, want to share a chocolate bar.
 * Each of the squares has an integer on it.
 * Lily decides to share a contiguous segment of the bar selected such that:
 *  - The length of the segment matches Ron's birth month, and,
 *  - The sum of the integers on the squares is equal to his birth day.
 * Determine how many ways she can divide the chocolate.
 *
 *
 * @param {number[]} s - The numbers on each of the squares of chocolate
 * @param {number} d - Birth day
 * @param {number} m - Birth Month
 * @returns {number}
 *
 *
 * Sample Input:
 * s = [2,2,1,3,2]
 * d = 4
 * m = 2
 *
 * Sample Output: 2 ([2,2],[1,3])
 */

const getDivisionPossibilities = (s, d, m) => {
	let count = 0;

	for (let i = 0; i <= s.length - m; i++) {
		let sum = 0;
		for (let j = i; j < i + m; j++) {
			sum += s[j];
		}
		if (sum === d) {
			count++;
		}
	}

	return count;
};

/**
 * Runner Code
 */
const res = getDivisionPossibilities([2, 2, 1, 3, 2], 4, 2);
console.log("Result: ", res);
