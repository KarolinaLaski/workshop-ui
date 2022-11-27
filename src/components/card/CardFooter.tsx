import React from 'react'
import Grid from '../layout/grid/Grid'
import Attribute, { CarAttribute } from './footer/Attribute'

export interface CardFooterProps {
  attributes: CarAttribute[]
}
const CardFooter = ({ attributes }: CardFooterProps): JSX.Element => {
  return (
    <Grid>
      {attributes.map((attr, i) => {
        return <Attribute attr={attr} />
      })}
    </Grid>
  )
}

export default CardFooter
