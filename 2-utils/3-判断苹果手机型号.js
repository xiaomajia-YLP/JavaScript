var events = navigator.userAgent
alert(navigator.userAgent)
alert(navigator.appVersion)
alert(navigator)
if (events.indexOf('Android') > -1 || events.indexOf('Linux') > -1 || events.indexOf('Adr') > -1) {
	alert('安卓手机')
} else if (events.indexOf('iPhone') > -1) {
	//根据尺寸进行判断 苹果的型号 -- 尚未与时俱进==
	if (screen.height == 812 && screen.width == 375) {
		alert('苹果X')
	} else if (screen.height == 736 && screen.width == 414) {
		alert('iPhone7P - iPhone8P - iPhone6')
	} else if (screen.height == 667 && screen.width == 375) {
		alert('iPhone7 - iPhone8 - iPhone6')
	} else if (screen.height == 568 && screen.width == 320) {
		alert('iPhone5')
	} else {
		alert('iPhone4')
	}
} else if (events.indexOf('Windows Phone') > -1) {
	alert('诺基亚手机')

} else if (events.indexOf('iPad') > -1) {
	alert('平板')
}