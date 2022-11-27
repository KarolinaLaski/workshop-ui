import styled from 'styled-components'

const Container = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  padding: var(--container-default-padding);

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: var(--container-max-width-md);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: var(--container-max-width-lg);
  }
`
export default Container
