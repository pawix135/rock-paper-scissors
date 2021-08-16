import styled from "styled-components"


const Wrapper = styled.div`
  width: 50%;
  height: auto;
  display: grid;
  grid-template-columns: 10fr 2fr;
  grid-template-rows: 12fr;
  border: 3px solid #606e85;
  border-radius: 15px;
  padding: 25px;
  margin-top: 30px;
  @media (max-width: 375px){

  }
`

const TitleWrapper = styled.div`
  color: white;
  font-size: 25px;
  
  ul{
    list-style: none;
  }

  ul li {
    margin: -15px 0;
  }
`

const ScoreWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  background-color: white;
  border-radius: 10px;

  span{
    color: #2a46c0;
    font-size: 13px;
    letter-spacing: 1.1px;
  }

  h1{
    color: #3b4363;
    font-size: 40px;
  }
`

const ScoreSection = ({ score }) => {

  return (
    <Wrapper>
      <TitleWrapper>
        <h2>
          <ul>
            <li>PAPER</li>
            <li>ROCK</li>
            <li>SCISSORS</li>
          </ul>
        </h2>
      </TitleWrapper>
      <ScoreWrapper>
        <span>SCORE</span>
        <h1>
          {score}
        </h1>
      </ScoreWrapper>
    </Wrapper>
  )
}

export default ScoreSection
