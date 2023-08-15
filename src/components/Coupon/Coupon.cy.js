import React from 'react'
import Coupon from './Coupon'

describe('<Coupon />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Coupon />)
  })
})