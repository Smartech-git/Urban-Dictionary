
export const initialState = {
   wordContents: [
    {
        author: "second tuesday",
        current_vote: "",
        defid: 2040655,
        definition: "1. (adjective) describes something better than good\r\n\r\n2. (adjective) when used with sarcasm, describes something that sucks.\r\n\r\n3. (noun) an accuracy value assigned in [Konami's] music [simulation] game [Dance Dance Revolution].  Better than \"Good\", not as good as \"Perfect\".\r\n\r\n4. (verb) the act of getting greats, whether deliberately or not.",
        example: "1. \"Sure, pizza sounds great!\"\r\n\r\n2. \"Oh look, I got parking ticket!  Great.  I'm glad to see cops are keeping the peace around here!\"\r\n\r\n3. \"Whoa, you [FC'ed] [Trip Machine] Survivor?  How many Greats?\"\r\n\r\n4. \"I [greated] the shite out of Murmur Twins on Supernova! Something's wrong with that song.\"",
        permalink: "http://great.urbanup.com/2040655",
        sound_urls: ['https://api.twilio.com/2008-08-01/Accounts/ACd0969…0ed/Recordings/RE7d4804c275679f8ff19a34fc174d467a'],
        thumbs_down: 47,
        thumbs_up: 91,
        word: "great",
        written_on: "2006-10-20T03:20:05.000Z"
      }
   ],
   newContent: false,
   responseEmpty: false,
   loading: false
}

export const actionTypes = {
   setWordContent: "SETWORDCONTENT",
   setLoading: "SETLOADING"
}

const reducer = (state, action) => {
    console.log(state);
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