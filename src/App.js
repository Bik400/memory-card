import React , { useEffect, useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card.js";
import {charData} from "./charData";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [cardsClicked, setCardsClicked] = useState([]);

  // sort array randomly
  charData.sort(() => {
    if (Math.random() > 0.5) return 1;
    return -1;
  });

  const selectChar = (e) => {
    let selectedId = e.target.id;
    if (cardsClicked.includes(selectedId)) {
      setScore(0);
      setCardsClicked([]);
    } else {
      setCardsClicked(cardsClicked.concat(selectedId));
      setScore(score + 1);
    }
  }

  useEffect(() => {
    if (score <= highScore) return;
    setHighScore((prevState) => prevState + 1);
  }, [score, highScore]);

  return (
    <div>
      <Header score={score} highScore={highScore}/>
      <div className="rule-h1">
        <h1>Don't click on the same card more than once!</h1>
      </div>
      <div className="card-layout">
        {charData.map((char) => {
          return <Card onSelectChar={selectChar} char={char}/>
        })}
      </div>
    </div>
  );
}

export default App;
