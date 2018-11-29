/**
 * 定义字符串的真实长度（1汉字=2字节）
 * @param {*} str
 */
export const realLength = str => {
	return str.replace(/[^\x00-\xff]/g, '**').length
}
/**
 * 定义一段英文文章的单词量/字数（待完善）
 * @param {*} str 
 */
export const wordCount = str => {
	return str.match(/\w+/g).length
}
