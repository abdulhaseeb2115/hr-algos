/**
 * There is a collection of input strings and a collection of query strings.
 * For each query string, determine how many times it occurs in the list of input strings.
 * Return an array of the results.
 *
 *
 * @param {String[]} strings
 * @param {String[]} queries
 * @returns {number[]}
 *
 *
 * Sample Input:
 * strings = ["aba", "baba", "aba", "xzxb"]
 * queries = ["aba", "xzxb", "ab"];
 * Sample Output:
 * [2, 1, 0]
 */

const getQueryStringsFrequency = (strings, queries) => {
	let stringsFrequencyMap = {};
	strings.forEach((str) => {
		stringsFrequencyMap[str] = (stringsFrequencyMap[str] || 0) + 1;
	});
	return queries.map((query) => stringsFrequencyMap[query] || 0);
};
