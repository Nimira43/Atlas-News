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
            <img src="" alt="Headline Image" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default News
