import styled from 'styled-components'
import traiangle from '../images/bg-triangle.svg'
import { Rock, Paper, Scissors } from './moves'

const Wrapper = styled.div`
  width: 70%;
  height: 50vh;
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  margin-top: 100px;
`

const Move = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  cursor: pointer;
  transition: .3s;

  :hover{
    transform: scale(1.2);
  }

`


const Board = ({ pick }) => {

  const makeMove = (moveType) => {
    // log
    pick(moveType)
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
