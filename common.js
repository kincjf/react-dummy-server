exports.objectToArray = (stats) => {
	return Object.keys(stats).map(key => ({
		key: key, value: stats[key]
	}));
}
