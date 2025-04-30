import Calendar from './Calendar'
import Footer from './Footer'
import Header from './Header'
import Navbar from './Navbar'
import Weather from './Weather'

const News = () => {
  return (
    <div className='news'>
      <Header />
      <div className='news-content'>
        <Navbar />
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
