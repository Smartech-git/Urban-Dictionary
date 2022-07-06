import axios from "axios";

export const getWordContents = (word) => {
    const options = {
        method: 'GET',
        url: 'https://mashape-community-urban-dictionary.p.rapidapi.com/define',
        params: {term: word},
        headers: {
          'X-RapidAPI-Key': 'd3a0352d94mshdfb36989c0ec473p15ce45jsn0bec51f0933a',
          'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
        }
      };
      
      return new Promise((res, rej) => {
        axios.request(options).then(function (response) {
            res(response.data.list);
        }).catch(function (error) {
            console.error(error);
            rej(error)
        });
      })
}
