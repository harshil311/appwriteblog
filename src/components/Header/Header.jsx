import React from 'react'
import { Container, Logo, LogoutBtn } from '../index'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
function Header() {

  const authStatus = useSelector((state) => state.auth.status)

  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus
    },
  ]
  
  return (
    <header className='py-3 shadow bg-gray-500'>
    <Container>
      <nav className='flex'>
        <div className='mr-4'>
          <Link to='/'>
            <Logo width="70px"></Logo>
          </Link>
        </div>
        <ul className='flex ml-auto'>
        {navItems.map((item) => item.active 
        ? (
          //component which is repeated in html we assign keys to them
          <li key={item.name}>
          <button
          onClick={() => navigate(item.slug)}
          className='inline-block px-6 py-2
          duration-200 hover:bg-blue-100 rounded-full'>
          {item.name}
          </button>
          </li>
        ) : null)}
        {/* to make the logout button appear to the user */}
        {/* this below syntax is used to check if user is
        authenticated by using authStatus and if yes 
        the && and after that thing written in () 
        will be run */}
        {authStatus && (
          <li>
            <LogoutBtn></LogoutBtn>
          </li>
        )}
        </ul>
      </nav>
    </Container>
    </header>
  )
}

export default Header
