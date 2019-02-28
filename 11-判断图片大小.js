/**
 *文件大小
 * @param fileData
 * @param Max_Size
 * @returns {boolean}
 */
function testMaxSize(fileData, Max_Size) {
	var isAllow = false
	var size = fileData.size
	isAllow = size <= Max_Size
	if (!isAllow) {
		alert('图片大小超过限制！')
	}
	return isAllow
}