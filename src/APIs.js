import axios from "axios";
import {Howl} from 'howler';
import { setAudio } from "./Components/Content";




//Urban Dictionary API call
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
          audio(word)
      }).catch(function (error) {
          console.error(error);
          rej(error)
      });
    })


}

//word phonetics with Howler and Dictionaryapi
export let sound; // imported in audioBtn.js

export const audio = (word) => {

    const options = {
      method: 'GET',
      url: `/${word}`,
      baseURL: 'https://api.dictionaryapi.dev/api/v2/entries/en'
    }

    axios.request(options).then(function (response) {

      const result = response.data[0].phonetics.filter(x => x.audio !== ''); // filtering valid audio URLs
      console.log(result)

      if(result[result.length - 1].audio !== ''){
        setAudio(false);
        sound = new Howl({
          src: [result[result.length - 1].audio],
          volume: 1,
        })
      } else {
        setAudio(true);
      }
 
  }).catch(function (error) {
      console.error(error);
  });
      
}