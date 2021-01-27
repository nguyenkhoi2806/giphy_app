import { useEffect, useState } from "react";

import * as GIHPYAPI from "./api/GiphyApi";
import Error from "./components/Error";
import Loading from "./components/Loading";
import ListImage from "./components/ListImage";

import "./assets/scss/index.scss";


function App() {
  const [loading, setLoading] = useState(true);
  const [imageLists, setImageLists] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    GIHPYAPI.getTrendy()
      .then((res) => {
        setImageLists(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(true);
      });
  }, []);


  if (error) return <Error />;

  if (loading) return <Loading />;

  return (
    <div className="App">
      <div className="container">
        <ListImage imageLists={imageLists} />
      </div>
    </div>
  );
}

export default App;
