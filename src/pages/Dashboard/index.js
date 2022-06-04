import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import momentTimeZone from "moment-timezone"
import { toast } from 'react-toastify';
import  TextField  from '@material-ui/core/TextField'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Bishop from '../../assets/teste01.svg';
import Hero from '../../assets/Hero Image.svg'
import CommentIcon from "../../assets/icon-comment.svg"
import IconFile from '../../assets/Icon feather-upload.svg';
import CheckSquare from '../../assets/Icon feather-check-square.svg';
import Input from '../../components/Input';
import WSInput from '../../components/WSInput';
import ChannelInput from '../../components/Channel-Input';
import Textarea from '../../components/Textarea'
import Button from '../../components/Button';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material/';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './styles.css'
import {
  Header,
  Message,
  Form,
  ColumnLeft,
  FormGroup,
  ColumnRight,
  CustomDateTimePicker,
  ClockIcon,
  DateTimeWrapper,
  FileCard,
  FileName,
  DeleteFileButton,
  MessagesTitle,
  ScheduledMessage,
  DashboardBoddy,
  MessagesContainer,
  PostgodLeft,
  PostgodRight,
  Top,
  Footer,
  HeroDiv,
} from './styles';


import {
  deleteMessageRequest,
  getChannelsRequest,
  getMessagesRequest,
  postMessageRequest,
  editMessageRequest,
} from '../../store/modules/slack/actions';
import { getUserRequest } from '../../store/modules/user/actions';
import {LOGOUT_REQUEST} from "../../store/modules/slackAuth/action"
import { LogoutButton } from '../_layouts/Auth/styles';
import api from '../../services/api'
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from 'styled-components';


