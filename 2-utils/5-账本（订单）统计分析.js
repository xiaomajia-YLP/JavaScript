const _ = require('lodash');
const moment = require('moment');

// 门店订单分组整合
let transactions = [{
        timestamp: 1519864292535,
        category: '餐饮',
        price: 6.00
    },
    {
        timestamp: 1519874872261,
        category: '餐饮',
        price: 12.00
    },
    {
        timestamp: 1519899849526,
        category: '餐饮',
        price: 52.50
    },
    {
        timestamp: 1519953249020,
        category: '餐饮',
        price: 4.50
    },
    {
        timestamp: 1519963102270,
        category: '餐饮',
        price: 13.50
    },
    {
        timestamp: 1519999849526,
        category: '餐饮',
        price: 104.25
    }, {
        timestamp: 1526874872261,
        category: '餐饮',
        price: 12.00
    }, {
        timestamp: 1527899849526,
        category: '餐饮',
        price: 52.50
    }, {
        timestamp: 1526553249020,
        category: '餐饮',
        price: 4.50
    }, {
        timestamp: 1522763102270,
        category: '餐饮',
        price: 13.50
    }, {
        timestamp: 1422229849526,
        category: '餐饮',
        price: 104.25
    }, {
        timestamp: 1431774872261,
        category: '餐饮',
        price: 12.00
    }, {
        timestamp: 1526699849526,
        category: '餐饮',
        price: 52.50
    }, {
        timestamp: 1501553249020,
        category: '餐饮',
        price: 4.50
    }, {
        timestamp: 1544563102270,
        category: '餐饮',
        price: 13.50
    }, {
        timestamp: 1529999849526,
        category: '餐饮',
        price: 104.25
    }, {
        timestamp: 1554374872261,
        category: '餐饮',
        price: 12.00
    }, {
        timestamp: 1566699849526,
        category: '餐饮',
        price: 52.50
    }, {
        timestamp: 1549953249020,
        category: '餐饮',
        price: 4.50
    }, {
        timestamp: 1529963102270,
        category: '餐饮',
        price: 13.50
    }, {
        timestamp: 1510999849526,
        category: '餐饮',
        price: 104.25
    }, {
        timestamp: 1527987472261,
        category: '餐饮',
        price: 12.00
    }, {
        timestamp: 1511899849526,
        category: '餐饮',
        price: 52.50
    }, {
        timestamp: 1541953249020,
        category: '餐饮',
        price: 4.50
    }, {
        timestamp: 1530963102270,
        category: '餐饮',
        price: 13.50
    }, {
        timestamp: 1561999849526,
        category: '餐饮',
        price: 104.25
    }
]

/**
 * 将订单按一定的时间区间分组（按日分组、按周分组、按月分组、按年分组）
 * xiaomajia 2018.11.27
 * @param {*} timeSeriesArray 总的订单数组
 */
function createTimeSeries(timeSeriesArray) {
    const caches = {}
    const timeSeriesObj = {
        // properties...
        array: timeSeriesArray.map(data => {
            data.timestamp = new Date(data.timestamp)
            return data
        }),
        // functions..
        groupByFormat(formatPattern) {
            if (caches[formatPattern]) {
                return caches[formatPattern]
            }
            const result = _.groupBy(timeSeriesObj.array, data => {
                return moment(data.timestamp).format(formatPattern)
            })
            caches[formatPattern] = result
            return result
        },
        // 按天分组
        groupByDate() {
            const groupedResult = {
                map: timeSeriesObj.groupByFormat('YYYY-MM-DD'),
                dates() {
                    return _.keys(groupedResult.map)
                },
                sum(date) {
                    return _.sumBy(groupedResult.map[date], 'price')
                }
            }
            return groupedResult;
        },
        // 按周分组
        groupByWeek() {
            const groupedByDate = timeSeriesObj.groupByDate()
            const groupedResult = {
                map: _.groupBy(groupedByDate.dates(), function (date) {
                    return moment(date).format('YYYY-WW')
                }),
                weeks() {
                    return _.keys(groupedResult.map)
                },
                sum(week) {
                    const dates = groupedResult.map[week]
                    return _.sumBy(dates, function (date) {
                        return groupedByDate.sum(date)
                    })
                },
                average(week) {
                    const dates = groupedResult.map[week]
                    const sum = groupedResult.sum(week)
                    return sum / dates.length
                }
            }
            return groupedResult
        },
        // 按月分组
        groupByMonth() {
            return timeSeriesObj.groupByFormat('YYYY-MM')
        },
        // 按年分组
        groupByYear() {
            return timeSeriesObj.groupByFormat('YYYY')
        },
        dates() {
            return timeSeriesObj.groupByDate().dates()
        },

        weeks() {
            return timeSeriesObj.groupByWeek().weeks()
        },

        months() {
            return timeSeriesObj.groupByMonth().months()
        },

        years() {
            return timeSeriesObj.groupByYear().years()
        },

        sum(unit, point) {
            switch (unit) {
                case 'date':
                    return timeSeriesObj.groupByDate().sum(point)

                case 'week':
                    return timeSeriesObj.groupByWeek().sum(point)

                case 'month':
                    return timeSeriesObj.groupByMonth().sum(point)

                case 'year':
                    return timeSeriesObj.groupByYear().sum(point)
            }
        },

        average(unit, point) {
            switch (unit) {
                case 'week':
                    return timeSeriesObj.groupByWeek().average(point)

                case 'month':
                    return timeSeriesObj.groupByMonth().average(point)

                case 'year':
                    return timeSeriesObj.groupByYear().average(point)
            }
        }
    }
    return timeSeriesObj;
}

const timeSeries = createTimeSeries(transactions)
let date = timeSeries.groupByDate().dates()[0];
let sum = timeSeries.groupByDate().sum(date);
console.log(sum);