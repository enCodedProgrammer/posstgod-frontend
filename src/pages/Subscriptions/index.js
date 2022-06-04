import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Bishop from '../../assets/bishop.svg'
import { toast } from 'react-toastify';
import ChannelInput from '../../components/Channel-Input';
import api from '../../services/api'

import Button from '../../components/Button'
import Modal from '../../components/Modal'
import Payment from '../../components/payment'

import { plans } from './plans'
import { Tooltip, withStyles } from '@material-ui/core'

import {
  Header,
  Message,
  Form,
  ColumnLeft,
  FormGroup,
  ColumnRight,
  Plans,
  // Paymento,
  SubsBody,
  ButtonNewPlan,
} from './styles'

import StripePayment from '../../pages/Subscriptions/checkout'
import Input from '../../components/Input'
import { channels } from './channels'
// import { users } from './users'

const CustomTooltip = withStyles(() => ({
  tooltip: {
    backgroundColor: '#a585d1',
    color: '#fdfdfd',
    fontSize: '0.9em',
    padding: '5px 15px',
  },
  arrow: {
    color: '#a585d1',
  },
}))(Tooltip)




export default function Subscription() {

  const user = useSelector((state)=> state.slackAuth.user)
const [privateGroups, setPrivateGroups] = useState([]);
const [workspace, setWorkspace] = useState([]);
const [planId, setPlanId] = useState(0)
const [openModal, setOpenModal] = useState(false)
const [member, setMember] = useState('')
const [channel, setChannel] = useState('')
const [channell, setChannell] = useState([]);
// const { channels } = useSelector((state) => state.slack)
const workspaces = useSelector((state) => state?.user?.workspaces)
const subPlanId = workspace?.account?.plan_id
const [users, setUsers] = useState([])

  useEffect(() => {
    if (user) {
      // vai mudar.. é necessário carregar mais de um workspace no perfil do usuário,
      // como no convergely
      // feito só para efeito de teste..
      // const ws = user.workspaces.find((_, i) => i === 0);
      const rdxUser = user.user
  
      // setRdxUserObj(rdxUser);
      const ws = user.user.workspaces      
      setWorkspace(ws);
      console.log("stat workspace", workspace)
  
      api
        .get(`/workspace/${rdxUser.id}/${ws._id}/users`)
        .then((response) => setUsers(response.data))
        .catch(() =>
          toast.error('Something went wrong while getting the workspace users.')
        );
    }
  }, [user]);

//   useEffect(()=> {
//     if (!subPlanId) {
//       toast.error("You're not on any plan currently")
//     }
//     else if (planId == subPlanId) {
//       toast.error("You're currently on this Plan.");
//     } else if (planId !== subPlanId) {
//       api
//       .get(`/plan/change/${rdxUser.id}/${planId}/users`)
//         .then((response) => setPlan(response.data))
//         .catch(() =>
//           toast.error('Something went wrong while choosing a plan.')
//         );
//   }
  
// }, [planId]);


  function handleShowModal() {
    setOpenModal(!openModal)
  }

  const [openPayment, setOpenPayment] = useState(false)

  function handleShowPayment() {
    setOpenPayment(!openPayment)
  }

  let planName = plans.filter((plan) => {
    if (plan.id === subPlanId) {
      return plan.name
    }
  })

  planName = planName[0]?.name

  // async function handleAddMember() {
  //   let errorFounded = false
  //   let errorMessage = null

  //   if (!channel || !member) {
  //     errorFounded = true
  //     errorMessage = 'All fields are required!'
  //   }

  //   const memberObj = users.find((p) => p.name === member)

  //   if (!errorFounded && !memberObj) {
  //     errorFounded = true
  //     errorMessage = 'Member not founded!'
  //   }

  //   if (errorFounded) {
  //     return toast.error(errorMessage)
  //   }

  //   try {
  //     await api.post(`/workspace/${workspace.id}/member`, {
  //       slack_user_id: memberObj.id,
  //       channel,
  //     })
  //     toast.success('User added successfully!')
  //   } catch (error) {
  //     toast.error('Something went wrong while adding the user!')
  //   }
  // }

  // useEffect(() => {
  //   api
  //     .get(`/workspace/${workspace.id}/users`)
  //     .then((response) => {
  //       setUsers(
  //         response.data
  //           .filter(
  //             (user) =>
  //               !user.deleted && !user.is_bot && user.name !== 'slackbot',
  //           )
  //           .map((user) => {
  //             return {
  //               name: user.real_name,
  //               id: user.id,
  //             }
  //           }),
  //       )
  //     })
  //     .catch(() => {
  //       toast.error('Something went wrong while getting the users!')
  //     })
  // }, [])

  return (
    <SubsBody>
      <Header>
        <Message>
          <img src={Bishop} alt="" />
          <div className="message">
            Choose the members of your team that will join your plan! Other
            users will fall under "free to try" :)
          </div>
        </Message>
      </Header>

      <Form>
        <ColumnLeft>
        <FormGroup>
          <h3>Select the User</h3>
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
              {/* <optgroup label="Channels">
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
              </optgroup> */}
            </ChannelInput>
          </FormGroup>

          {/* <FormGroup>
            <Input
              icon="user"
              placeholder="Enter the user name"
              list="users"
              value={member}
              onChange={(e) => setMember(e.target.value)}
            />
            <datalist id="users">
              {users.map((user) => (
                <option key={user.id}>{user.name}</option>
              ))}
            </datalist>
          </FormGroup> */}

          <FormGroup>
            <Input
              icon="user"
              as="select"
              value={channel}
              onChange={(e) => setChannel(e.target.value)}
            >
              <option>Select a Channel</option>
              {channels.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </Input>
          </FormGroup>

          <footer>
            <div>
              <Button type="button">
                {/* <Button type="button" onClick={handleAddMember}> */}
                Add Member
              </Button>
            </div>
          </footer>
        </ColumnLeft>
        <ColumnRight>
          <h4>My Subscription</h4>
          <div>
            <span>{planName || 'Free Plan'}</span>
            <button type="button" onClick={handleShowModal}>
              Change Plan
            </button>
          </div>
        </ColumnRight>
      </Form>

      <Modal open={openModal} handleShowModal={handleShowModal}>
        <Plans onClick={handleShowPayment}>
          {plans.map((plan, index) => (
            <article
              onClick={() => setPlanId(plan.id)}
              key={plan.id}
              className={index === 0 ? 'active' : ''}
            >
              <h3>{plan.name}</h3>
              <ul>
                <li className="price">
                  ${plan.price}
                  <small>p/ month</small>
                </li>
                <li>{plan.members} Members</li>
                <li>{plan.messages} Messages</li>
                <CustomTooltip
                  title="Feature coming soon!"
                  placement="bottom"
                  arrow
                >
                  <li>{plan.annotations} Annotations</li>
                </CustomTooltip>
                <CustomTooltip
                  title="Feature coming soon!"
                  placement="bottom"
                  arrow
                >
                  <li>{plan.task} Task</li>
                </CustomTooltip>
                <CustomTooltip
                  title="Feature coming soon!"
                  placement="bottom"
                  arrow
                >
                  <li>{plan.polls} Polls</li>
                </CustomTooltip>
              </ul>
            </article>
          ))}
        </Plans>
        <ButtonNewPlan type="button">Select New Plan</ButtonNewPlan>
        <Payment open={openPayment} handleShowPayment={handleShowPayment}>
          <StripePayment planId={planId} />
        </Payment>
      </Modal>
    </SubsBody>
  )
}
