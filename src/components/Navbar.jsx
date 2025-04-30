import User from '../images/User.jpg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='user bg-box'>
        <img
          src={User}
          alt="user"
        />
        <p>Jim's Blog</p>
      </div>
      <nav className='categories bg-box'>
        <h1 className='nav-heading'>Categories</h1>
        <div className='nav-links'>
          <a href="#" className='nav-link'>
            Top News
          </a>
          <a href="#" className='nav-link'>
            UK 
          </a>
          <a href="#" className='nav-link'>
            World
          </a>
          <a href="#" className='nav-link'>
            Sport
          </a>
          <a href="#" className='nav-link'>
            Technology
          </a>
          <a href="#" className='nav-link'>
            Business
          </a>
          <a href="#" className='nav-link'>
            Entertainment
          </a>
          <a href="#" className='nav-link'>
            Health
          </a>
          <a href="#" className='nav-link'>
            Science
          </a>
          <a href="#" className='nav-link'>
            Featured
          </a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
