import React from 'react'
import styled from 'styled-components'

interface BasicButtonProps {
  inverted?: boolean
}
const BasicButton = styled.button<BasicButtonProps>`
  display: flex;
  gap: var(--spacing-xs);
  align-items: center;
  justify-content: center;
  font-family: var(--font-family-body);
  font-size: var(--font-size-base);
  line-height: var(--text-line-base);
  font-weight: var(--text-weight-medium);
  color: var(--color-white);
  background-color: var(--color-black);
  padding: var(--spacing-md) var(--spacing-lg);
  border: 1px solid var(--color-black);
  border-radius: var(--button-radius);

  ${({ inverted }) =>
    inverted &&
    `color: var(--color-black); background-color: var(--color-white);`}
`

interface ButtonProps extends BasicButtonProps {
  icon?: string
  children?: any
}

const Button = ({ inverted, icon, children }: ButtonProps): JSX.Element => {
  return (
    <BasicButton inverted={inverted}>
      {icon && (
        <span>
          <img src={icon} alt="Button icon" />
        </span>
      )}
      <span>{children}</span>
    </BasicButton>
  )
}

export default Button
