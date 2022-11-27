import styled from 'styled-components'
import Cell from '../../layout/cell/Cell'
import Caption1 from '../../texts/captions/Caption1'
import Caption2 from '../../texts/captions/Caption2'

const AttributeWrapper = styled(Cell)`
  position: relative;
  text-align: center;
  gap: 10px;
  &:not(:first-child):before {
    content: '';
    background-color: var(--divider-default);
    height: 100%;
    width: 1px;
    position: absolute;
    left: calc(var(--spacing-md) / 2 * -1);
  }
`
const Value = styled.div`
  margin-block-end: var(--spacing-xs);
`
export interface CarAttribute {
  value: string
  symbol: string
  name: string
}
interface AttributeProps {
  attr: CarAttribute
}
const Attribute = ({ attr }: AttributeProps): JSX.Element => {
  return (
    <AttributeWrapper size={{ sm: 4, md: 4, lg: 4 }}>
      <Value>
        <Caption1>{attr.value}</Caption1> <Caption2>{attr.symbol}</Caption2>
      </Value>
      <Caption2>{attr.name}</Caption2>
    </AttributeWrapper>
  )
}
export default Attribute
