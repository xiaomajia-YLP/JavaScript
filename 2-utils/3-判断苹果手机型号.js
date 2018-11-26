var events = navigator.userAgent;
console.log(navigator.userAgent);
console.log(navigator.appVersion);
console.log(navigator)
if (events.indexOf('Android') > -1 || events.indexOf('Linux') > -1 || events.indexOf('Adr') > -1) {
    console.log("安卓手机");
} else if (events.indexOf('iPhone') > -1) {
    //根据尺寸进行判断 苹果的型号 -- 尚未与时俱进==
    if (screen.height == 812 && screen.width == 375) {
        console.log("苹果X");
    } else if (screen.height == 736 && screen.width == 414) {
        console.log("iPhone7P - iPhone8P - iPhone6");
    } else if (screen.height == 667 && screen.width == 375) {
        console.log("iPhone7 - iPhone8 - iPhone6");
    } else if (screen.height == 568 && screen.width == 320) {
        console.log("iPhone5");
    } else {
        console.log("iPhone4");
    }
} else if (events.indexOf('Windows Phone') > -1) {
    console.log("诺基亚手机");

} else if (events.indexOf("iPad") > -1) {
    console.log("平板");
}