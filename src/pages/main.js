import styled from 'styled-components';
import {Panel} from '../components/panel';

const StyledDiv = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 150px;
  box-sizing: border-box;
  font-family: 'Arial Rounded MT Bold', sans-serif;

  h1 {
    font-size: 2rem;
  }
`;

export const Main = () => {
  return (
    <StyledDiv>
      <Panel />
    </StyledDiv>
  );
};
