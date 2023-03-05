import React from 'react'
import AnotherComp from './anotherComp';
import { useHookMemo } from '../../hooks/useHookMemo'

export const HookMemo = () => {
  const {
    text,
    setText,
    data,
    setData,
    memoData,
    newMemoData
  } = useHookMemo()

  return (
    <div className='mt-4'>
      <h3 className='text-2xl'>
        useMemo
      </h3>

      <p className='italic text-sm'>--Open Console--</p>
      <br />

      <input value={text} onChange={(e) => {
        setText(e.target.value)
      }} />
      <br/>
      <br />
      <p>Text value: {text}</p>

      < AnotherComp />
      <br />
      <hr />
      <div className='my-8'>
        <button className='mt-4' onClick={() => setData ("a "+ data)}>Data Update</button>
        <p>Data Value without useMemo(useState) = {data}</p>
      </div>

      <div>
        <p>Data Value using useMemo hook with dependency array(useState) : {memoData}</p>
      </div>
      <br/>
      <div>
        <p className='mb-64'>Data Value using useMemo hook with text(useState) : {newMemoData}</p>
      </div>
    </div>
  )
}