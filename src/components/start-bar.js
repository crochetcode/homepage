import styled from 'styled-components';
import windows from '../assets/windows.png';

const StyledStartBar = styled.footer`
  height: 50px;
  width: calc(100vw - 0px);
  margin: 0 auto;
  background: rgb(212, 212, 212);
  border: 2px outset rgb(51, 51, 51);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .start,
  .time {
    border: 3px outset rgb(151, 151, 151);
    width: 175px;
    height: 45px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 1px;

    img {
      height: 1.75rem;
      margin: 5px;
    }
  }

  .start {
    p {
      font-size: 1.25rem;
      font-family: 'Courier New', monospace;
      font-weight: bold;
    }

    &:hover img {
      transform: scale(-1, -1);
    }

    &:hover {
      cursor: default;
    }

    &:hover p {
      font-size: 1.3rem;
    }
  }

  .time {
    border: 2px inset rgb(151, 151, 151);
    height: 40px;
    margin: 0 5px;
  }
`;

export const StartBar = () => {
  return (
    <StyledStartBar>
      <div className='start'>
        <img src={windows} alt='windows 95 logo' />
        <p>doily.dev</p>
      </div>
      <div className='time'>{new Date().toDateString()}</div>
    </StyledStartBar>
  );
};
