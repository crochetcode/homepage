import styled from 'styled-components';

const ButtonText = styled.div`
  margin: 2px;
  padding: 2px 5px;
  box-sizing: border-box;
  border: 1px solid rgba(1, 1, 1, 0);
`;

const Container = styled.div`
  box-shadow: 2px 2px 5px black;
  background: rgb(192, 192, 192);

  button {
    border: 2px outset white;
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
`;

const OuterBorder = styled.div`
  border: 1px solid rgba(52, 52, 52);
  border-top: 0;
`;

const InsetBorder = styled.div`
  height: 300px;
  width: 450px;
  border: 5px solid rgb(192, 192, 192);
  box-sizing: border-box;
`;

const Content = styled.div`
  border: 1px solid rgb(52, 52, 52);
  border: 1px inset rgb(171, 171, 171);
  height: 100%;
  box-sizing: border-box;
  padding: 25px;
  font-family: monospace;
  font-size: 20px;
  background: rgb(200, 200, 200);
`;

const Top = styled.div`
  height: 3.5rem;
  width: 450px;
  border: 1px solid black;
  border-bottom: 0;
  display: flex;
  align-content: center;

  .span {
    margin: 5px;
    margin-bottom: 0;
    padding: 0 15px;
    background: linear-gradient(90deg, #050a30, #000c66);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  p {
    font-size: 1.5rem;
    color: white;
    font-family: monospace;
    font-weight: 500;
  }
`;

export const Panel = () => (
  <Container>
    <Top>
      <div className='span'>
        <p>doily.dev</p>
        <button>x</button>
      </div>
    </Top>
    <OuterBorder>
      <InsetBorder>
        <Content>
          Panel
          <br />
          <button>
            <ButtonText>button</ButtonText>
          </button>
        </Content>
      </InsetBorder>
    </OuterBorder>
  </Container>
);
