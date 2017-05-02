module.exports = (function () {
	let counter = 8;
	return function () {
		counter += 1;
		return counter;
	};
}());