import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/pro-solid-svg-icons";

export default function footer() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="absolute bottom-0 right-0 my-2">
      <div className="text-xs mx-5">
        Made with
        <FontAwesomeIcon
          icon={faHeart}
          className="mx-2 hover:text-red"
          onClick={() => setIsVisible(!isVisible)}
        ></FontAwesomeIcon>
        and lots of JS.
      </div>
      <div className={(isVisible ? "block" : "hidden") + " text-xs mx-5"}>
        Made with <span className="font-bold">MuyHourng</span>.
      </div>
    </div>
  );
}
