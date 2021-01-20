import React from "react";
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

  const ListImage = ({ imageLists }) => {
    if (!imageLists) return null;

    return imageLists.map((item, index) => {
      return (
        <div className="col-xl-3 col-md-4 col-6 p-1" key={index}>
          <div className="card card-custom">
            <div className="card-body">
              <img src={item.images.original.url} className="card-img-top" alt="" />
            </div>
            {item.user && (
              <div className="user">
                <img src={item.user.avatar_url} width="10px" />
                <span className="user-name">{item.user.display_name}</span>
              </div>
            )}
          </div>
        </div>
      );
    });
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row card-deck">
          <ListImage imageLists={imageLists} />
        </div>
      </div>
    </div>
  );
}

export default App;
