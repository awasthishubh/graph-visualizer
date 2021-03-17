const format: any = {
    unw: {
        edg: {
            text: "Provide an array G where G[i] = [ui, vi] denotes that there is an edge between nodes ui and vi.",
            ex: "[[1,2],[1,3],[2,3]]",
            exp: "Means there are edges from 1 to 2, 1 to 3 and 2 to 3."
        },
        adj: {
            text: "Provide an array G where G[i] is the list of vertices adjacent to the ith vertex. The size of the array is equal to the number of vertices.",
            ex: "[[2,3],[3],[]]",
            exp: "Means there are edges from 1 to 2, 1 to 3 and 2 to 3."
        }
    },
    w: {
        edg: {
            text: "Provide an array G where G[i] = [ui, vi, wi] denotes that there is an edge between nodes ui and vi with weight wi.",
            ex: "[[1,2,10],[1,3,12],[2,3,14]]",
            exp: "Means there are edges from 1 to 2, 1 to 3 and 2 to 3."
        },
        adj: {
            text: "Provide an array G where G[i] is the list of pair of vertex and distance adjacent to the ith vertex. The size of the array is equal to the number of vertices.",
            ex: `[\n  [[2,10],[3,12]],\n  [[3,14]],\n  []\n]`,
            exp: "Means there are edges from 1 to 2, 1 to 3 and 2 to 3."
        }
    }

}
export default format;

