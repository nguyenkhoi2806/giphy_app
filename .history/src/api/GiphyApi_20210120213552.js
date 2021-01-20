import axios from "axios";

const ApiKey = 'Q3Uv1P06bTTnt8Xf9erzb3PtnG1sxsm3';
export const getTrendy = (limit = 20 ) => {
  try {
    return axios
      .get(
        `https://api.giphy.com/v1/gifs/trending?api_key=${ApiKey}&limit=20&rating=g`
      )
      .then((res) => res.data);
  } catch (error) {
    console.log(error);
  }
};
