class AdjacencyListParser {
    edges: number[][];
    N: number;
    withoutWeight(S: string, is0: boolean): void {
        let l: number[][] = JSON.parse(S);
        console.log(l)
        for (let i = 0; i < l.length; i++) {
            for (let j = 0; j < l[i].length; j++) {
                this.edges.push([i + (is0?0:1), l[i][j]]);
            }
        }
        this.N = l.length;
    }
    withWeight(S: string,is0:boolean): void {
        let l: number[][][] = JSON.parse(S);
        for (let i = 0; i < l.length; i++) {
            for (let j = 0; j < l[i].length; j++) {
                this.edges.push([i + (is0?0:1), l[i][j][0], l[i][j][1]]);
            }
        }
        this.N = l.length;
    }
    constructor(S: string, isWeighted: boolean, is0: boolean) {
        this.edges = []
        this.N = 0;
        if(isWeighted) this.withWeight(S,is0);
        else this.withoutWeight(S,is0);
    }
    getEdges(): number[][] { return this.edges; }
    getNumberOfNodes(): number { return this.N; }
}
export default AdjacencyListParser;