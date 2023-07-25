import React,{useRef} from 'react';

const UseRef = () => {

    const inputRef=useRef(null);

    const onClick=()=>{
        //console.log(inputRef.current.value)
      // inputRef.current.focus()
      inputRef.current.value=" "

    }

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
     
     <h1>Abhishek</h1>
     <input type='text' placeholder='Ex' ref={inputRef}/>
     <button onClick={onClick}>Change Name</button>
    </div>
  );
};

export default UseRef;

