import styled from 'styled-components'

const CardMedia = styled.div`
  margin: var(--spacing-sm) 0px;
  --media-height: 240px;
  img {
    max-width: 100%;
    max-height: var(--media-height);
  }
`

export default CardMedia
