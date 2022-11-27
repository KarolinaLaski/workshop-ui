import styled from 'styled-components'

const Heading1 = styled.h1`
  font-family: var(--title-family);
  font-weight: var(--title-weight-default);
  line-height: var(--title-line-height);
  background: linear-gradient(
    90deg,
    var(--text-color-gradient-start) -0.21%,
    var(--text-color-gradient-end) 99.16%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  /* Ensures the gradient bg shows correctly */
  display: inline-block;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: var(--heading-1-size-sm);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: var(--heading-1-size-md);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: var(--heading-1-size-lg);
  }
`

export default Heading1
