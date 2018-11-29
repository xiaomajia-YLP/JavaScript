const arrayUtils = require('./7-arrayUtils')
/**
 * 定义一个树状结构中的节点
 * xiaomajia 2018.11.28
 * props: name, children, parent, siblings, depth, height, degree
 * func： addChild, toString, getDepthByRoot
 * @class Node
 */
class Node {
	constructor(name) {
		this.name = name
		this.children = []
		this.parent = null
	}
	// 新增子节点
	addChild(node) {
		node.parent = this
		this.children.push(node)
		return this
	}
	// 获取兄弟节点
	get siblings() {
		const self = this
		if (this.parent) {
			return this.parent.children.filter(v => v !== self)
		} else {
			return []
		}
	}
	// Degree 度:直接与它相连的子节点数
	get degree() {
		return this.children.length
	}
	// Depth 深度：从某一个节点到其所在的树形结构中的根节点所经过边的数目
	get depth() {
		let depth = 0
		let currNode = this
		while (currNode.parent !== null) {
			depth++
			currNode = currNode.parent
		}
		return depth
	}
	// 获取根节点的深度
	getDepthByRoot(root) {
		let depth = 0
		let currNode = this
		while (currNode.parent !== root) {
			depth++
			currNode = currNode.parent
		}
		return depth + 1
	}
	// Height 高度：以某一个节点为根所形成的树形结构（该树形结构可能是一棵更大的树形结构中的一部分,即子树）中,这个节点到最深的子节点中间经过的边的数目。
	// 广度优先搜索 FBS
	get height() {
		let queue = [this]
		let deepestNode = this
		while (queue.length > 0) {
			let len = queue.length
			for (let i = 0; i < len; ++i) {
				const currNode = queue.shift()
				deepestNode = currNode
				if (currNode.children.length > 0) {
					queue.push(...currNode.children)
				}
			}
		}
		return deepestNode.getDepthByRoot(this)
	}
	// 字符串形式展示节点树形结构
	toString(join = true) {
		let parts = [this.name]

		if (this.children.length > 0) {
			parts = parts.concat(
				this.children
					.map(v => v.toString(false))
					.reduce((a, b) => a.concat(b))
					.map(v => ' ' + v)
			)
		}

		if (join) {
			return parts.join('\n')
		} else {
			return parts
		}
	}
}

/**
 * 定义一个树形结构
 * xiaomajia 2018.11.19
 * props：root, size, height
 * func: search, addNode, toString
 * @class Tree
 */
class Tree {
	constructor(root) {
		this.root = root
	}
	// 添加子节点
	addNode(node, parent = this.root) {
		parent.addChild(node)
	}
	// 查询节点
	search(validator) {
		const queue = [this.root]
		const result = []
		while (queue.length > 0) {
			const currNode = queue.shift()
			if (validator(currNode)) {
				result.push(currNode)
				continue
			}

			if (currNode.children.length > 0) {
				arrayUtils.prepend(queue, ...currNode.children)
				// 等价于 queue.push(...currNode.children)
			}
		}

		return result
	}
	// 统计树形大小(利用 DFS 来进行遍历统计 )
	get size() {
		let size = 0
		const bag = [this.root]
		while (bag.length > 0) {
			const currNode = bag.shift()
			size++
			if (currNode.children.length > 0) {
				arrayUtils.prepend(bag, ...currNode.children)
			}
		}
		return size
	}
	// 该树形的高度
	get height() {
		return this.root.height
	}
	// toString
	toString() {
		return this.root.toString()
	}
}

// test -----------------------------
const root = new Node('root')
const node1 = new Node('node 1')
const node2 = new Node('node 2')
const node3 = new Node('node 3')
const node4 = new Node('node 4')
const node5 = new Node('node 5')
const node6 = new Node('node 6')

const tree = new Tree(root)
tree.addNode(node1)
tree.addNode(node2)
tree.addNode(node3, node1)
tree.addNode(node4, node1)
tree.addNode(node5, node2)
tree.addNode(node6, node5)
console.log(tree.search(function (node) {
	return node.name == 'node 4'
}))