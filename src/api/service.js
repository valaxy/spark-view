define(function (require, exports) {

	var BASE_URL = 'xxx'

	exports.call = function (name, data) {
		return $.get(BASE_URL + name, data)
	}

})