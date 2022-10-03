import { useState } from "react";
import Info from "./Info";

function APOD(props) {
  const [information, setInformation] = useState();
  const [visibilityHandler, setVisibliltyHandler] = useState(false);

  const moreInformationHandler = () => {
    setInformation(props.gyan);
    setVisibliltyHandler(true);
  };
  const hideInformationHandler = () => {
    setVisibliltyHandler(false);
  };

  return (
    <div>
      <section>
        Picture of the day: {props.title} {<br />}
        {<br />}
        <img src={props.image} alt="Loading..." />
      </section>
      <div className="GyanWalaDiv">
        {visibilityHandler === false ? (
          <button onClick={moreInformationHandler}>Learn more</button>
        ) : (
          <button onClick={hideInformationHandler}>Hide Information</button>
        )}
        {visibilityHandler === true ? (
          <Info info={information}></Info>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
export default APOD;
