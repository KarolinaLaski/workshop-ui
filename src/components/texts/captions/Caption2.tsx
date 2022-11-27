import styled from 'styled-components'

const Caption2 = styled.span`
  font-family: var(--caption-family);
  font-weight: var(--caption-2-weight);
  color: var(--caption-2-color);

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: var(--caption-2-size-sm);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: var(--caption-2-size-md);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: var(--caption-2-size-lg);
  }
`

export default Caption2
