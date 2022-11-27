import React from 'react'
import styled from 'styled-components'
import CarCards from '../car_cards/CarCards'
import Caption1 from '../../texts/captions/Caption1'
import Caption2 from '../../texts/captions/Caption2'

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-block-end: var(--spacing-lg);
  align-items: flex-end;
`
const OtherCars = () => {
  return (
    <>
      <Header>
        <Caption1>Other cars</Caption1>
        <Caption2>View all</Caption2>
      </Header>
      <CarCards />
    </>
  )
}

export default OtherCars
