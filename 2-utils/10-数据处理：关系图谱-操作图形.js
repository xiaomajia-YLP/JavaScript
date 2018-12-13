const _ = require('lodash')
/**
 * 定义定点类
 * xiaomajia 2018.11.29
 * @class Vertex
 */
class Vertex {
	constructor(id, property) {
		this.id = id
		this.property = property
	}
}
let vertexId = 0

/**
 * 创建定点，id自增
 * @param {*} property Vertex的属性
 * @returns Vertex实例
 */
function newVertex(property) {
	return new Vertex(++vertexId, property)
}


/**
 * 定义边类
 * xiaomajia 2018.12.07
 * @class Edge
 */
class Edge {
	constructor(leftId, rightId, property) {
		this.leftId = leftId
		this.rightId = rightId
		this.property = property
	}
}

/**
 * 定义关系图谱类
 * @class Graph
 */
class Graph {
	/**
	 *Creates an instance of Graph.
	 * @param {*} vertices 定点的集合
	 * @param {*} edges	边的集合
	 * @memberof Graph
	 */
	constructor(vertices, edges) {
		// Vertices
		this.vertexIds = []
		this.vertices = {}
		for (let i = 0; i < vertices.length; ++i) {
			const vertex = vertices[i]
			this.vertexIds.push(vertex.id)
			this.vertices[vertex.id] = vertex
		}
		// 给edge添加id索引
		const edgesWithId = edges.map(function(edge, i) {
			edge.id = i + 1
			return edge
		})
		// Edges
		this.edgeIds = []
		this.edges = {}
		this.edgeRelations = {}
		for (let i = 0; i < edgesWithId.length; ++i) {
			const edge = edgesWithId[i]
			this.edgeIds.push(edge.id)
			this.edges[edge.id] = edge
			// 初始化顶点与边的关系
			if (typeof this.edgeRelations[edge.leftId] === 'undefined') {
				this.edgeRelations[edge.leftId] = []
			}
			if (typeof this.edgeRelations[edge.rightId] === 'undefined') {
				this.edgeRelations[edge.rightId] = []
			}
			this.edgeRelations[edge.leftId].push(edge.id)
			this.edgeRelations[edge.rightId].push(edge.id)
		}
	}
	getVertex(vertexId){
		if (!_.includes(this.vertices, vertexId)) {
			return null
		} else {
			return this.vertices[vertexId]
		}
	}
}

// 实例化点
const Reid = newVertex({
	name: 'Spencer',
	gender: 'male'
})
const Morgen = newVertex({
	name: 'Derek',
	gender: 'male'
})
const Black = newVertex({
	name: 'Alex',
	gender: 'female'
})

// 实例化边
const relation = new Edge(Morgen.id, Reid.id, 'colleague')

// 实例化图
const vertices = [
	new Vertex(1, 'A'),
	new Vertex(2, 'B'),
	new Vertex(3, 'C'),
	new Vertex(4, 'D')
]
const edges = [
	new Edge(1, 2, 1),
	new Edge(1, 3, 2),
	new Edge(2, 4, 1),
	new Edge(3, 4, 1)
]
const graph = new Graph(vertices, edges)

console.log(' ------------- vertex ------------')
console.log(Reid)
console.log(Morgen)
console.log(Black)
console.log(' ------------- edge ------------')
console.log(relation)
console.log(' ------------- graph ------------')
console.log(graph)