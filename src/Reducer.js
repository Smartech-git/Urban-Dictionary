export const themeHueLight = {
    base: '#000',
    primary: '#FFF',
    primary_light: '#F3F5F7',
    secondary_light: '#E5E5E5',
}

export const themeHueDark = {
    base: '#FFF',
    primary: '#06010F',
    primary_light: '#1F1A27',
    secondary_light: '#C39CFC',
}

export const initialState = {
   wordContents: 'Default state',
   newContent: false,
   responseEmpty: false,
   loading: false,
   theme: 'Light',
   themeHue: themeHueLight
}

export const actionTypes = {
   setWordContent: "SETWORDCONTENT",
   setLoading: "SETLOADING",
   setTheme: "SETTHEME"
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

        case actionTypes.setTheme:
            return {
                ...state,
                theme: action.theme,
                themeHue: action.theme === 'Light' ? themeHueLight : themeHueDark
            };
        
        default: 
            return state;
    }
};

export default reducer;