import React from 'react'
import Box from '../box/Box'
import CardFooter, { CardFooterProps } from './CardFooter'
import CardHeader, { CardHeaderProps } from './CardHeader'
import CardMedia from './CardMedia'

interface CardProps extends CardHeaderProps, CardFooterProps {
  media?: string
}

const Card = ({
  price,
  modelName,
  caption,
  attributes,
  media,
}: CardProps): JSX.Element => {
  return (
    <Box>
      <CardHeader price={price} modelName={modelName} caption={caption} />
      <CardMedia>
        <img alt={modelName} src={media}></img>
      </CardMedia>
      <CardFooter attributes={attributes} />
    </Box>
  )
}

export default Card
