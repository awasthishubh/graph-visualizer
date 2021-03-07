class AdjacencyListParser {
    edges: number[][];
    N: number;
    constructor(S: string) {
        let l: number[][] = JSON.parse(S);
        this.edges = []
        for (let i = 0; i < l.length; i++) {
            for (let j = 0; j < l[i].length; j++) {
                this.edges.push([i + 1, l[i][j]]);
            }
        }
        this.N = l.length;
    }
    getEdges(): number[][] { return this.edges; }
    getNumberOfNodes(): number { return this.N; }
}
export default AdjacencyListParser;