module.exports = function () {
	let counter = 0;
	return function () {
		counter += 1;
		return counter;
	};
};