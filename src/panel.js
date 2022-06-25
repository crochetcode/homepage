import styled from 'styled-components';

const ButtonText = styled.div`
  margin: 2px;
  padding: 2px 5px;
  box-sizing: border-box;
  border: 1px solid rgba(1, 1, 1, 0);
`;

const StyledPanel = styled.div`
  box-shadow: 5px 5px black;
  background: rgb(192, 192, 192);

  .top {
    height: 3.5rem;
    width: 400px;
    border-bottom: 0;
    display: flex;
    align-content: center;

    .top-span {
      margin: 5px;
      margin-bottom: 0;
      padding: 0 15px;
      background: linear-gradient(90deg, darkblue, darkblue, darkblue, royalblue);
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    p {
      font-size: 1.5rem;
      color: white;
      font-family: 'Trebuchet MS', monospace;
      font-weight: bold;
    }
  }

  .content-border {
    height: 300px;
    width: 400px;
    border: 5px solid rgb(192, 192, 192);
    box-sizing: border-box;
  }

  button {
    border: 2px outset rgb(151, 151, 151);
    border-radius: 0;
    margin: 5px 0;
    background: rgb(212, 212, 212);

    &:hover {
      cursor: pointer;
      background: rgb(198, 198, 198);
    }

    &:hover ${ButtonText} {
      border: 1px dotted gray;
    }
  }

  .content {
    border: 2px inset rgb(171, 171, 171);
    height: 100%;
    box-sizing: border-box;
    padding: 20px;
    font-family: 'Trebuchet MS', monospace;
    font-size: 20px;
    background: rgb(200, 200, 200);

    h1 {
      font-weight: normal;
    }
  }
`;

export const Panel = () => (
  <StyledPanel>
    <div className='top'>
      <div className='top-span'>
        <p>links</p>
        <button>X</button>
      </div>
    </div>
    <div className='content-border'>
      <div className='content'>Lorem ipsum</div>
    </div>
  </StyledPanel>
);
