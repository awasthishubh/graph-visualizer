class EdgesListParser {
    edges: number[][];
    N: number = 0;
    constructor(S: string, isWeighted: boolean, is0: boolean) {
        let l: number[][] = JSON.parse(S);
        this.edges = l
        l.forEach(ed => {
            this.N = Math.max(this.N, ed[0], ed[1]);
        })
        if(is0) this.N++;
}
    getEdges(): number[][] { return this.edges; }
    getNumberOfNodes(): number { return this.N; }
}
export default EdgesListParser;