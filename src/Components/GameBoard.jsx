import styled from "styled-components"
import { compare } from '../gameMechanics'
import { useEffect, useState, useCallback } from "react"

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 4fr 4fr 4fr;
  grid-template-rows: 12fr;
  width: 100%;
  height: 400px;
  margin: auto 0px;
`

const PickHolders = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: #0e16369d;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-content: center;
`

const Sides = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-self: center;
`

const Left = styled(Sides)`
  display: flex;
  justify-content: flex-end;
  align-content: center;
`

const Middle = styled(Sides)`
  display: flex;
  flex-flow: column wrap;
  align-items:center;
  h1{
    font-size: 50px;
    color: white;
  }
`

const Right = styled(Sides)`
  display: flex;
  justify-content: flex-start;
`

const PlayAgainButton = styled.button`
  outline: none;
  border: none;
  border-radius: 10px;
  padding: 15px 75px;
  background: white;
  color: #3b4363;
  font-weight: 600;
  letter-spacing: 1.3px;
  transition: .3s;
  margin-top: 15px;

  :hover{
    box-shadow: 0 0 1px 1px white;
    background: transparent;
    color: white;
  }
`;



const GameBoard = ({ game, setGame }) => {

  const [bM, setBotMove] = useState(false);

  const playAgin = useCallback(() => {
    setBotMove(false);
    setGame(bf => ({
      ...bf,
      isVisible: {
        pick: !bf.isVisible.pick,
        picked: !bf.isVisible.picked,
      },
      gameState: "OPPONENT...",
      playerMove: null,
      botMove: null
    }))
  }, [setGame])

  useEffect(() => {
    if (game.playerMove === null) return;

    let playerChoice = game.playerMove.name.toLowerCase();
    let botChoice = game.botMove.name.toLowerCase();

    setTimeout(() => {

      setBotMove(true);
      let results = compare(playerChoice, botChoice);

      if (results === playerChoice) {
        setGame(bf => ({
          ...bf,
          result: 1,
          gameState: "YOU WIN",
          score: bf.score + 1,
          played: true,

        }))
        console.log('you won');
      } else if (results === 'tie') {
        setGame(bf => ({
          ...bf,
          result: 2,
          gameState: "IT'S A TIE",
          played: true
        }))
        console.log('tie');
      } else {
        setGame(bf => ({
          ...bf,
          result: 0,
          gameState: "YOU LOSE",
          score: bf.score - 1,
          played: true,
        }))
        console.log('you lost');
      }
    }, 1500)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [game.playerMove])

  return (
    <Wrapper>
      <Left>
        <PickHolders>
          {/* <Paper win={game.result === 1 ? true : false} picked border="30" /> */}
          {game.playerMove && <game.playerMove border="30" picked win={game.result === 1 ? true : false} />}
        </PickHolders>
      </Left>
      <Middle >
        <h1>
          {bM === false ? "OPPONENT..." : game.gameState}
          { }
        </h1>
        <PlayAgainButton onClick={playAgin}>
          PLAY AGAIN
        </PlayAgainButton>
      </Middle>
      <Right>
        <PickHolders>
          {bM && <game.botMove border="30" picked win={game.result === 0 ? true : false} />}
        </PickHolders>
      </Right>
    </Wrapper>
  )
}

export default GameBoard
