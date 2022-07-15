import styled from 'styled-components';
import {Panel} from '../components/panel';
import {StartBar} from '../components/start-bar';
import {Icon} from '../components/icon';
import folder from '../assets/folder.png';
import {useState} from 'react';

const StyledDiv = styled.div`
  height: calc(100vh - 50px);
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

const FolderNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
`;

const folderProps = {
  display: 'links',
  image: folder
};

export const Main = () => {
  const [linkFolder, showLinkFolder] = useState(true);

  return (
    <>
      <StyledDiv>
        <FolderNav>
          <div onDoubleClick={() => showLinkFolder(true)}>
            <Icon {...folderProps} />
          </div>
        </FolderNav>
        {linkFolder && <Panel showLinkFolder={showLinkFolder} />}
      </StyledDiv>
      <StartBar />
    </>
  );
};
