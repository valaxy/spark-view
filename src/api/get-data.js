define(function (require, exports) {

	// 使用websocket协议获取数据
	var ws // websocket对象


	_.extend(exports, Backbone.Events)


	/**
	 * 建立获取数据的连接
	 */
	exports.init = function () {
		ws = new WebSocket('ws://127.0.0.1:9876/api/getData')
		ws.onmessage = function (res) {
			exports.trigger('get-data', res)
		}
	}

	/**
	 * 获取到该时间上的数据
	 * @param time 秒表示的时间点
	 */
	exports.getLatest = function (time) {
		ws.send(time)
	}

})

