import Navbar from './components/Navbar'
import Headline from './components/Headline'
import NewsGrid from './components/NewsGrid'
import Footer from './components/Footer'
import '../css/news.css'

const News = () => {
  return (
    <div className='news-app'>
      <div className='news-header'>
        <h1 className='logo'>Atlas News</h1>
      </div>
      <div className="news-content">
        <Navbar />
        <div className="news-section">
          <Headline />
          <NewsGrid />        
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default News

