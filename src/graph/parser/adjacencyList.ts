class AdjacencyListParser {
    edges: number[][];
    N: number;
    withoutWeight(S: string): void {
        let l: number[][] = JSON.parse(S);
        console.log(l)
        for (let i = 0; i < l.length; i++) {
            for (let j = 0; j < l[i].length; j++) {
                this.edges.push([i + 1, l[i][j]]);
            }
        }
        this.N = l.length;
    }
    withWeight(S: string): void {
        let l: number[][][] = JSON.parse(S);
        for (let i = 0; i < l.length; i++) {
            for (let j = 0; j < l[i].length; j++) {
                this.edges.push([i + 1, l[i][j][0], l[i][j][1]]);
            }
        }
        this.N = l.length;
    }
    constructor(S: string, isWeighted: boolean) {
        this.edges = []
        this.N = 0;
        if(isWeighted) this.withWeight(S);
        else this.withoutWeight(S);
    }
    getEdges(): number[][] { return this.edges; }
    getNumberOfNodes(): number { return this.N; }
}
export default AdjacencyListParser;