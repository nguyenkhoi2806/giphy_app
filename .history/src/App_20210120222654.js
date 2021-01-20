import React from 'react';
import * as GIHPYAPI from "./api/GiphyApi";
import { useEffect, useState } from "react";

import "./assets/index.scss";
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
            imageLists.map((item) => {
              <div className="col-xl-3">
                <div className="card">
                  <img src={item.images.original.url} class="card-img-top" alt=""/>
                </div>
              </div>;
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
