/**
 * 定义字符串的真实长度（1汉字=2字节）
 * @param {*} str
 */
export const realLength = str => {
    return str.replace(/[^\x00-\xff]/g, '**').length
}