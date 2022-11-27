import React from 'react'
import { cars } from '../../../data/cars'
import Card from '../../card/Card'
import Cell from '../../layout/cell/Cell'
import Grid from '../../layout/grid/Grid'

const CarCards = () => {
  return (
    <Grid>
      {cars.map((car) => {
        return (
          <Cell size={{ sm: 12, md: 4, lg: 4 }}>
            <Card
              price={car.price}
              modelName={car.modelName}
              caption={car.caption}
              media={car.media}
              attributes={car.attributes}
            />
          </Cell>
        )
      })}
    </Grid>
  )
}

export default CarCards
