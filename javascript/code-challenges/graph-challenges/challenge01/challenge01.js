'use strict';

const Edge = require("./edge");
const Vertex = require("./vertex");

class Graph {
    constructor() {
        this.adjacenctList = new Map();
    }

    addVertex(vertex) {
        this.adjacenctList.set(vertex, []);
    }

    addEdge(start, end, weight) {
        if (!this.adjacenctList.has(start) || !this.adjacenctList.has(end)) {
            console.log('Vertex doesn\'t exist');
            return;
        } else {
            // const vertex = 
            const edge = new Edge(end, weight);
            this.adjacenctList.get(start).push(edge)
        }
    }

    bfs(start) {
        let queue = [];
        let visitedNode = new Set();

        queue.push(start);
        visitedNode.add(start);

        while (queue.length) {
            const current = queue.shift();
            const neighbors = this.adjacenctList.get(current);

            for (let neighbor of neighbors) {
                const neighborNode = neighbor.vertex;
                if (visitedNode.has(neighborNode)) {
                    continue;
                }
                visitedNode.add(neighborNode);
                queue.push(neighborNode);
            }
            console.log(visitedNode.size)
        }
        return visitedNode;
    }

}

exports.Graph = Graph;