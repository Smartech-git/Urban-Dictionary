
export const initialState = {
   wordContents: 'Default test state',
   newContent: false,
   responseEmpty: true,
   loading: false
}

export const actionTypes = {
   setWordContent: "SETWORDCONTENT",
   setLoading: "SETLOADING"
}

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.setWordContent:
            return {
                ...state,
                wordContents : action.wordContents,
                newContent: !state.newContent,
                loading: false,
                responseEmpty: action.wordContents.length === 0 ? true : false
            };

        case actionTypes.setLoading:
        return {
            ...state,
             loading: action.loading
        };        
        default: 
            return state;
    }
};

export default reducer;