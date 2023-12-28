import React from 'react'
import {format} from "timeago.js"

function Events({events}) {
  return (
    <>
    {
      events?.map((item,index)=>(
        <div key={index}>
          <img src={item?.actor?.avatar_url} className='rounded-circle mt-2 d-flex word-wrap'
          style={{width:"10%"}}
          />
            <p style={{fontSize:"15px"}}>

              {item?.actor?.login} {item?.type}
              <br/>

              {item?.repo?.name}
              <br/>
              <span className='text-sm'>{format(item?.created_at)}</span>
            </p>
          
        </div>
      ))
    }
    
    </>
  )
}

export default Events