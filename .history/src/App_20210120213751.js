import "./assets/index.scss"
import * as GIHPYAPI from "./api/GiphyApi";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    GIHPYAPI.getTrendy().then(res => {
      console.log(res)
    }, [])
  })
  return (
    <div className="App">

    </div>
  );
}

export default App;
