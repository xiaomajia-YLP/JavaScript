function getSort(array, callback) {
    var flag = true;
    for (let count = 0; count < array.length; count++) {
        for (let index = 0; index <
            array.length; index++) {
            if (callback(array[index], array[index + 1]) > 0) {
                [array[index], array[index + 1]] = [array[index + 1], array[index]];
                flag = false;
            };
        }
        if (flag) {
            break;
        }
    }
}

// var callback = function (a, b) {
//     return a - b; // 或者b-a 
// }