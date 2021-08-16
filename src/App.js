import './App.css'
import { useState } from 'react';
import { Wrapper, PickedBoard, PickBoard, Button } from './Theme/styles'
import { Rules, ScoreSection, GameBoard, Board } from './Components'

const App = () => {

  const [modalIsOpen, setIsOpen] = useState(false);

  const [game, setGame] = useState(() => {
    return {
      playerMove: null,
      botMove: null,
      score: 0,
      gameState: null,
      result: 0,
      played: false,
      isVisible: {
        pick: true,
        picked: false
      }
    }
  });

  return (
    <Wrapper modalIsOpen>
      <ScoreSection score={game.score} />
      <PickBoard isVisible={game.isVisible.pick}>
        <Board setGame={setGame} />
      </PickBoard>
      <PickedBoard isVisible={game.isVisible.picked}>
        <GameBoard game={game} setGame={setGame} />
      </PickedBoard>
      <Button onClick={() => setIsOpen(true)}>RULES</Button>
      <Rules modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
    </Wrapper>
  );
}

export default App;
