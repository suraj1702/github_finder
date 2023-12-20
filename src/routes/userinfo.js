import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Tabs from '../components/tabs';
import Repos from '../components/Repos';
import Events from '../components/Events';


function Userinfo() {
  const { pathname } = useLocation()
  const [user, setUser] = useState([])
  const [type, setType] = useState("repos")
  const nevigate = useNavigate();
  let BaseURL = "https://api.github.com/users";


  const getuserinfo = async () => {
    const config = await axios({
      method: "get",
      url: BaseURL + pathname

    })
    // console.log(config.data)
    setUser(() => [config.data])
  }


  useEffect(() => {
    getuserinfo()
  }, [pathname,type])
  return (
    <div className='py-5'>
      <button
        onClick={() => nevigate("/")}
        className='btn fw-bold btn-light active'>
        back
      </button>

      {
        user && user.map((item, index) => (
          <div key={index} className='d-flex justify-content-center gap-10'>
            <img src={item.avatar_url}
              className=' border border-4 border-info'
              style={{ width: "250px" }}
            />

            <div className='fs-2 px-3'>
              <p className='fs-4 pb-4'>{item.name}</p>
              <p className='fs-6'>
                <span style={{ opacity: "0.5" }}> login_name</span > : {" "} {item?.login}
              </p>

              <p className='fs-6'>
                <span style={{ opacity: "0.5" }}> followers</span > : {" "} {item?.followers}
              </p>

              <p className='fs-6'>
                <span style={{ opacity: "0.5" }}> foliowings</span > : {" "} {item?.following}
              </p>

              <p className='fs-6'>
                <span style={{ opacity: "0.5" }}> public_repositories</span > : {" "} {item?.public_repos}
              </p>
              <a href={item?.html_url} className='btn btn-light active' target=''>visit</a>
            </div>
          </div>
        ))
      }

      <div className='d-flex justify-content-evenly border-bottom pb-4 fs-6 '
       style={{marginTop:"140px"}}
      >


        <button  onClick={()=>{setType("repos")}} className={`${type === "repos" && "dim" }`} style={{background:"black",border:"none",color:"white"}}>Repositories</button>
        <button  onClick={()=>{setType("Recevied_events")}} className={`${type === "Recevied_events" && "dim" }`} style={{background:"black",border:"none",color:"white"}}>Activity</button>
        <button onClick={()=>{setType("followers")}} className={`${type === "followers" && "dim" }`} style={{background:"black",border:"none",color:"white"}}>followers</button>

            {/* <Tabs type={type} setType={setType}/> */}
      
      </div>
          

      {
        type === "repos" && (
          <div>
            <Repos/>
          </div>
        )
      }

{
        type === "Recevied_events" && (
          <div>
            <Events/>
          </div>
        )
      }

    </div>
  )
}

export default Userinfo;