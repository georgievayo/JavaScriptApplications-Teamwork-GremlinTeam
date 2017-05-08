module.exports = (function () {
	let counter = 18;
	return function () {
		counter += 1;
		return counter;
	};
}());