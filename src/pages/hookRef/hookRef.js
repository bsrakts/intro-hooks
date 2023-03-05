import React, {useRef} from 'react'
import CustomBtn from '../../hooks/useHookRef'
export const HookRef = () => {
const btnRef = useRef()
  return (
    <div className='mt-4'>
      <h3 className='text-2xl'>
        useRef
      </h3>

      <p className='italic text-sm'>--Open Console--</p>
      <br />
      <br />
      
      <button onClick={() => {
        btnRef.current.addEventListener('click',() => {
          alert('Custom Btn Clicked')
        })

        console.log(btnRef.current.innerText)
      }}> Click and look HookRef Value

      </button>
      <br/>

      <CustomBtn ref={btnRef} text="Custom Ref Button" />
    </div>
  )
}