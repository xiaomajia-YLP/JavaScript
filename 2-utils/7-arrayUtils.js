exports.arrayUtils = {
	// 在最后插入元素
	append(array, ...elements) {
		array.push(...elements)
		return array
	},
	// 在首位插入元素
	prepend(array, ...elements) {
		array.unshift(...elements)
		return array
	},
	// 在中间插入元素
	insert(array, index, ...elements) {
		array.splice(index, 0, ...elements)
		return array
	}
}