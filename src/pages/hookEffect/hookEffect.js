import React from 'react'
import { useCounterv2 } from '../../hooks/useCounterv2'
import './hookEffect.css'

export const HookEffect = () => {
  const {
    data,
    setData,
    value,
    setValue
  } = useCounterv2()
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
