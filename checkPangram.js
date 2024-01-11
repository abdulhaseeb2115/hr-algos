/**
 * Given a list of integers, count and return the number of times each value appears as an array of integers.
 *
 *
 * @param {string} s
 * @returns {string "pangram" | "not pangram"}
 *
 *
 * Sample Input: We promptly judged antique ivory buckles for the next prize
 * Sample Output: pangram
 */

const checkPangrams = (s) => {
	let str = s.toLowerCase();
	let uniqueChars = new Set();
	for (let i = 0; i < str.length; i++) {
		let char = str[i];
		let charCode = char.charCodeAt(0);
		if (charCode >= 97 && charCode <= 122) {
			uniqueChars.add(str[i]);
		}
		if (uniqueChars.size === 26) {
			break;
		}
	}

	return uniqueChars.size === 26 ? "pangram" : "not pangram";
};

// test
const ans = checkPangrams(
	"We promptly judged antique ivory buckles for the next prize"
);
console.log(ans);
