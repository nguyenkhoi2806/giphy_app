import axios from 'axios';

export const getTrendy = () =>{
    try {
        return axios.get('https://api.giphy.com/v1/gifs/trending?api_key=Q3Uv1P06bTTnt8Xf9erzb3PtnG1sxsm3&limit=20&rating=g').then
    }
}