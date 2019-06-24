function debounce(fn, delay) {
    let timerId = null;
    return function (args) {
        let that = this;
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            fn.call(that, args)
        }, delay);
    }
}

let debounceAjax = debounce(ajax, 500)