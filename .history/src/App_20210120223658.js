import React from 'react';
import * as GIHPYAPI from "./api/GiphyApi";
import { useEffect, useState } from "react";

import "./assets/index.scss";
function App() {
  const [imageLists, setImageLists] = useState([]);

  useEffect(() => {
    GIHPYAPI.getTrendy().then((res) => {
      setImageLists(res.data.data);
    });
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="row card-deck">
          {imageLists.length > 0 &&
            imageLists.map((item, index) => (
              <div className="col-xl-3 p-3" key={ index }>
                <div className="card card-custom">
                  <img src={item.images.original.url} class="card-img-top" alt=""/>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
