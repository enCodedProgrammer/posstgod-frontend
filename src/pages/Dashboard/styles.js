import { DateTimePicker } from '@material-ui/pickers';
import styled from 'styled-components';
import { Icone } from '../../components/Input/styles';
import Textarea from '../../components/Textarea';

export const DashboardBoddy = styled.article`
display: flex;
flex-direction: row;

::-webkit-scrollbar {
  width: 20px;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: #d6dee1;
  border-radius: 20px;
  border: 6px solid transparent;
  background-clip: content-box;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #a8bbbf;
}

  @media (min-width: 800px) {
    height: auto;
    overflow-y: auto;
    /* custom scrollbar */
::-webkit-scrollbar {
  width: 20px;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: #d6dee1;
  border-radius: 20px;
  border: 6px solid transparent;
  background-clip: content-box;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #a8bbbf;
}
}

  @media (max-width: 800px) {
    height: fit-content;
  }
`;

export const PostgodLeft = styled.section`
  display: flex;
  flex-direction: column;
  min-height: auto;
  justify-content: space-between;
  @media(min-width: 550px) {
  min-width: 22vw;
  }
  @media(max-width: 800px) {
    display: none;
  }
`;


export const PostgodRight = styled.section`
@media(min-width: 800px) {
  min-width: 78vw;
  min-height: auto;
  padding: 40px;
  border-radius:  40px 0px 0px 40px;
  box-shadow: 0px 6px 18px #d8bfff;
  background: #e9e5ff 0% 0% no-repeat;
}

`;

export const Header = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 30px;
  width: 90%;
  @media (min-width: 550px) {
    max-width:45%;
  }
`;

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 10px;
  margin-left: 40px;

  div {
    padding: 10px 5px;
    font-size: 20px;
  }

  .upcoming {
    display: flex;
    flex-direction: row;
  }
`;

export const HeroDiv = styled.div`
  display: flex;
  padding: 20px;
  margin-left: 40px;

  img {
    object-fit: contain;
    max-width: 170px;
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
  }
`;

export const Footer = styled.div`
   display: flex;
   flex-direction: column;
   padding: 40px 10px;
   margin-left: 40px;
   position: relative;
   bottom: 0px;
`;

export const Message = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  z-index: 1;

  img {
    width: 85px;
    height: 85px;
    margin-right: 10px;
  }

  .message {
    position: relative;
    background-color: #ececec;
    box-shadow: 0px 3px 6px #00000029;
    color: #1e1e1e;
    padding: 15px 25px;
    font-size: 14px;
    margin-top: 12px;
    max-width: 590px;

    &:before {
      content: '';
      display: block;
      position: absolute;
      left: -20px;
      top: 5px;
      width: 0;
      height: 0;
      border: 10px solid transparent;
      border-right-color: #ececec;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: start;
  justify-content: space-between;
  flex-direction : row;

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    label {
      display: flex;
      align-items: center;
      font-weight: bold;
      cursor: pointer;
      img {
        margin-right: 20px;
      }
    }
  }
  @media (max-width: 800px) {
    display: flex;   
    flex-direction: column;     
    width: 100%;
    padding: 10px;

    footer {
      display: flex;
      justify-content: space-around;
      align-items: center;
      label {
        align-self: center;
        margin-top: 50px;
        width: 40%;
        display: flex;
        align-items: center;
        text-align: center;
        font-weight: bold;
        cursor: pointer;
        img {
          margin-right: 20px;
        }
      }
    }
  }
`;

export const ColumnLeft = styled.div`
  max-width: 700px;
  width: 45%;
  @media (max-width: 800px) {
    max-width: 800px;
    width: 100%;
    display: block;
  }
  footer {
    @media (max-width: 800px) {
      height: fit-content;
      width: 100%;
      display: grid;
      justify-content: center;
      align-items: center;
      label {
        width: 100%;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        margin-bottom: 20px;
      }
    }
  }
`;

export const ColumnRight = styled.div`
  max-width: 450px;
  width: 45%;
  background: #e9e5ff 0% 0% no-repeat;
  padding:40px;
  margin-right: 30px;

  @media (max-width: 800px) {
    max-width: 800px;
    width: 100%;
    margin-top: 50px;
    padding:5px;
    height: auto ;
    

    h4 {
      text-align: center;
    }
  }
  @media (min-width: 800px) {
    position: absolute;
    top: 10px;
    right: 0  

  }

`;

export const MessagesContainer = styled.div`
  min-height: 315px;
  overflow-y: auto;
  

  ::-webkit-scrollbar {
    width: 20px;
  }
  
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: #d6dee1;
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background-color: #a8bbbf;
  }
  
    @media (min-width: 800px) {
      height: 315px;
      overflow-y: auto;
      /* custom scrollbar */
  ::-webkit-scrollbar {
    width: 20px;
  }
  
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: #d6dee1;
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background-color: #a8bbbf;
  }
    }

  @media (min-width: 800px) {
    height: 315px;
    overflow-y: auto;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 1rem;
  width: 100%;

  h3 {
    margin-left: 40px;
    margin-bottom:3px;
    padding-bottom: 10px;
  }
  option: hover {
    background: #00000029;
    color: white;
  }
`;

export const CustomDateTimePicker = styled(DateTimePicker)`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  background: #ececec;
  padding: 0 20px;
  padding-left: 45px;
  font-size: 16px;
  color: #1e1e1e;
  border: 0;
  & div {
    height: 100%;
  }
  & div::before,
  & div::after {
    display: none;
  }
`;

export const ClockIcon = styled(Icone)`
  position: relative;
  top: 0;
  left: 0;
  transform: none;
  height: 20px;
  padding: 0px 12px;
`;

export const DateTimeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ececec;
`;

export const FileCard = styled.div`
  background-color: #ececec;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  width: 200px;
  margin-top: 10px;
`;

export const FileName = styled.h5`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #1c0047;
`;

export const DeleteFileButton = styled.button`
  color: #f23d43;
  font-weight: 700;
  padding: 0px 10px;
`;

export const MessagesTitle = styled.h4`
  text-align: center;
  margin: 15px 0px;
  font-size: 1.3rem;
`;

export const ScheduledMessage = styled.div`
  width: 100%;
  min-height: 60px;
  background-color: #ececec;
  padding: 5px 15px;
  & div {
    margin-bottom: 0 !important;
  }
  margin-bottom: 15px;
`;
