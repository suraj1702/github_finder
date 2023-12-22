import React from 'react'

function Tabs({type,setType}) {
  return (
    <div>
         <button  onClick={()=>{setType("repos")}} className={`${type === "repos" && "dim" }`} style={{background:"black",border:"none",color:"white"}}>Repositories</button>
        <button  onClick={()=>{setType("received_events")}} className={`${type === "received_events" && "dim" }`} style={{background:"black",border:"none",color:"white"}}>Activity</button>
        <button onClick={()=>{setType("followers")}} className={`${type === "followers" && "dim" }`} style={{background:"black",border:"none",color:"white"}}>followers</button> 
    </div>
  )
}

export default Tabs;