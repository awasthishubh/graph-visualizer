class EdgesListParser {
    edges: number[][];
    N: number = 0;
    constructor(S: string) {
        let l: number[][] = JSON.parse(S);
        this.edges = l
        console.log(this.edges)
        l.forEach(ed => {
            this.N = Math.max(this.N, ed[0], ed[1]);
        })
    }
    getEdges(): number[][] { return this.edges; }
    getNumberOfNodes(): number { return this.N; }
}
export default EdgesListParser;