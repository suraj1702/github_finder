import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import UserContainer from '../components/UserContainer';
import Loading from '../components/loading';
function Users() {
  const [users, setusers] = useState([]);
  const [loading, setLoading] =useState(null)
  let BaseURL = "https://api.github.com/users";
  const user = useRef('')


  const AllUsers = async () => {
    try {
      if(user.current.value === ""){
        setLoading(true)
        const getdata = await axios({
          method: "get",
          url: BaseURL,
        });
        // setusers(getdata.data);
        setLoading(null)
      }

    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  const finduser = async () => {
    setLoading(true)
    if (user.current.value !== "") {
      setusers("")
      const res = await fetch(BaseURL + "/" + user.current.value);
      const data = await res.json()
      setusers(() => [data])
      user.current.value = "";
    } else {
      AllUsers();

    }
    setLoading(null)
  }

  useEffect(() => {
    AllUsers();
  }, [setusers])



  return (
    <div className='fs-6'>
      <div className='d-flex justify-content-center align-items-center my-5' >
        <input
          type='text'
          placeholder='search github username..'
          className='px-2 fw-semibold text-l'
          style={{ color: "gray" }}
          ref={user}
        />
        <button className='fw-semibold px-4 h-100 bg-info-subtle border-none'
          onClick={finduser}

        >
          search
        </button>


      </div>
    { loading ? <Loading/>  : <UserContainer users={users} />}


    </div>
  )
}

export default Users;