import styled from 'styled-components';
import Chance from 'chance';

const chance = new Chance();

const StyledIconContainer = styled.div`
  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 75px;
    border: 3px dotted rgba(1, 1, 1, 0);
    padding: 5px;
    margin: 0 10px;
    margin-top: ${() => chance.integer({min: 0, max: 15})}px;

    &:hover {
      cursor: pointer;
      border: 3px dotted gray;
    }
  }

  img {
    height: 65px;
    object-fit: contain;
    padding: 5px;
  }

  p {
    font-family: 'Courier New', monospace;
    font-weight: bold;
  }
`;

// eslint-disable-next-line react/prop-types
export const Icons = ({display, image, link}) => {
  return (
    <StyledIconContainer>
      <a href={link} target='_blank' rel='noreferrer'>
        <img src={image} alt='icon' />
        <p>{display}</p>
      </a>
    </StyledIconContainer>
  );
};
