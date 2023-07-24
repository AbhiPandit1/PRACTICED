import React, { useState } from 'react';
import './UseStateHook.css'

const UseStateHook = () => {
    let [inputValue,setinputValue]=useState("Abhishek")

    function onChange(event){
        const Value=event.target.value
        setinputValue(Value)


    }

    
    
  return (
    

    <div>

        <div firstdiv><input placeholder='Write Something' onChange={onChange}/></div>
        {inputValue}
  </div>
  )
}

export default UseStateHook




















/*   let [counter,setCounter]=useState(0)

    function incre(){
        setCounter(counter+1)
         }
    function Decre(){
        setCounter(counter-1)
    }
    
  return (
    

    <div className='firstdiv'>
    <div><h1 className>Hello World</h1></div>

    <div className='counter' >{counter}</div><button onClick={incre}>Increment</button>
    <div className='counter' >{counter}</div><button onClick={Decre}>Decrement</button>
    
  </div>
  )
}
*/