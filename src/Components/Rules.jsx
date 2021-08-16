import Modal from 'react-modal'
import rules_diagram from '../images/image-rules.svg'
import close_icon from '../images/icon-close.svg'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-self: flex-start;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;

  img{
    width: 20px;
    height: 20px;
  }

  h1{
    color: #3b4363;
  }

`

Modal.setAppElement("#root");

const styles = {
  content: {
    width: 'fit-content',
    height: 'fit-content',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    alignItems: 'center',
    transform: 'translate(-50%, -50%)',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    padding: '30px',
    marginRight: '-50%',
    userSelect: 'none',
    borderRadius: '15px'
  },
  overlay: {
  },
}

const Rules = ( { modalIsOpen, setIsOpen} ) => {
  
  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <Modal 
      isOpen={modalIsOpen} 
      onRequestClose={closeModal}
      contentLabel="Rules"
      style={styles}
      overlayClassName="overlay">

      <Wrapper>
        <h1>
          RULES
        </h1>
        <img src={close_icon} alt="close icon" onClick={closeModal} />
      </Wrapper>
      <img src={rules_diagram} alt="rules"/>
    </Modal>
  )
}

export default Rules
