import User from '../images/User.jpg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='user bg-box'>
        <img src={User} alt="user" />
        <p>Jim's Blog</p>
      </div>
      <nav className='categories bg-box'>Categories</nav>
    </div>
  )
}

export default Navbar
