import React from 'react'
import styled from 'styled-components'
import Caption1 from '../texts/captions/Caption1'
import Caption2 from '../texts/captions/Caption2'
export interface CardHeaderProps {
  price: string
  modelName: string
  caption: string
}
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-block-end: var(--spacing-xs);
`
const CardHeader = ({
  price,
  modelName,
  caption,
}: CardHeaderProps): JSX.Element => {
  return (
    <>
      <Header>
        <Caption1>{modelName}</Caption1>
        <Caption1>${price}</Caption1>
      </Header>
      <Caption2>{caption}</Caption2>
    </>
  )
}

export default CardHeader
