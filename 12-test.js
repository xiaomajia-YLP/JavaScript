/**
 * 节流
 * @param {Function} callback 回调方法 业务逻辑写在里面
 * @param {Number} wait 延长时间
 * @param {Json} options {leading: true} 开始函数调用
 *                       {trailing: true} 结尾函数调用
 *                        两者只能传其一
 * @return {Function}  返回调用函数
 */
static throttleStrong(callback, wait, options) {
  let currTime, timer, later, context, args
  // 之前的时间戳
  let preTimeStamp = 0
  let leading = options.leading
  let trailing = options.trailing
  later = function () {
    callback.apply(context, args)
  }
  return function () {
    context = this
    args = arguments
    const now = +new Date()
    // 首次进入preTimeStamp = 0 结尾函数调用
    if (!preTimeStamp && trailing) {
      preTimeStamp = now
    }
    let remain = wait - (now - preTimeStamp) // 得到剩余时间
    // remain <= 0 调用  remain > wait 防止用户调时间
    if (remain <= 0 || remain > wait) {
      later()
      preTimeStamp = now
    }
  }
}