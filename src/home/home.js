define(function (require, exports) {

	var getData = require('../api/get-data')

	exports.init = function () {
		var smoothie = new SmoothieChart()
		smoothie.streamTo($('.view')[0])

		// Data
		var line1 = new TimeSeries()

		// 初始化getData
		getData.on('get-data', function (eve) {
			var time = new Date().getTime()
			var json = JSON.parse(eve.data)
			line1.append(time, json.data + Math.random() * 5)
		})
		getData.init()


		// Add a random value to each line every second
		setInterval(function () {
			var time = new Date().getTime()
			getData.getLatest(time)
		}, 2000)

		// Add to SmoothieChart
		smoothie.addTimeSeries(line1)
	}
})