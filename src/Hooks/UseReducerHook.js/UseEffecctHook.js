
import React from 'react'
import axios from 'axios';
import { useEffect ,useState} from 'react';


const UseEffectHook = () => {
  const[data,setData]=useState('')

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
      console.log(res.data)
      setData(res.data[3].title)

    })
  },[])




  return (
    <div>
      <h1>Hello World {data}</h1>
      
    </div>
  )
}

export default UseEffectHook




























/*import React, { useReducer } from 'react'



const reducer=(state,action)=>{
    switch(action.type){
        case 'INCREMENT':
            return {count:state.count+1,showText:state.showText}
        
        case "toggleShowText":
            return{count:state.count,showText:!showText}
        default:
            return state
    }

}
const UseReducerHook = () => {
    const [state,dispatch]=useReducer(reducer,{count:0,showText:true})



  return (
    <div>
        <h1>{state.count}</h1>
        <h1>{state.showText}</h1>

        <button
        onClick ={()=>{
            dispatch({type:"INCREMENT"})
            dispatch({type:"toggleShowText"})
            
        }}> onClick</button>
        
       
      
    </div>
  )
}

export default UseReducerHook
*/