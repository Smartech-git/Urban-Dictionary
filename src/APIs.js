import axios from "axios";
import {Howl} from 'howler';
import { setAudio } from "./Components/Content";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
  apiKey: "AIzaSyDviET9nQEE6yyuyATiiYeBxEhWlEpZF7o",
  authDomain: "urbandictionary-clone.firebaseapp.com",
  projectId: "urbandictionary-clone",
  storageBucket: "urbandictionary-clone.appspot.com",
  messagingSenderId: "809068862605",
  appId: "1:809068862605:web:149d6ba7e44244de0356c4",
  measurementId: "G-NQ8Q9Y87VK"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



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
          rej(error)
      });
    })


}



//word phonetics with Howler and Dictionaryapi

export let sound; // imported in AudioBtn.js

export const audio = (word) => {

    const options = {
      method: 'GET',
      url: `/${word}`,
      baseURL: 'https://api.dictionaryapi.dev/api/v2/entries/en'
    }

    axios.request(options).then(function (response) {

    const result = response.data[0].phonetics.filter(x => x.audio !== ''); // filtering valid audio URLs

    if(result[result.length - 1].audio !== ''){
      setAudio(true);
      sound = new Howl({
        src: [result[result.length - 1].audio],
        volume: 1,
      })
    }else {
      setAudio(false);
    }
 
  }).catch(function (error) {
      console.error(error);
  });
      
}

export const settings = {
  theme : 'Light',
}

if(localStorage.getItem("settings") === null){

  localStorage.setItem("settings", JSON.stringify(settings));
}

export const setSettings = (param) => {
  localStorage.setItem("settings", JSON.stringify(param));
  console.log(localStorage.getItem('settings'))
  
}


export const getSettings = () => {
  let settings = localStorage.getItem('settings')
  return JSON.parse(settings);
  
}