import React from 'react'

const Header = (props) => {
  return(
    <header>
      <h1 className='title'>Super Game Shelf</h1>
      <nav className='nav'>
       <button onClick={props.scrollBio}>Sign Up</button>
       <button onClick={props.scrollProjects}>Sign In</button>
       <button onClick={props.scrollContact}>Contact</button>
      </nav>
    </header>
  )
}

export default Header