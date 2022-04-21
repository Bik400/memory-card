import React , { useEffect, useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card.js";


function App() {
  // const [score, setScore] = useState({score: 0, highScore: 0});
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [cardsClicked, setCardsClicked] = useState([]);

  function change (e) {
    // add the clicked cards into state array
    let div = e.target.id;
    // console.log(div);

    if (cardsClicked.indexOf(e.target.id) === -1) {
      setCardsClicked(cardsClicked.concat(div));
      changeHighScore();
      setScore(score + 1);
    } else {
      setCardsClicked(cardsClicked.filter(() => {
        return div > 15
      }));
      setScore(0);
    }
  };

  // Randomize the layout when a div is clicked

  function changeHighScore() {
    if (score >= highScore) {
      setHighScore(highScore + 1);
    }
  }

  useEffect(() => {
    // randomize layout here
    console.log(cardsClicked);
    console.log("The score is: " + score);
  })

  return (
    <div>
      <p>Your score is: {score}</p>
      <p>Your high score is: {highScore}</p>
      <Header />
      <Card change={change}/>
    </div>
  );
}

export default App;
