// 方法一
var u = navigator.userAgent
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 //android终端
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) //ios终端
alert('是否是Android：' + isAndroid)
alert('是否是iOS：' + isiOS)

// 方法二：判断iPhone | iPad | iPod | iOS | Android客户端
if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) { //判断iPhone|iPad|iPod|iOS
	// console.log(navigator.userAgent);  
	window.location.href = 'iPhone.html'
} else if (/(Android)/i.test(navigator.userAgent)) { //判断Android
	// console.log(navigator.userAgent); 
	window.location.href = 'Android.html'
} else {
	// pc
	window.location.href = 'pc.html'
}

// 方法三：判断pc还是移动端
// 1. 判断是否手机端访问
var userAgentInfo = navigator.userAgent.toLowerCase()
var Agents = ['android', 'iphone',
	'symbianos', 'windows phone',
	'ipad', 'ipod'
]
// 2. 返回导航到当前网页的超链接所在网页的URL
var ly = document.referrer
// 3. 执行判断，导向wap网址
for (var v = 0; v < Agents.length; v++) {
	if (userAgentInfo.indexOf(Agents[v]) >= 0 && (ly == '' || ly == null)) {
		this.location.href = 'http://m.***.com' //wap端地址
	}
}