import "./assets/index.scss";
import * as GIHPYAPI from "./api/GiphyApi";
import { useEffect, useState } from "react";

function App() {
  const [imageLists, setImageLists] = useState([]);

  useEffect(() => {
    GIHPYAPI.getTrendy().then((res) => {
      setImageLists(res.data.data);
    }, []);
  });

  console.log(imageLists)
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          {imageLists &&
            imageLists.map((image) => {
              <div className="col-xl-3">
                <div className="card">
                  <img src={image.original.url} class="card-img-top" alt=""/>
                </div>
              </div>;
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
