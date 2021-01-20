import axios from "axios";

export const getTrendy = () => {
  try {
    return axios
      .get(
        "https://api.giphy.com/v1/gifs/trending?api_key=&limit=20&rating=g"
      )
      .then((res) => res.data);
  } catch (error) {
    console.log(error);
  }
};