const Dashboard = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.slackAuth.user);
  const  rdxUserObj= useSelector((state) => state.slackAuth.user.user);
  // const [rdxUserObj, setRdxUserObj] = useState(null);
  const [workspace, setWorkspace] = useState(null);
  const { channels } = useSelector((state) => state.slack);
  const [channell, setChannell] = useState([]);
  const [text, setText] = useState('');
  const [time, setTime] = useState(moment());
  const [tz, setTimeZone] = useState()
  const [files, setFiles] = useState([]);
  const { messages } = useSelector((state) => state.slack);
  const [users, setUsers] = useState([]);
  const [privateGroups, setPrivateGroups] = useState([]);
  const [openPicker, setOpenPicker] = useState(false);
  const materialTheme = createMuiTheme({
    overrides:{
      MuiPickersToolbar:{
        toolbar:{
          backgroundColor:"red"
        }
      }
    }
  })


  useEffect(() => {
    if (!user) {
      dispatch(getUserRequest());
    }
  }, []);

  const setZone = (zone) =>{
    setTimeZone(zone)
    console.log(zone)
  }


  useEffect(() => {
    if (user) {
      // vai mudar.. é necessário carregar mais de um workspace no perfil do usuário,
      // como no convergely
      // feito só para efeito de teste..
      // const ws = user.workspaces.find((_, i) => i === 0);
      const rdxUser = user.user

      // setRdxUserObj(rdxUser);
      const ws = user.user.workspaces      
      console.log(rdxUserObj.id)      
      setWorkspace(ws);
      console.log("stat workspace", workspace)
      

      dispatch(getChannelsRequest(rdxUser.id));
      dispatch(getMessagesRequest(rdxUser.id));

      api
        .get(`/workspace/${rdxUser.id}/${ws._id}/users`)
        .then((response) => setUsers(response.data))
        .catch(() =>
          toast.error('Something went wrong while getting the workspace users.')
        );

      api
        .get(`/workspace/${rdxUser.id}/${ws._id}/conversations`)
        .then((response) => {
          setPrivateGroups(
            response.data.filter((group) => group.is_group && group.is_general)
          );
        })
        .catch(() => {
          toast.error('Something went wrong while getting the private groups');
        });
    }
  }, [user]);

    function uninstallApp() {
      const token  = user.user.workspaces.slack_bot_token
      api.
      post(`/uninstall/${token}`)
      .then(
        dispatch(LOGOUT_REQUEST(undefined))
        ).then(props.history.push('/login'))

    } 
    

  function onSubmit(e) {
    e.preventDefault();

    let message = null;
    let errorFounded = false;

    if (!channell) {
      errorFounded = true;
      message = 'The channel must be selected!';
    }

    if (!errorFounded && !text) {
      errorFounded = true;
      message = 'The message must be provided!';
    }

    if (errorFounded) {
      return toast.error(message);
    }

    const channel = [...new Set(channell)];

    const formData = new FormData();

    if (files && files.length) {
      for (let i = 0; i < files.length; i += 1) {
        formData.append('files', files[i]);
      }
    }

    // const postAt = tz.utc().format('yyyy-MM-DD HH:mm:ss');
    const postAt = tz
    console.log(postAt)

    formData.append('channel', channel);
    formData.append('text', text);
    formData.append('post_at', postAt);

    dispatch(postMessageRequest(rdxUserObj.id, formData));

    console.log(channel)

    setChannell('');
    setText('');
    setTime(moment());

    return false;
  }

  function addFileHandler(e) {
    const newFiles = [];

    for (let i = 0; i < e.target.files.length; i += 1) {
      const file = e.target.files[i];

      const foundedFile = files.find((p) => p.name === file.name);

      if (!foundedFile) {
        newFiles.push(file);
      }
    }

    setFiles(files.concat(newFiles));
  }

  function deleteFileHandler(fileName) {
    setFiles(files.filter((p) => p.name !== fileName));
  }

  async function cancelMessage(message) {
    dispatch(deleteMessageRequest(message));
  }

  async function editMessage(message) {
    dispatch(editMessageRequest(message));
  }
  function timeChangeHandler(newTime) {
    const diff = Math.abs(time.diff(newTime, 'minutes'));
    setTime(newTime);

    if (diff < 60) {
      setOpenPicker(false);
    }
  }

  return (
    <DashboardBoddy>
      <PostgodLeft>
      <Top>
          <div>
            <h4>POSTGOD</h4>
          </div>
      </Top>
      <Top>
          <div>
            <div className="upcoming">
            <img src={CommentIcon} alt="" /><h5 style={{marginLeft: "10px"}}>Schedule a Message</h5>
            </div>
          </div>
          <div>
            <div className="upcoming">
            <img src={CheckSquare} alt="" /><h5 style={{marginLeft: "10px"}}>Create a Task</h5>
            </div>
          </div>
          <div>
            <div className="upcoming">
            <img src={CommentIcon} alt="" /><h5 style={{marginLeft: "10px"}}>Annotate Image</h5>
            </div>
          </div>
          <div>
            <div className="upcoming">
            <img src={CommentIcon} alt="" /><h5 style={{marginLeft: "10px"}}>Create a Poll</h5>
            </div>
          </div>
        </Top>
        <HeroDiv>
        <img src={Hero} alt=""/>
        </HeroDiv>
        <Footer>
          <h4>
            Help Support
          </h4>
        </Footer>
      </PostgodLeft>

      <PostgodRight>

      <Header>
        <Message>
          <img src={Bishop} alt="" />
          <div className="message">
            Schedule your Slack posts in advance for future deliveries :D
          </div>
        </Message>
      </Header>

      <Form onSubmit={onSubmit}>
        <ColumnLeft>        

          <FormGroup>
          <h3>Select the Receiver</h3>
            <ChannelInput
              type="text"
              icon="user"
              as="select"
              multiple
              size="6"
              value={channell}
            onChange={(e) => setChannell([...channell, e.target.value])}
            >
              
              <optgroup label="Open Chats">
                {users
                
                  .filter((u) => !u.deleted)
                  .map((u) => (
                    <option value={u.id}>
                      {u.real_name}
                    </option>
                  ))}
                </optgroup>
              <optgroup label="Channels">
                {channels.filter((c)=> !c.is_im).map((c) => (
                  <option value={c.id}>
                    {c.name}
                  </option>
                ))}
              </optgroup>
              <optgroup label="Private Groups">
                {privateGroups.map((g) => (
                  <option key={g.id} value={g.id}>
                    {g.name}
                  </option>
                ))}
              </optgroup>
            </ChannelInput>
          </FormGroup>

          <FormGroup>
            <Textarea
              placeholder="Your message here"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </FormGroup>

          <DateTimeWrapper>                         
          <ThemeProvider
          theme={materialTheme}
          >
          <TextField
        
        id="datetime-local"
        label="Next appointment"
        type="datetime-local"
        defaultValue="2017-05-24T10:30"
        sx={{ width: 250 }}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={e=>setZone(e.target.value)}
      />
      {momentTimeZone.tz.guess()}
          </ThemeProvider>
        </DateTimeWrapper>




          {/* <DateTimeWrapper>
            <CustomDateTimePicker
              InputProps={{
                startAdornment: <ClockIcon icon="clock" />,
              }}
              variant="inline"
              disablePast
              value={time}
              onOpen={() => setOpenPicker(true)}
              open={openPicker}
              onChange={timeChangeHandler}
            />
          </DateTimeWrapper> */}

          <footer style={{ marginTop: '20px' }}>
            <label htmlFor="file">
              <img src={IconFile} alt="" />
              Attach files
            </label>
            <input
              type="file"
              id="file"
              multiple
              style={{ display: 'none' }}
              onChange={addFileHandler}
            />
            <Button type="submit">Schedule Message</Button>
          </footer>
          {files.map((file) => (
            <FileCard >
              <FileName> { file.name }</FileName>
              <DeleteFileButton
                type="button"
                onClick={() => deleteFileHandler(file.name)}
              >
                X
              </DeleteFileButton>
            </FileCard>
          ))}
        </ColumnLeft>


        <ColumnRight>
        {/* <div> */}
        {/* <WSInput
              type="text"
              icon="team"
              as="select"      
            >
              <option key={user.user.workspaces._id} value={user.user.workspaces._id}>
                {user.user.workspaces.slack_team_name}
              </option>
        </WSInput>
        <img style={{objectFit: "contain", width: "100px", height: "auto"}} src={user.user.workspaces.slack_photo}></img>

        </div> */}
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"

          style={{backgroundColor: '#ececec', boxShadow: '0px 3px 6px #00000029', border: 'none !important', color: '#1e1e1e;'}}
        >
          <Typography style={{display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <img style={{objectFit: "contain", width: "40px", height: "40px", borderRadius: "100%"}} src={user.user.workspaces.slack_photo} />
            <div style={{marginLeft: '10px'}}> {user.user.workspaces.slack_team_name}
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div style={{display: 'flex', marginTop: '10px'}}>
            <img style={{objectFit: "contain", width: "70px", height: "auto"}} src={user.user.workspaces.slack_photo}/>
              <div style={{marginLeft: "10px"}}>
              Name: {user.user.workspaces.slack_firstname} {user.user.workspaces.slack_lastname}
              <br/>
              Email: {user.user.email}
              <br/>
              Team: {user.user.workspaces.slack_team_name}
              </div>
            </div>
          </Typography> 
          <Typography style={{display: "flex", marginTop: "20px", justifyContent: 'space-between'}}>
            <p>Settings</p>
            <button style={{fontSize: "18px"}} onClick={uninstallApp}>Logout</button>
          </Typography>       
        </AccordionDetails>
        </Accordion>
        
          <MessagesTitle>My Messages</MessagesTitle>
          <MessagesContainer>

          { messages.map((message) => {

              var receivers = [];

              message.slack_channel_id.map((sid)=>{

              receivers.push(...users.filter(p=>p.id==sid));

              });

              message.slack_channel_id.map((sid)=>{
                receivers.push(...channels.filter(p=>p.id==sid));
                });

              // const utcDate = moment
              //   .utc(message.slack_message_post_at)
              //   .toDate();
              const formattedDate = message.slack_message_post_at
              //  moment(utcDate)
              //   .local()
              //   .format('MM/DD HH:mm');

                return (
                <ScheduledMessage key={message._id}>
                  <FormGroup>
                    <Input
                      type="text"
                      disabled
                      value={message.slack_message_text}
                    />
                  </FormGroup>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'top',
                      justifyContent: 'space-between',
                    }}
                  >
                    
                    <FormGroup>
                    { receivers.map((receiver)=> {
                        console.log(receiver)                      

                      console.log(receiver.name);
                      return (
                      <Input
                        type="text"
                        icon="user"
                        disabled
                        value={receiver.name}
                      />
                      )
                    }) }
                    </FormGroup>
                    
                    <FormGroup>
                      <Input
                        icon="clock"
                        type="text"
                        disabled
                        value={formattedDate}
                      />
                    </FormGroup>
                  </div>
                  <div style={{ paddingBottom: '10px' }}>
                    <div>                      
                      <DeleteForeverIcon style={{marginLeft: "15px", cursor: "pointer", marginTop: "20px"}} onClick={() => cancelMessage(message._id)}/>                    
                      {/* <DeleteForeverIcon style={{marginLeft: "15px", cursor: "pointer"}} onClick={() => editMessage(message._id)}/>                     */}
                    </div>  
                    {/* <LogoutButton onClick={() => editMessage(message._id)}>
                      Edit
                    </LogoutButton> */}
                  </div>
                </ScheduledMessage>             

          )
        
        })
            }            
          </MessagesContainer>
        </ColumnRight>
      </Form>
      </PostgodRight>
    </DashboardBoddy>
  );
};

export default Dashboard;
