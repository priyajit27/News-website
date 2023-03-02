import React from 'react'
import load from './load.gif'
const  Spinner =()=>{
  // render() {
    return (
      <div className='text-center'>
       <img src={load} alt={load}  height={'35px'} className="my-3"/>
      </div>
    )
  }
// }
export default Spinner
