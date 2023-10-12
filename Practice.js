import React, { useState } from 'react';
import './Practice.css';

const Practice = () => {
  const [first , setFirst] = useState("")
  const [last , setLast] = useState("")
  const [email , setEmail] = useState("")
  const [passw , setPassw] = useState("")
  const [err,setErr] = useState("")
  function handle (e){
    setErr("")

    if(!first || !last || !email || !passw){
      return setErr("please Fill every input field")
    }
    if(!email.includes("@") || !email.includes(".")){
      return setErr("please give valid email")
    }

  }


  return (
    <div className='main'>
        <div className='left1'>
          Learn to paint by watching others
        </div>
        <div className='left2'>
          See how experienced painters create art in real-time. Watching scripted tutorials is great, but understanding how artists think is invaluable.
        </div>
    
      
        <div className='right1'>
        </div>
          
            <div className='p1'>
              <div className='span1'>Try it free for 7 days then<div className='span2'>$20/mo thereafter</div></div>
              </div>
        <div className='box'>
    
        </div>
        <p className='err'>{err}</p>
        <input
  type="text"
  className="inp1"
  value={first}
  onChange={e=>setFirst(e.target.value)}
  style={{ zIndex: first ? 99 : 0 }}
/>

        <div className='placeholder1'>
        First Name
        </div>
        <input type ="text" 
         className='inp2'
         value={last}
  onChange={e=>setLast(e.target.value)}
  style={{ zIndex: last ? 99 : 0 }} />
        <div className='placeholder2'>
        Last Name
        </div>
        <input type ="text" className='inp3'
              value={email}
              onChange={e=>setEmail(e.target.value)}
              style={{ zIndex: email ? 99 : 0 }}
        />
        <div className='placeholder3'>
        Email Address
        </div>
        <input type ="Password" className='inp4'
         value={passw}
         onChange={e=>setPassw(e.target.value)}
         style={{ zIndex: passw ? 99 : 0 }}
        
        />
        <div className='placeholder4'>
        Password
        </div>
        <div className='btn' onClick={handle} >
        </div>
        <div className='txt'onClick={handle}>
        CLAIM YOUR FREE TRAIL
        </div>
        <div className='footer'>
          <span className='t1'>
          By clicking the button you are accepting 
          </span>
          <span className='t2'>
          Terms & Conditions
          </span>

        </div>
      
      </div>
        
     
    
  );
}

export default Practice;
