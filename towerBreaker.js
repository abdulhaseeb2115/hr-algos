/**
 * Two players are playing a game of Tower Breakers! Player 1 always moves first, and both players always play optimally.
 * The rules of the game are as follows:
 * Initially there are n towers.
 * Each tower is of height m.
 * The players move in alternating turns.
 * In each turn, a player can choose a tower of height x and reduce its height to y, where 1 <= y < x and y evenly divides x.
 * If the current player is unable to make a move, they lose the game.
 *
 *
 *
 * @param {number} n - Number of towers.
 * @param {number} p - Height of towers.
 * @returns {number} - Winner.
 *
 *
 * Sample Input: (2, 2)
 * Sample Output: 2
 */

const towerBreakers = (n, m) => {
	return m <= 1 || n % 2 === 0 ? 2 : 1;
};

/**
 * Runner Code
 */
const res = towerBreakers(2, 2);
console.log("Result: ", res);
