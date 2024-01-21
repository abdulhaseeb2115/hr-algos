/**
 * Julius Caesar protected his confidential information by encrypting it using a cipher.Caesar's cipher shifts each letter by
 * a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet.
 * In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.
 *
 *
 *
 * @param {string} s - Input string.
 * @param {number} k - Shift number.
 * @returns {string} - Updated string.
 *
 *
 * Sample Input: (abcz, 1)
 * Sample Output: bcda
 */

const caesarCipher = (s, k) => {
	const shift = k % 26;
	const result = s
		.split("")
		.map((char) => {
			const code = char.charCodeAt(0);

			if (code >= 97 && code <= 122) {
				return String.fromCharCode(((code - 97 + shift) % 26) + 97);
			} else if (code >= 65 && code <= 90) {
				return String.fromCharCode(((code - 65 + shift) % 26) + 65);
			} else {
				return char;
			}
		})
		.join("");

	return result;
};

/**
 * Runner Code
 */
const res = caesarCipher("abcz", 1);
console.log("Result: ", res);
