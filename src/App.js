import React, { useState } from "react";
import "./App.css";
//import Rover from "./Components/Rover";
import APOD from "./Components/APOD";

function App() {
  //variables
  const [imageTitle, setImageTitle] = useState([]);
  const [image, setImage] = useState([]);
  const [gyan, setGyan] = useState([]);
  const [visiblity, setVisiblity] = useState(false);
  //const [loading, setLoading] = useState(false);

  //api caller
  const fetchDataHandler = () => {
    setVisiblity(true);
    fetch(
      //fetching the api via the link
      "https://api.nasa.gov/planetary/apod?api_key=G33hE4DZjDENcetxNT7L3tyDpcMIQhJfg37bmxeM"
    )
      .then((response) => {
        //converting the data into a readable json file
        return response.json();
      })
      .then((data) => {
        //getting the data
        setImageTitle(data.title);
        setImage(data.hdurl);
        setGyan(data.explanation);
      });
  };

  const revert = () => {
    setVisiblity(false);
  };

  return (
    <div className="App">
      {visiblity === false ? (
        <div>
          <section>
            Hello, I can get you,
            <a href="https://en.wikipedia.org/wiki/Astronomy_Picture_of_the_Day">
              NASA's Astrology Picture of The Day
            </a>
          </section>
          <button onClick={fetchDataHandler}>Render</button>
          <h1>Click render to continue</h1>
        </div>
      ) : (
        <div>
          <APOD title={imageTitle} image={image} visiblity={visiblity} gyan = {gyan}/>
          <button onClick={revert}>Return</button>
        </div>
      )}
    </div>
  );
}

export default App;
