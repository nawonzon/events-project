import React from 'react'

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  error?: string
}

const BaseInput = function (
  { error, title, ...restProps }: InputProps,
  ref: React.LegacyRef<HTMLInputElement>
) {
  return (
    <div>
      {title} <input ref={ref} {...restProps} />
      {error && <p>{error}</p>}
    </div>
  )
}

export const Input = React.forwardRef(BaseInput)
