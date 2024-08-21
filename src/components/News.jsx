import techImage from '../images/tech.jpg'
import enterImage from '../images/entertainment.jpg'
import healthImage from '../images/health.jpg'
import nationImage from '../images/nation.jpg'
import scienceImage from '../images/science.jpg'
import sportImage from '../images/sport.jpg'
import worldImage from '../images/world.jpg'
import './News.css'

const News = () => {
  return (
    <div className="news-app">
      <div className="news-header">
        <h1 className="logo">The World Today</h1>
      </div>
      <div className="news-content">
        <nav className="navbar">
          <h1 className="nav-heading">Categories</h1>
          <div className="categories">
            <a href="#" className="nav-link">General</a>
            <a href="#" className="nav-link">World</a>
            <a href="#" className="nav-link">National</a>
            <a href="#" className="nav-link">Sport</a>
            <a href="#" className="nav-link">Technology</a>
            <a href="#" className="nav-link">Science</a>
            <a href="#" className="nav-link">Health</a>
            <a href="#" className="nav-link">Business</a>
            <a href="#" className="nav-link">Entertainment</a>
          </div>
        </nav>
        <div className="news-section">
          <div className="headline">
            <img src={techImage} alt="Headline Image" />
            <h2 className="headline-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius.</h2>
          </div>
          <div className="news-grid">
            <div className="news-grid-item">
              <img src={worldImage} alt="News Image" />
              <h3>Lorem ipsum dolor sit amet.</h3>
            </div>
            <div className="news-grid-item">
              <img src={sportImage} alt="Sport Image" />
              <h3>Lorem ipsum dolor sit amet.</h3>
            </div>
            <div className="news-grid-item">
              <img src={scienceImage} alt="Science Image" />
              <h3>Lorem ipsum dolor sit amet.</h3>
            </div>
            <div className="news-grid-item">
              <img src={enterImage} alt="Entertainment Image" />
              <h3>Lorem ipsum dolor sit amet.</h3>
            </div>
            <div className="news-grid-item">
              <img src={healthImage} alt="Health Image" />
              <h3>Lorem ipsum dolor sit amet.</h3>
            </div>
            <div className="news-grid-item">
              <img src={nationImage} alt="National Image" />
              <h3>Lorem ipsum dolor sit amet.</h3>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <p className="copyright">
          <span>The News Today</span>
          <p>&copy; All Rights Reserved. Designed by NimiraTech</p>
        </p>
      </footer>
    </div>
  )
}

export default News
