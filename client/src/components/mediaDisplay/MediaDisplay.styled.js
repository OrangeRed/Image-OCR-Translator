import styled from 'styled-components';

export const StyledMediaDisplay = styled.div`
  padding-top: ${({ theme }) => theme.constants.navbarHeight + theme.constants.borderSize}px;
  background-color: ${({ theme }) => theme.secondaryBackground};
  width: 75%;

  .media-container {
    padding-bottom: 30px;
    height: 100vh;
    overflow: scroll;

    img {
      display: block;
      max-width: 100%;
      margin: 0 auto;
      margin-top: 10px;
    }
  }

  @media (max-width: ${({ theme }) => theme.constants.mobileWidth}px){
    width: 100%;
    
    .media-container {
      padding-bottom: 30px;
      height: 70vh;

      img {
        margin-bottom: 10px;
      }
    }
  }
`