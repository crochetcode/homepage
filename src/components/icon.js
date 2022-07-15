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
    padding: 10px;
    margin: ${(props) => (props.link ? chance.integer({min: 0, max: 15}) : 0)}px 5px 0 5px;

    &:hover {
      cursor: pointer;
    }

    &:hover img {
      transform: scale(1.1);
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
export const Icon = ({display, image, link}) => {
  return (
    <StyledIconContainer link={link}>
      <a href={link} target='_blank' rel='noreferrer'>
        <img src={image} alt='icon' />
        <p>{display}</p>
      </a>
    </StyledIconContainer>
  );
};
