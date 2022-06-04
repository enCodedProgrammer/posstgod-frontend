import styled, { keyframes, css } from 'styled-components';

const FadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
}
`;
const FadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  animation: ${FadeOut} 0.8s;
  z-index: 10;
  @media(max-width:340px){
        padding:3px;
      }
  ${({ open }) =>
    open
      ? css`
          display: flex;
          opacity: 1;
          pointer-events: auto;
          animation: ${FadeIn} 0.8s;
          @media(max-width: 800px) {
        display:grid;
        position:absolute;
        height:fit-content;
        background: rgba(0, 0, 0, 1);
        
      }
      
        `
      : ''};
      
`;

export const Content = styled.div`
  background: #e9e5ff;
  max-width: 1140px;
  width: 100%;
  padding: 40px 60px;
  border-radius: 8px;
  transform: scale(0);
  transition: all 0.8s cubic-bezier(0.6, -0.28, 0.735, 0.045);
  transform-style: preserve-3d;
  position: relative;
  @media(max-width:340px){
        padding:5px 5px;
      }

  ${({ open }) =>
    open
      ? css`
          transform: scale(1);
          transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        `
      : ''};

  header {
    button {
      font-size: 18px;
    }
    img {
      margin-right: 10px;
    }
  }
 
  
`;
