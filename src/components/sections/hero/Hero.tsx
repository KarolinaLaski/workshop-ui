import React from 'react'
import Button from '../../button/Button'
import Heading1 from '../../texts/headings/Heading1'
import Heading2 from '../../texts/headings/Heading2'
import cartIcon from '../../../assets/images/cart.svg'
import carIcon from '../../../assets/images/car.svg'
import heroImage from '../../../assets/images/tesla-car.png'
import styled from 'styled-components'

const Image = styled.div`
  img {
    max-height: var(--hero-image-height);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    --hero-image-height: var(--hero-image-max-height-sm);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    --hero-image-height: var(--hero-image-max-height-md);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    --hero-image-height: var(--hero-image-max-height-lg);
  }
`

const HeroWrapper = styled.div`
  text-align: center;
`

const CtaWrapper = styled.div`
  margin-block: var(--size-4xl) var(--size-2xl);
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: var(--spacing-md);

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
  }
`
const Hero = () => {
  return (
    <HeroWrapper>
      <Heading1>Tesla Model 3</Heading1>
      <Heading2>Model 3 Long Range Dual Motor All-Wheel Drive</Heading2>
      <CtaWrapper>
        <Button icon={cartIcon}>Custom Order</Button>
        <Button icon={carIcon} inverted>
          Schedule test drive
        </Button>
      </CtaWrapper>
      <Image>
        <img src={heroImage} alt="Tesla car"></img>
      </Image>
    </HeroWrapper>
  )
}

export default Hero
