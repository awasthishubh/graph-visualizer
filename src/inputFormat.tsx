const format: any = {
    plain: {
        unw: {
            edg: {
                text: "The first line contains two integers 𝑛, 𝑚 — the number of vertices and the number of edges in the graph. \n The 𝑖-th of the next 𝑚 lines contains two integers 𝑎𝑖, 𝑏𝑖 (1≤𝑎𝑖,𝑏𝑖≤𝑛, 𝑎𝑖<𝑏𝑖), representing an edge connecting 𝑎𝑖 and 𝑏𝑖",
                ex: "3 3 \n1 2 \n1 3 \n2 3",
                in: "6 8 \n1 2 \n1 5 \n1 1 \n5 2 \n4 3 \n4 5 \n3 2 \n6 4 \n5 5",
                exp: "Means there are edges from 1 to 2, 1 to 3 and 2 to 3."
            },
        },
        w: {
            edg: {
                text: "Provide an array G where G[i] = [ui, vi, wi] denotes that there is an edge between nodes ui and vi with weight wi.",
                ex: "3 3 \n1 2 8 \n1 3 9 \n2 3 7",
                in: "6 9 \n1 2 5 \n1 3 7 \n2 3 8 \n4 4 9 \n4 5 9 \n5 6 1 \n6 4 3 \n6 1 9 \n1 1 8",
                exp: "Means there are edges from 1 to 2, 1 to 3 and 2 to 3."
            },
        }
    },
    array: {
        unw: {
            edg: {
                text: "Provide an array G where G[i] = [ui, vi] denotes that there is an edge between nodes ui and vi.",
                ex: "[[1,2],[1,3],[2,3]]",
                in: "[[1,2],[1,5],[1,1],[5,2],[4,3],[4,5],[3,2],[6,4],[5,5]]",
                exp: "Means there are edges from 1 to 2, 1 to 3 and 2 to 3."
            },
            adj: {
                text: "Provide an array G where G[i] is the list of vertices adjacent to the ith vertex. The size of the array is equal to the number of vertices.",
                ex: "[[2,3],[3],[]]",
                in: "[[2,3,1],[],[4,5],[3,4],[1],[4,1]]",
                exp: "Means there are edges from 1 to 2,3 from 1 to 3 and 2 to 3."
            }
        },
        w: {
            edg: {
                text: "Provide an array G where G[i] = [ui, vi, wi] denotes that there is an edge between nodes ui and vi with weight wi.",
                ex: "[[1,2,8],[1,3,9],[2,3,7]]",
                in: "[[1,2,5],[1,3,7],[2,3,8],[4,4,9],[4,5,9],[5,6,1],[6,4,3],[6,1,9],[1,1,8]]",
                exp: "Means there are edges from 1 to 2, 1 to 3 and 2 to 3."
            },
            adj: {
                text: "Provide an array G where G[i] is the list of pair of vertex and distance adjacent to the ith vertex. The size of the array is equal to the number of vertices.",
                ex: `[\n  [[2,8],[3,9]],\n  [[3,7]],\n  []\n]`,
                in: `[[[1,1],[2,5],[3,3]],[[3,7]],[[4,8],[5,9]],[[2,3],[3,1]],[[1,9]],[[4,4],[1,6],[6,6]]]`,
                exp: "Means there are edges from 1 to 2, 1 to 3 and 2 to 3."
            }
        }
    }

}
export default format;

