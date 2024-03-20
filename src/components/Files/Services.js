import React from 'react'
import { NavLink } from 'react-router-dom'
const Services = () => {
  return (
    <>
     <div className="flex mx-24 my-12 font-serif text-2xl">
        <span>
          <NavLink to="/">Home</NavLink>
        </span>
        /<h2>Gardening Tools</h2>
      </div> 
    </>
  )
}

export default Services;
