import styled from 'styled-components'

interface CellProps {
  size?: {
    sm?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
    md?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
    lg?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  }
  offset?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
}

const Cell = styled.div<CellProps>`
  display: block;
  width: auto;
  flex: 1 1 0;
  --columns-offset: ${({ offset }) => offset};
  ${({ size }) =>
    size &&
    `
      flex: none;
      width: calc(100% / 12 * var(--columns-size) - var(--spacing-md, 0px));
    `}
  ${({ offset }) =>
    offset &&
    `margin-left: calc(100% / 12 * var(--columns-offset) - var(--spacing-md, 0px));`}

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    --columns-size: ${({ size }) => size?.sm};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    --columns-size: ${({ size }) => size?.md};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    --columns-size: ${({ size }) => size?.lg};
  }
`
export default Cell
