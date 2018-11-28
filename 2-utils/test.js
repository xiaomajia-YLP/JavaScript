class Node {
	constructor(name) {
		this.name = name
		this.children = []
		this.parent = null
	}
	// 新增子节点
	addNode(node) {
		node.parent = this
		this.children.push(node)
		return this
	}
	// 兄弟节点
	siblings() {
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
	// Depth & Height 深度与高度
	// Depth：从某一个节点到其所在的树形结构中的根节点所经过边的数目
	get depth() {
		let depth = 0
		let currNode = this
		while (currNode.parent !== null) {
			depth++
			currNode = currNode.parent
		}
		return depth
	}
	getDepthByRoot(root) {
		let depth = 0
		let currNode = this
		while (currNode.parent !== root) {
			depth++
			currNode = currNode.parent
		}
		return depth + 1
	}
	// Height：以某一个节点为根所形成的树形结构（该树形结构可能是一棵更大的树形结构中的一部分，即子树）中，这个节点到最深的子节点中间经过的边的数目。
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
	
}

const root = new Node('root')
const node1 = new Node('node 1')
const node2 = new Node('node 2')
const node3 = new Node('node 3')
const node4 = new Node('node 4')

root.addNode(node1).addNode(node2)
node1.addNode(node3) 
node3.addNode(node4)

console.log(node1.depth)
console.log(node1.height)
console.log(node1.degree)

