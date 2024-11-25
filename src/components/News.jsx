import business from '../images/business.jpg'
import world from '../images/world.jpg'
import entertainment from '../images/entertainment.jpg'
import health from '../images/health.jpg'
import science from '../images/science.jpg'
import sport from '../images/sport.jpg'
import tech3 from '../images/tech-3.jpg'
// import tech2 from '../images/tech-2.jpg'
// import tech1 from '../images/tech-1.jpg'

const News = () => {
  return (
    <div className='news-app'>
      <div className='news-header'>
        <h1 className='logo'>Global News</h1>
      </div>
      <div className="news-content">
        <nav className="navbar">
          <h1 className='nav-heading'>Categories</h1>
          <div className="categories">
            <a href="#" className="nav-link">General</a>
            <a href="#" className="nav-link">World</a>
            <a href="#" className="nav-link">Entertainment</a>
            <a href="#" className="nav-link">Sport</a>
            <a href="#" className="nav-link">Technology</a>
            <a href="#" className="nav-link">Business</a>
            <a href="#" className="nav-link">Health</a>
            <a href="#" className="nav-link">Science</a>
            <a href="#" className="nav-link">National</a>
          </div>
        </nav>
        <div className="news-section">
          <div className="headline">
            <img src={business} alt="Shanghai" />
            <h2 className="headline-title">Shanghai Braces for Impact as US Tariffs Loom</h2>
          </div>
          <div className="news-grid">
            <div className="news-grid-item">
              <img src={world} alt="Ukraine" />
              <h3>Russia Launches Drone Strike on Kyiv Amidst Escalating Tensions</h3>
            </div>
            <div className="news-grid-item">
              <img src={world} alt="Ukraine" />
              <h3>Russia Launches Drone Strike on Kyiv Amidst Escalating Tensions</h3>
            </div>
            <div className="news-grid-item">
              <img src={world} alt="Ukraine" />
              <h3>Russia Launches Drone Strike on Kyiv Amidst Escalating Tensions</h3>
            </div>
            <div className="news-grid-item">
              <img src={world} alt="Ukraine" />
              <h3>Russia Launches Drone Strike on Kyiv Amidst Escalating Tensions</h3>
            </div>
            <div className="news-grid-item">
              <img src={world} alt="Ukraine" />
              <h3>Russia Launches Drone Strike on Kyiv Amidst Escalating Tensions</h3>
            </div>
            <div className="news-grid-item">
              <img src={world} alt="Ukraine" />
              <h3>Russia Launches Drone Strike on Kyiv Amidst Escalating Tensions</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News
