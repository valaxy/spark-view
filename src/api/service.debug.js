define(function (require, exports) {

	var BASE_URL = '/spark-view/mock/'

	exports.call = function (name, data) {
		return $.get(BASE_URL + name + '.json', data)
	}

})
