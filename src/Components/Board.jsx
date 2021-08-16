import styled from 'styled-components'
import traiangle from '../images/bg-triangle.svg'
import { Rock, Paper, Scissors } from './moves'
import { pickMove } from '../gameMechanics'

const Wrapper = styled.div`
  width: 70%;
  height: 50vh;
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  margin-top: 100px;
`


const Board = ({ setGame }) => {

  const makeMove = (mv) => {
    pickMove(setGame, mv)
  }

  return (
    <Wrapper>
      <Paper onClick={() => makeMove('paper')} w="200px" h="200px" tria={true} right="250px" top="-75px" bottom="50px" border="20" />
      <Scissors onClick={() => makeMove('scissors')} w="200px" h="200px" tria={true} left="250px" top="-75px" border="20" />
      <Rock onClick={() => makeMove('rock')} w="200px" h="200px" tria={true} top="150px" border="20" />
      <img src={traiangle} alt="traingle" />
    </Wrapper>
  )
}

export default Board
