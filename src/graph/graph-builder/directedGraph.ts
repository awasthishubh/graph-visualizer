class GraphBuild {
    nodes: { id: number, label: string }[] = [];
    edges: { id: number, from: number, to: number, label?: string, smooth?:any }[] = [];
    N;
    constructor(n: number, e: number[][], isWeighted: boolean,  is0: boolean) {
        for (let i = 0; i < n; i++) {
            this.nodes.push({ id: i + (is0?0:1), label: (i + (is0?0:1)).toString() })
        }
        if (e) {
            e.forEach((edge,i) => {
                if (isWeighted && edge[2] !== undefined) this.edges.push({  id: i, from: edge[0], to: edge[1], label: edge[2].toString() });
                else this.edges.push({ id: i, from: edge[0], to: edge[1], smooth: {type: 'curvedCW', roundness: 0.2} });
            });
        }
        console.log(e)
        this.N = n;
    }
    addEdge(a: number, b: number, id:number) {
        if (a > 0 && a <= this.N && b > 0 && b <= this.N) {
            this.edges.push({ id, from: a, to: b });
        }
    }
    getEdges() { return this.edges; }
    getNodes() { return this.nodes; }
    getGraph() {
        return { nodes: this.nodes, edges: this.edges }
    }
}

export default GraphBuild;