import React, { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { useDispatch, useSelector } from 'react-redux'
import { ButtonNewPlan, CamposCard, LabelCard } from './styles'
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js'
// import history from '../../services/history';
import { subscriptionRequest } from '../../store/modules/subscription/actions'

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: '#32325d',
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      '::placeholder': {
        color: '#aab7c4',
      },
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a',
    },
  },
}

const CheckoutForm = ({ planId }) => {
  const [error, setError] = useState(null)
  const elements = useElements()
  const stripe = useStripe()
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  const workspace = user.workspaces

  const handleChange = (event) => {
    if (event.error) {
      setError(event.error.message)
    } else {
      setError(null)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const card = elements.getElement(CardElement)
    const type = 'card'

    try {
      const result = await stripe.createPaymentMethod({
        type,
        card,
        billing_details: {
          email: user.email,
        },
      })

      dispatch(
        subscriptionRequest({
          paymentMethodId: result.paymentMethod.id,
          planId,
          clearCard: card.clear,
          workspace,
        }),
      )
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <CamposCard className="form-row">
        <LabelCard htmlFor="card-element">Credit or debit card</LabelCard>
        <CardElement
          // id="card-element"
          options={CARD_ELEMENT_OPTIONS}
          // onChange={handleChange}
        />
        <div>dog</div>
        {/* <div className="card-errors" role="alert">
          {error}
        </div> */}
      </CamposCard>
      <ButtonNewPlan type="submit">Submit Payment</ButtonNewPlan>
    </form>
  )
}

// Setup Stripe.js and the Elements provider
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_API_KEY)

const StripePayment = ({ planId }) => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm planId={planId} />
    </Elements>
  )
}

export default StripePayment
