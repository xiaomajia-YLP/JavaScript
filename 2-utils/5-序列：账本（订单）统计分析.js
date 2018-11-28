const _ = require('lodash')
const moment = require('moment')

const arr = [{
	timestamp: 1519864292535,
	category: '餐饮',
	price: 6.00,
},
{
	timestamp: 1519874872261,
	category: '餐饮',
	price: 12.00,
},
{
	timestamp: 1519899849526,
	category: '餐饮',
	price: 52.50,
},
{
	timestamp: 1519953249020,
	category: '餐饮',
	price: 4.50,
},
{
	timestamp: 1519963102270,
	category: '餐饮',
	price: 13.50,
},
{
	timestamp: 1519999849526,
	category: '餐饮',
	price: 104.25,
}, {
	timestamp: 1526874872261,
	category: '餐饮',
	price: 12.00,
}, {
	timestamp: 1527899849526,
	category: '餐饮',
	price: 52.50,
}, {
	timestamp: 1526553249020,
	category: '餐饮',
	price: 4.50,
}, {
	timestamp: 1522763102270,
	category: '餐饮',
	price: 13.50,
}, {
	timestamp: 1422229849526,
	category: '餐饮',
	price: 104.25,
}, {
	timestamp: 1431774872261,
	category: '餐饮',
	price: 12.00,
}, {
	timestamp: 1526699849526,
	category: '餐饮',
	price: 52.50,
}, {
	timestamp: 1501553249020,
	category: '餐饮',
	price: 4.50,
}, {
	timestamp: 1544563102270,
	category: '餐饮',
	price: 13.50,
}, {
	timestamp: 1529999849526,
	category: '餐饮',
	price: 104.25,
}, {
	timestamp: 1554374872261,
	category: '餐饮',
	price: 12.00,
}, {
	timestamp: 1566699849526,
	category: '餐饮',
	price: 52.50,
}, {
	timestamp: 1549953249020,
	category: '餐饮',
	price: 4.50,
}, {
	timestamp: 1529963102270,
	category: '餐饮',
	price: 13.50,
}, {
	timestamp: 1510999849526,
	category: '餐饮',
	price: 104.25,
}, {
	timestamp: 1527987472261,
	category: '餐饮',
	price: 12.00,
}, {
	timestamp: 1511899849526,
	category: '餐饮',
	price: 52.50,
}, {
	timestamp: 1541953249020,
	category: '餐饮',
	price: 4.50,
}, {
	timestamp: 1530963102270,
	category: '餐饮',
	price: 13.50,
}, {
	timestamp: 1561999849526,
	category: '餐饮',
	price: 104.25,
}
]

const createTimeSeries = originalTimeArr => {
	const seriesObj = {
		arr: originalTimeArr.map(v => {
			v.timestamp = new Date(v.timestamp)
			return v
		}),
		groupByBase(pattern) {
			return _.groupBy(seriesObj.arr, v => {
				return moment(v.timestamp).format(pattern)
			})
		},
		// 按日分组
		groupByDate() {
			const result = {
				// 分组
				grouped: seriesObj.groupByBase('YYYY-MM-DD'),
				// 所有的日期数组
				dates() {
					return _.keys(result.grouped)
				},
				// 某一天的总收入
				sum(d) {
					let res = {
						date: d,
						count: result.grouped[d].length,
						money: _.sumBy(result.grouped[d], 'price')
					}
					return res
				},
				// 按日分组的订单统计列表
				allList() {
					return _.map(result.dates(), v => result.sum(v))
				}
			}
			return result
		},
		// 按周分组
		groupByWeek() {
			const result = {
				dateGrouped: seriesObj.groupByDate().dates(),
				grouped() {
					return _.groupBy(result.dateGrouped, v => moment(v).format('YYYY-WW'))
				},
				weeks() {
					return _.keys(result.grouped())
				},
				sum(d) {
					let days = result.grouped()[d].map(v => seriesObj.groupByDate().sum(v))
					let res = {
						date: d,
						count: _.sumBy(days, 'count'),
						money: _.sumBy(days, 'money')
					}
					return res
				},
				allList() {
					return _.map(result.weeks(), v => result.sum(v))
				}
			}
			return result
		},
		// 按月分组
		groupByMonth() {
			const result = {
				dateGrouped: seriesObj.groupByDate().dates(),
				grouped() {
					return _.groupBy(result.dateGrouped, v => moment(v).format('YYYY-MM'))
				},
				months() {
					return _.keys(result.grouped())
				},
				sum(d) {
					let days = result.grouped()[d].map(v => seriesObj.groupByDate().sum(v))
					let res = {
						date: d,
						count: _.sumBy(days, 'count'),
						money: _.sumBy(days, 'money')
					}
					return res
				},
				allList() {
					return _.map(result.months(), v => result.sum(v))
				}
			}
			return result
		},
		// 按年分组
		groupByYear() {
			const result = {
				monthGrouped: seriesObj.groupByMonth().months(),
				grouped() {
					return _.groupBy(result.monthGrouped, v => moment(v).format('YYYY'))
				},
				years() {
					return _.keys(result.grouped())
				},
				sum(d) {
					let days = result.grouped()[d].map(v => seriesObj.groupByMonth().sum(v))
					let res = {
						date: d,
						count: _.sumBy(days, 'count'),
						money: _.sumBy(days, 'money')
					}
					return res
				},
				allList() {
					return _.map(result.years(), v => result.sum(v))
				}
			}
			return result
		}
	}
	return seriesObj
}
let res = createTimeSeries(arr).groupByYear()
console.log(res.years()) // 所有订单存在的年份
console.log(res.sum(res.years()[0])) // 某一年的订单总计
console.log(res.allList()) // 按年分组列表
