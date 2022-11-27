import styled from 'styled-components'

const Heading2 = styled.h2`
  font-family: var(--title-family);
  font-weight: var(--title-weight-medium);
  line-height: var(--title-line-height);
  color: var(--text-color-greyed);

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: var(--heading-2-size-sm);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: var(--heading-2-size-md);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: var(--heading-2-size-lg);
  }
`

export default Heading2
