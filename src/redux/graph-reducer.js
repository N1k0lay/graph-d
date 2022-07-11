const SET_GRAPH_DATA = 'SET_GRAPH_DATA';

let initialState = {
    xMin: 0,
    xMax: 100,
    xSpan: 1,
};


const graphReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GRAPH_DATA:
            return {
                ...state, xMin: action.xMin, xMax: action.xMax, xSpan: action.xSpan,
            }
        default:
            return state;
    }
}

export const setGraphData = (xMin, xMax, xSpan) => ({type: SET_GRAPH_DATA, xMin, xMax, xSpan});


export default graphReducer;