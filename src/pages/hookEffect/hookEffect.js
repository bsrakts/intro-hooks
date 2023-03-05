import React from 'react'
import { useHookEffect } from '../../hooks/useHookEffect'
import './hookEffect.css'

export const HookEffect = () => {
  const {
    data,
    setData,
    value,
    setValue
  } = useHookEffect()
  return (
    <div className='hookEffect'>
      <h3 className='text-2xl'>
        useEffect
      </h3>
      <p className='italic text-sm'>--Open Console--</p>
      <br/>
      <input type="text" value={data} onChange={(e) => { setData(e.target.value) }} placeholder="enter any data.."/>
      <br />
      <br />
      <button onClick={() => setValue(value + 2)}>Value Change</button>
      <br/>
        Value: {value}
      <br />
        Data: {data}
    </div>
  )
}
