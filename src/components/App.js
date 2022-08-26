import React, {useEffect, useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushiData, setSushiData] = useState([])
  const [fourSushi, setFourSushi] = useState([])
  const [budget, setBudget] = useState(120)
  useEffect(()=>{
    fetch(API)
    .then(r => r.json())
    .then(data => {
      const allSushis = data.map(sushi=>{
        return {...sushi, eaten: false}
      })
      const four = allSushis.splice(0, 4)
      setSushiData(allSushis)
      setFourSushi(four)
    })
  }, [])
  function grabSushi() {
    const allSushis = sushiData
    const four = allSushis.splice(0, 4)
    setSushiData(allSushis)
    setFourSushi(four)
  }
  function eatSushi(e) {
    if (budget - parseInt(e.target.dataset.price)>= 0) {
      const eatenSushi = fourSushi.map(sushi => sushi.id == e.target.id ? {...sushi, eaten: true} : sushi)
      setFourSushi(eatenSushi)
      const newBudget = budget - parseInt(e.target.dataset.price)
      setBudget(newBudget)
    }
    
  }
  return (
    <div className="app">
      <SushiContainer fourSushi={fourSushi} eatSushi={eatSushi} grabSushi={grabSushi}/>
      <Table fourSushi={fourSushi} budget={budget}/>
    </div>
  );
}

export default App;