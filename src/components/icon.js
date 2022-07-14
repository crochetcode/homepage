import styled from 'styled-components';
import github from '../assets/github.png';

const StyledIconContainer = styled.div`
  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 55px;
    height: 75px;
    border: 3px dotted rgba(1, 1, 1, 0);
    padding: 5px;
    margin: 0 2.5px;

    &:hover {
      cursor: pointer;
      border: 3px dotted gray;
    }
  }

  img {
    height: 65px;
  }

  p {
    font-family: 'Courier New', monospace;
    font-weight: bold;
  }
`;

export const Icons = () => {
  return (
    <StyledIconContainer>
      <a href='https://github.com/crochetcode' target='_blank' rel='noreferrer'>
        <img src={github} alt='github pixel icon' />
        <p>github</p>
      </a>
    </StyledIconContainer>
  );
};
