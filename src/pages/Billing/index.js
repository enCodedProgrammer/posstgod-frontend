import React, { useState, useEffect } from 'react'
// import { toast } from 'react-toastify';
import moment from 'moment'
// import {
//   AiFillCreditCard,
//   AiFillCalendar,
//   AiTwotoneEnvironment,
//   AiFillLock,
// } from 'react-icons/ai';
// import api from '~/services/api';
import Modal from '../../components/Modal'
import Payment from '../../components/payment'
// import ImputCard from '~/components/InputCard';
// import InputData from '~/components/InputData';
// import InputZip from '~/components/InputZip';
// import InputCVC from '~/components/InputCVC';

import { plans } from './plans'
import {
  Header,
  Message,
  Form,
  ColumnLeft,
  ColumnRight,
  Plans,
  // Paymento,
  ButtonNewPlan,
  Invoice,
  ButtonPagination,
  ButtonCencelPlan,
} from './styles'
import StripePayment from './checkout'
import Bishop from '../../assets/bishop.svg'
import DownIco from '../../assets/Icon feather-download.svg'
import { useDispatch, useSelector } from 'react-redux'
import { Tooltip, withStyles } from '@material-ui/core'
import { invoicesRequest } from '../../store/modules/invoice/actions'
import { subscriptionCancelRequest } from '../../store/modules/subscription/actions'

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

export default function Billing() {
  const subPlanId = useSelector(
    // (state) => state?.user?.profile?.workspaces[0]?.account?.plan_id,
    (state) => state?.user?.workspaces?.account?.plan_id,

  )

  const subdriptionsId = useSelector(
    (state) =>
      // state?.user?.profile?.workspaces[0]?.account?.stripe_subscription_id,
      state?.user?.workspaces?.account?.stripe_subscription_id,

      )

  const [planId, setPlanId] = useState(0)
  const [planId2, setPlanId2] = useState(0)
  const [page, setPage] = useState(0)
  const [openModal, setOpenModal] = useState(false)
  const [openModal2, setOpenModal2] = useState(false)
  // const workspace = useSelector((state) => state.user.profile.workspaces[0])
  const workspace = useSelector((state) => state.user.workspaces)

  let invoices = useSelector((state) => state.invoice.data)
  const dispatch = useDispatch()

  function handleShowModal() {
    setOpenModal(!openModal)
  }

  function handleShowModal2() {
    setOpenModal2(!openModal2)
  }

  const handleSubmit = () => {
    setPage(page + 1)
  }

  const handlePrevPage = () => {
    setPage(page - 1)
  }
  let plan_id = 4
  let page_size = 7
  let lastpage = Math.ceil(invoices.length / page_size - 1)
  let pages = paginate(invoices, page_size)
  invoices = pages[page]

  function paginate(arr, size) {
    return arr.reduce((acc, val, i) => {
      let idx = Math.floor(i / size)
      let page = acc[idx] || (acc[idx] = [])
      page.push(val)

      return acc
    }, [])
  }

  console.log(subPlanId)

  let currentPlan = plans.filter((plan) => {
    return plan.id === subPlanId ? plan.name : ''
  })

  console.log(currentPlan)

  const nameOfPlan = currentPlan[0]?.name

  const [openPayment, setOpenPayment] = useState(false)

  function handleShowPayment() {
    setOpenPayment(!openPayment)
  }

  const [openPayment2, setOpenPayment2] = useState(false)

  function handleShowPayment2() {
    setOpenPayment2(!openPayment2)
  }

  function handleCancel() {
    if (window.confirm('Are you sure you want to cancel this subscription?')) {
      dispatch(
        subscriptionCancelRequest({
          planId: plan_id,
          workspace,
        }),
      )
    }
  }

  useEffect(() => {
    dispatch(invoicesRequest({ workspaceId: workspace?._id }))
  }, [])

  return (
    <>
      <Header>
        <Message>
          <img src={Bishop} alt="" />
          <div className="message">
            You can see your past invoices and also change your plan :D
          </div>
        </Message>
      </Header>

      <Form>
        <ColumnLeft>
          {invoices?.map((invoice) => {
            const date = moment(invoice.status_transitions.finalized_at * 1000)

            const formattedDate = date.format('ddd, MMM DD, YYYY, hh:mm a')

            return (
              <Invoice key={invoice.id}>
                <h4 style={{ color: '#1C0047' }}>
                  {invoice.plan_name || `Bronze Plan`}
                </h4>
                <h4 style={{ color: '#1C0047' }}>{invoice.amount_due}$</h4>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <p
                    style={{
                      marginLeft: '0px',
                      marginRight: '10px',
                      color: '#606060',
                    }}
                  >
                    {formattedDate}
                  </p>
                  <a href={invoice.invoice_pdf}>
                    <img src={DownIco} alt="" />
                  </a>
                </div>

                <h4>
                  {invoice.amount_due === invoice.amount_paid ? (
                    <p style={{ color: '#9074BB', fontWeight: 'bold' }}>Paid</p>
                  ) : (
                    <p style={{ color: 'red', fontWeight: 'bold' }}>
                      Waiting Payment
                    </p>
                  )}
                </h4>
              </Invoice>
            )
          })}
          <ButtonPagination>
            {page < lastpage && (
              <div className="button-page" onClick={handleSubmit}>
                next page
              </div>
            )}
            {page > 0 && (
              <div className="button-page" onClick={handlePrevPage}>
                Prev page
              </div>
            )}
          </ButtonPagination>
        </ColumnLeft>
        <footer>
          <ColumnRight>
            <h4>My Subscription</h4>
            <div>
              <span>{nameOfPlan || 'Free Plan'}</span>
              <button type="button" onClick={handleShowModal}>
                Change Plan
              </button>
              {/* <button type="button" onClick={handleCancel}> */}
              {subdriptionsId && (
                <button type="button" onClick={handleShowModal2}>
                  Cancel Subscription
                </button>
              )}
            </div>
          </ColumnRight>
        </footer>
        <Modal open={openModal} handleShowModal={handleShowModal}>
          <Plans onClick={handleShowPayment}>
            {plans.map((plan, index) => (
              <article
                key={plan.id}
                className={index === 0 ? 'active' : ''}
                onClick={() => setPlanId(plan.id)}
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
        <Modal open={openModal2} handleShowModal={handleShowModal2}>
          <h2>
            {`Before you cancel. Get 50% off on the ${currentPlan[0]?.name} plan for three months.`}
          </h2>
          <Plans onClick={handleShowPayment2}>
            {currentPlan.map((plan, index) => (
              <article
                key={plan.id}
                className={index === 0 ? 'active' : ''}
                onClick={() => setPlanId2(plan.id)}
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
          <ButtonNewPlan type="button">Accept Offer</ButtonNewPlan>
          <ButtonCencelPlan type="button" onClick={handleCancel}>
            Cancel Plan
          </ButtonCencelPlan>
          <Payment open={openPayment2} handleShowPayment={handleShowPayment2}>
            <StripePayment planId={planId2} coupon="activate-coupon" />
          </Payment>
        </Modal>
      </Form>
    </>
  )
}
