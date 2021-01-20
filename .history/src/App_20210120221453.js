import "./assets/index.scss"
import * as GIHPYAPI from "./api/GiphyApi";
import { useEffect, useState } from "react";

function App() {
  const [imageLists, setImageLists] = useState([]);

  useEffect(() => {
    GIHPYAPI.getTrendy().then(res => {
      setImageLists(res.data.data);
    }, [])
  })


  return (
    <div className="App">
        <div className="container">
          {{}}
        </div>
    </div>
  );
}

export default App;
