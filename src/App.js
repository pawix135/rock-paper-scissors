import './App.css'
import styled from 'styled-components';
import ScoreSection from './Components/ScoreSection';
import { useState } from 'react';
import Rules from './Components/Rules';
import Board from './Components/Board';
import GameBoard from './Components/GameBoard'
import { compare } from './gameMechanics'
import { Rock, Paper, Scissors } from './Components/moves'

const Wrapper = styled.div`
  display: flex;
  max-width: 1366px;
  height: 100vh;
  flex-flow: column nowrap;
  margin: auto;
  align-items: center;
  body{
    filter: brightness( ${({ modalIsOpen }) => modalIsOpen ? '50%' : '100%'} );
  }
  @media (max-width: 375px){
    
  }
`

const PickedBoard = styled.div`
  display: ${({ isVisible }) => isVisible ? "flex" : "none"};
  width: 100%;
  justify-content: center;
`

const PickBoard = styled.div`
  display: ${({ isVisible }) => isVisible ? "flex" : "none"};
  justify-content: center;
`

const Button = styled.button`
  background: transparent;
  outline: none;
  border: 1px solid white;
  border-radius: 10px;
  padding: 10px 40px;
  color: white;
  letter-spacing: 1.3px;
  font-size: 15px;
  position: absolute;
  right: 50px;
  bottom: 50px;
  transition: .3s;

  :hover{
    background: white;
    color: black;

  }
`

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

  const pickMove = (mv) => {

    const choices = ['paper', 'rock', 'scissors'];
    let randomNumber = Math.floor(Math.random() * 3)

    let mov;
    let botMove;
    let botRandom = choices[randomNumber];

    switch (mv) {
      case 'paper':
        mov = Paper;
        break;
      case 'rock':
        mov = Rock;
        break;
      case 'scissors':
        mov = Scissors;
        break;
      default:
        break;
    }

    switch (botRandom) {
      case 'paper':
        botMove = Paper;
        break;
      case 'rock':
        botMove = Rock;
        break;
      case 'scissors':
        botMove = Scissors;
        break;
      default:
        break;
    }


    setGame(bf => ({
      ...bf,
      playerMove: mov,
      botMove: botMove,
      played: true,
      isVisible: {
        pick: !bf.isVisible.pick,
        picked: !bf.isVisible.picked,
      }
    }));


  }

  console.log(game);

  return (
    <Wrapper modalIsOpen>
      <ScoreSection score={game.score} />
      <PickBoard isVisible={game.isVisible.pick}>
        <Board pick={pickMove} />
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
