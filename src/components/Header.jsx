import { PiMagnifyingGlassLight } from 'react-icons/pi'

const Header = () => {
  return (
    <header className='news-header'>
      <h1 className='logo'>Nova News</h1>
      <div className='search-bar'>
        <form>
          <input
            type="text"
            placeholder="Search"
          />
          <button type='submit'>
            <PiMagnifyingGlassLight />
          </button>
        </form>
      </div>
    </header>
  )
}

export default Header
