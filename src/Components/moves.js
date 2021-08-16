import styled, { css } from 'styled-components'
import paperIcon from '../images/icon-paper.svg'
import scissorsIcon from '../images/icon-scissors.svg'
import rockIcon from '../images/icon-rock.svg'

const Move = styled.div`
  border-radius: 50%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  cursor: pointer;
  transition: .3s;
  user-select: none;

  ${({ picked }) => picked && css`
    width: 300px;
    height: 300px;
    border-width: 30px;
  `}



  ${({ tria, right, bottom, left, top }) => tria && css`
    /* border: 20px solid #5671f5; */
    width: 200px;
    height: 200px;
    margin-right: ${right || "0px"};
    margin-bottom: ${bottom || "0px"};
    margin-left: ${left || "0px"};
    top: ${top || "0px"};
  `}


  img{
    max-width: 50%;
    height: 50%;
  }

  :hover{
    transform: scale(1.2);
    
  }

  ${({ win }) => win && css`
    transform: scale(1.2);
    ::after{
      content: "";
      position: absolute;
      display: block;
      border-radius: 50%;
      width: 300px;
      height: 300px;
      animation: shockwave 1s ease-in infinite;
    }
  `}

  @keyframes shockwave {
  0% {
    transform: scale(1);
    box-shadow: 0 0 2px white;
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
    box-shadow: 0 0 150px #FFFAFA, inset 0 0 30px #F5F5F5;
  }
}

`

const PaperStyle = styled(Move)`
  border: ${({ border }) => border}px solid #5671f5;
  /* align-self: flex-end; */
`

const ScissorsStyle = styled(Move)`
  border: ${({ border }) => border}px solid #eca922;
`

const RockStyle = styled(Move)`
  border: ${({ border }) => border}px solid #dd405d;
`

export const Paper = ({ win, onClick, tria, left, top, right, bottom, border, picked }) => {

  return (
    <PaperStyle win={win} onClick={onClick ? () => onClick() : undefined} tria={tria} top={top} picked={picked} left={left} right={right} bottom={bottom} border={border}>
      <img src={paperIcon} alt="paper" />
    </PaperStyle>
  )
}

export const Rock = ({ win, onClick, tria, left, top, right, bottom, picked, border }) => {

  return (
    <RockStyle win={win} onClick={onClick ? () => onClick() : undefined} tria={tria} picked={picked} left={left} top={top} right={right} bottom={bottom} border={border}>
      <img src={rockIcon} alt="rock" />
    </RockStyle>
  )
}
export const Scissors = ({ win, onClick, tria, left, top, right, bottom, picked, border }) => {

  return (
    <ScissorsStyle win={win} onClick={onClick ? () => onClick() : undefined} tria={tria} picked={picked} left={left} top={top} right={right} bottom={bottom} border={border}>
      <img src={scissorsIcon} alt="scissors" />
    </ScissorsStyle>
  )
}