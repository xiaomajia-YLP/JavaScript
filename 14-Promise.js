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
        // 判断传入的值是否为 Promise 类型
        if (value instanceof MyPromise) {
            value.then(resolve, reject)
        }
        // 为了保证函数执行顺序,将两个函数体代码使用 setTimeout 包裹起来
        setTimeout(() => {
            if (_this.state === PENDING) {
                _this.state = RESOLVED;
                _this.value = value;
                _this.resolvedCallbacks.map(cb => cb(_this.value))
            }
        }, 0);
    }

    function reject(value) {
        if (value instanceof MyPromise) {
            value.then(resolve, reject);
        }
        setTimeout(() => {
            if (_this.state === PENDING) {
                _this.state = REJECTED;
                _this.value = value;
                _this.rejectedCallbacks.map(cb => cb(_this.value))
            }
        }, 0);
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
    onRejected = typeof onRejected === 'function' ? onRejected : r => {
        throw r
    }

    // 实现兼容多种 Promise 的 resolutionProcedure 函数
    function resolutionProcedure(promise2, x, resolve, reject) {
        // 规范规定了 x 不能与 promise2 相等，这样会发生循环引用的问题
        if (promise2 === x) {
            return reject(new TypeError('Error'))
        }

        // 需要判断 x 的类型
        // 如果 x 为 Promise 的话
        if (x instanceof MyPromise) {
            // 1. 如果 x 处于等待态，Promise 需保持为等待态直至 x 被执行或拒绝
            // 2. 如果 x 处于其他状态， 则用相同的值处理 Promise
            x.then(function (value) {
                resolutionProcedure(promise2, value, resolve, reject)
            }, reject)
        }
    }

    if (_this.state === PENDING) {
        // --- 优化前 ---
        // _this.resolvedCallbacks.push(onFulfilled);
        // _this.rejectedCallbacks.push(onRejected);

        // --- 优化后 ---
        //  返回一个新的 Promise 对象，并在 Promise 中传入了一个函数
        return (promise2 = new MyPromise((resolve, reject) => {
            _this.resolvedCallbacks.push(() => {
                // 在执行函数的过程中可能会遇到错误，所以使用了 try...catch 包裹                                                                                    
                try {
                    const x = onFulfilled(that.value);
                    resolutionProcedure(promise2, x, resolve, reject);
                } catch (error) {
                    reject(error)
                }
            })
            _this.rejectedCallbacks.push(() => {
                try {
                    const x = onFulfilled(_this.value);
                    resolutionProcedure(promise2, x, resolve, reject);
                } catch (error) {
                    reject(error)
                }
            })
        }))

    }

    if (_this.state === RESOLVED) {
        // --- before ---
        // onFulfilled(_this.value);

        // --- after ---
        return (promise2 = new MyPromise((resolve, reject) => {
            // 传入的函数的函数体需要异步执行，这是规范规定的
            setTimeout(() => {
                try {
                    const x = onFulfilled(_this.value);
                    resolutionProcedure(promise2, x, resolve, reject);
                } catch (error) {
                    reject(error);
                }
            }, 0);
        }))
}

if (_this.state === REJECTED) {
    // --- before ---
    // onRejected(_this.value);

    // --- after ---
    return (promise2 = new MyPromise((resolve, reject)=>{
        setTimeout(() => {
            try {
                const x = onRejected(_this.value);
                resolutionProcedure(promise2, x, resolve, reject);
            } catch (error) {
                reject(error);
            }
        }, 0);
    }))
}
}