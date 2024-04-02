import styled from '@emotion/styled'
import React from 'react'

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  error?: string
}

const BaseInput = function (
  { error, title, ...restProps }: InputProps,
  ref: React.LegacyRef<HTMLInputElement>
) {
  return (
    <Container>
      <div>
        <Label>{title}</Label>
        <div>
          <input ref={ref} {...restProps} />
          {error && <TextError>{error}</TextError>}
        </div>
      </div>
    </Container>
  )
}

export const Input = React.forwardRef(BaseInput)

const Container = styled.div`
  display: inline-block;
  margin-right: 40px;
  & > div {
    display: flex;
  }
`
const Label = styled.span`
  font-style: italic;
  font-weight: 600;
  display: inline-block;
  margin-right: 20px;
`
const TextError = styled.p`
  margin: 0;
  margin-top: 10px;
  color: red;
`
