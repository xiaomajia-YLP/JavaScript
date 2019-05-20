// 创建三个常量用于表示状态
const PENDING = 'pending';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';

function MyPromise(fn) {
    const _this = this;

    _this.state = PENDING; // 初始状态为 pending
    _this.value = null; //value 变量用于保存 resolve 或者 reject 中传入的值
    _this.resolvedCallbacks = []; //用于保存 then 中的回调
    _this.rejectedCallbacks = []; //用于保存 then 中的回调

    // resolve函数和reject函数
    function resolve(value) {
        if (_this.state === PENDING) {
            _this.state = RESOLVED;
            _this.value = value;
            _this.resolvedCallbacks.map(cb => cb(_this.value))
        }
    }

    function reject(value) {
        if (_this.state === PENDING) {
            _this.state = REJECTED;
            _this.value = value;
            _this.rejectedCallbacks.map(cb => cb(_this.value))
        }
    }
    // fn函数
    try {
        fn(resolve, reject)
    } catch (e) {
        reject(e)
    }
}

MyPromise.prototype.then = function (onFulfilled, onRejected) {
    const _this = this;
    // 判断两个参数是否为函数类型
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v;
    onRejected = typeof onRejected === 'function' ? onRejected : r => { throw r }

    if (_this.state === PENDING) {
        _this.resolvedCallbacks.push(onFulfilled);
        _this.rejectedCallbacks.push(onRejected);
    }

    if (_this.state === RESOLVED) {
        onFulfilled(_this.value);
    }

    if (_this.state === REJECTED) {
        onRejected(_this.value);
    }
}