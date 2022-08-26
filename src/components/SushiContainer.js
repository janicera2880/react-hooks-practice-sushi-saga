import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({ fourSushi, eatSushi, grabSushi }) {
  const mapSushiData = fourSushi.filter(sushi => !sushi.eaten).map(sushi => <Sushi sushi={sushi} eatSushi={eatSushi}/> )
 
  return (
    <div className="belt">
      {mapSushiData}
      <MoreButton grabSushi={grabSushi}/>
    </div>
  );
}

export default SushiContainer;
