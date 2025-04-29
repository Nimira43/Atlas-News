import Calendar from './Calendar'
import Footer from './Footer'
import Header from './Header'
import Weather from './Weather'

const News = () => {
  return (
    <div className='news'>
      <Header />
      <div className='news-content'>
        <div className='navbar'>
          <div className='user bg-box'>User</div>
          <nav className='categories bg-box'>Categories</nav>
        </div>
        <div className='news-section'>
          <div className='headline bg-box'>Headline</div>
          <div className='news-grid bg-box'>News Grid</div>
        </div>
        <div className='my-blogs bg-box'>My Blogs</div>
        <div className='weather-calendar'>
          <Weather />
          <Calendar />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default News
