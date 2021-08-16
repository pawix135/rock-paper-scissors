import styled from "styled-components"

export const Wrapper = styled.div`
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

export const PickedBoard = styled.div`
  display: ${({ isVisible }) => isVisible ? "flex" : "none"};
  width: 100%;
  justify-content: center;
`

export const PickBoard = styled.div`
  display: ${({ isVisible }) => isVisible ? "flex" : "none"};
  justify-content: center;
`

export const Button = styled.button`
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