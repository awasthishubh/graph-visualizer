import AdjacencyListParser from './parser/adjacencyList'
import EdgesListParser from './parser/edgesList'
import GraphBuild from './graph-builder/directedGraph'

function asert(A:any, B:any, M:string,T:number){
    if((T===0 && A!==B) || (T===1 && A>B)){
        throw new Error(M);
    }
}

function validateEdges(E:number[][], N:number){
    // Validate all nodes less than N;
    let mx=0;
    E.forEach(e=>{
        asert(e.length,2,"Invalid Edge.",0);
        asert(Number.isInteger(e[0]),true,"Expected number, found '"+e[0]+"'.",0);
        asert(Number.isInteger(e[1]),true,"Expected number, found '"+e[1]+"'.",0);
        mx=Math.max(mx, e[0],e[1]);
    })
    asert(mx,N,"Edge ID should be less than "+N+".",1);
}
function create(s:string, inputType:string, graphType:string){
    var glist;
    if(inputType==="edg") glist=new EdgesListParser(s);
    else glist=new AdjacencyListParser(s);

    var graph=new GraphBuild(glist.getNumberOfNodes(), glist.getEdges());
    console.log(glist.getEdges())
    validateEdges(glist.getEdges(), graph.N);
    return graph.getGraph();
}
export default create;