import React from 'react'

function Repos({ users }) {

  return (
    <>
      {
        users.map((value, index) => (
          <div key={index}
            className='bg-gray p-3'>
            <a href={value?.html_url} target='_blank' className=' fs-semibold text-decoration-none'>
              {value?.full_name}
            </a>
            <div className='d-flex gap-5'>
              <p className='fs-5 fw-semibold'> {value?.language}</p>
              <p className='fs-5 fw-semibold'>forks : {value?.forks}</p>
              <p className='fs-5 fw-semibold'>stars : {value?.stargazers_count}</p>
            </div>
          </div>
        ))
      }
    </>
  )
}

export default Repos;