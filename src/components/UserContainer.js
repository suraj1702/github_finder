import React from 'react'
import { Link } from 'react-router-dom';

function UserContainer({ users }) {

  return (
    <div className='d-flex gap-5 flex-wrap justify-content-center py-5'>
      {
        users &&
        users.map((items, index) => (
          items?.login && (
            <div key={index} className='d-flex border border-gray p-3 flex-column align-items-center' style={{ width: "200px" }}>
              <img src={items?.avatar_url} className='rounded-circle mb-3 border border-gray' style={{ width: "50px" }} />
              <p className='fs-6'> {items?.login}</p>
              <p className='fs-6 text-success'> {items?.name}</p>
              <Link to={`${items?.login}`}>
                <span className='btn btn-info my-3 fs-sm py-2 px-2 rounded'>
                  view
                </span>
              </Link>
            </div>

          )

        )
        )
      }
    </div>

  )
}

export default UserContainer;