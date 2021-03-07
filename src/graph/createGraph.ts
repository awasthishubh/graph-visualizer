import AdjacencyListParser from './parser/adjacencyList'
import EdgesListParser from './parser/edgesList'
import GraphBuild from './graph-builder/directedGraph'
function create(s:string, inputType:string, graphType:string){
    var glist;
    if(inputType==="edg") glist=new EdgesListParser(s);
    else glist=new AdjacencyListParser(s);

    var graph=new GraphBuild(glist.getNumberOfNodes(), glist.getEdges());
    return graph.getGraph();
}
export default create;