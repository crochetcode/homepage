import styled from 'styled-components';
import github from '../assets/github.png';

const StyledIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 65px;

  &:hover {
    cursor: pointer;
  }

  img {
    height: 65px;
  }

  p {
    font-family: monospace;
  }
`;

export const Icons = () => {
  return (
    <StyledIconContainer>
      <img src={github} alt='github pixel icon' />
      <p>github</p>
    </StyledIconContainer>
  );
};
