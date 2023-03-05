import React, { forwardRef } from 'react'

const CustomBtn = forwardRef((props, ref) => {
  return (
    <button ref={ref}>{props.text}</button>
  )
}
)

export default CustomBtn