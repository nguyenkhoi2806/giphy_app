import React, { useState } from "react";
import { Img } from "react-image";
import Lightbox from "react-image-lightbox";
import 'react-image-lightbox/style.css'; //
import BounceLoader from "react-spinners/BounceLoader";

import * as ImageService from "../../services/Image";
import NotFound from "../../assets/images/not_found.png";

const Image = (props) => {
  const [openFullScreen, setOpenFullScreen] = useState(false);

  const Loading = () => (
    <div className="spinner">
      <BounceLoader size={35} color="#1abc9c" />
    </div>
  );

  function showFullScreen(item) {
    setOpenFullScreen(true);
  }

  return (
    <>
      {openFullScreen && <Lightbox mainSrc={props.src} onCloseRequest={() => setOpenFullScreen(false)}/>}
      <Img
        onClick={() => showFullScreen()}
        src={props.src}
        alt={props.alt ? props.alt : ""}
        className={props.className && props.className}
        loader={<Loading />}
        unloader={<img src={NotFound} alt="not found" />}
        decode={false}
      />
    </>
  );
};

export default Image;
