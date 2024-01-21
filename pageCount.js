/**
 * A teacher asks the class to open their books to a page number. A student can either start turning pages from the front of
 * the book or from the back of the book. They always turn pages one at a time. When they open the book, page 1 is always on
 * the right side. When they flip page 1, they see pages 2 and 3. Each page except the last page will always be printed on
 * both sides. The last page may only be printed on the front, given the length of the book. If the book is n pages long, and
 * a student wants to turn to page p, what is the minimum number of pages to turn? They can start at the beginning or the end
 * of the book.
 *
 * Given  and , find and print the minimum number of pages that must be turned in order to arrive at page .
 *
 *
 * @param {number} n - Number of pages in the book.
 * @param {number} p - Page number.
 * @returns {number} - Number of pages to reach p.
 *
 *
 * Sample Input: (7, 3)
 * Sample Output: 2
 */

const pageCount = (n, p) => {
	const pagesFromStart = Math.floor(p / 2);
	const pagesFromEnd =
		p === n || (n % 2 !== 0 && p === n - 1)
			? 0
			: Math.max(Math.floor((n - p) / 2), 1);
	return Math.min(pagesFromEnd, pagesFromStart);
};

/**
 * Runner Code
 */
const res = pageCount(7, 3);
console.log("Result: ", res);
