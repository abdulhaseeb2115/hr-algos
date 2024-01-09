/**
 * Converts a time from 12-hour AM/PM format to military (24-hour) time.
 *
 * @param {String} time - Input time in the format "hh:mm:ssAM/PM".
 * @returns {String} - Time in 24-hour format ("hh:mm:ss").
 *
 *
 * Sample Input: 07:05:45PM
 * Sample Output: 19:05:45
 */

const convertTime = (time) => {
	let [hour, minute, secondsAndPeriod] = time.split(":");
	hour = parseInt(hour, 10);

	const isPeriod = (val) => secondsAndPeriod.includes(val);
	const is12 = hour === 12;

	const second = secondsAndPeriod.slice(0, 2);

	if (isPeriod("PM") && !is12) {
		hour += 12;
	} else if (isPeriod("AM") && is12) {
		hour = 0;
	}

	const getPaddedValue = (val) => String(val).padStart(2, "0");
	return `${getPaddedValue(hour)}:${getPaddedValue(minute)}:${getPaddedValue(
		second
	)}`;
};
