import AdjacencyListParser from './parser/adjacencyList'
import EdgesListParser from './parser/edgesList'
import GraphBuild from './graph-builder/directedGraph'

function asert(A: any, B: any, M: string, T: number) {
    if ((T === 0 && A !== B) || (T === 1 && A > B)) {
        throw new Error(M);
    }
}

function validateEdges(E: number[][], N: number, isWeighted:boolean) {
    // Validate all nodes less than N;
    let mx = 0;
    E.forEach(e => {
        // console.log(e.length, isWeighted?3:2)
        asert(e.length, isWeighted?3:2, `Found an invalid edge for ${isWeighted?"a weighted":"an unweighted"} graph.`, 0);
        asert(Number.isInteger(e[0]), true, "Expected number, found '" + e[0] + "'.", 0);
        asert(Number.isInteger(e[1]), true, "Expected number, found '" + e[1] + "'.", 0);
        mx = Math.max(mx, e[0], e[1]);
    })
    asert(mx, N, "Edge ID should be less than " + N + ".", 1);
}
function create(s: string, inputFormat: string, graphType: string, isWeighted:boolean,is0: boolean, isPlain: boolean) {
    var glist;
    if(isPlain){
        let arr:number[][]=[]
        let X=s.split("\n")
        X.forEach((e,i)=>{
            if(i===0) return;
            arr.push(e.trim().split(' ').map((ee)=>parseInt(ee)))
        })
        s=JSON.stringify(arr);
    }
    if (inputFormat === "edg") glist = new EdgesListParser(s, isWeighted,is0);
    else glist = new AdjacencyListParser(s, isWeighted,is0);

    var graph = new GraphBuild(glist.getNumberOfNodes(), glist.getEdges(), isWeighted,is0);
    // console.log(glist.getEdges())
    validateEdges(glist.getEdges(), graph.N, isWeighted);
    return graph.getGraph();
}
export default create;