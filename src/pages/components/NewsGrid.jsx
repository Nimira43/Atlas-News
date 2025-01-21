import {Entertainment, Health, Sport, Science, World, Tech4} from '../../utils/imageIndex'

export default function NewsGrid() {
  return (
    <div className="news-grid">
      <div className="news-grid-item">
        <img src={World} alt="Ukraine" />
        <h3>Russia Launches Deadly Strike on Kyiv Amidst Escalating Tensions</h3>
      </div>
      <div className="news-grid-item">
        <img src={Tech4} alt="Nvidia" />
        <h3>Nvidia Launches Zeus, the Next Generation GPU.</h3>
      </div>
      <div className="news-grid-item">
        <img src={Entertainment} alt="Oasis" />
        <h3>Oasis Confirm 10 New Tour Dates for October 2025</h3>
      </div>
      <div className="news-grid-item">
        <img src={Sport} alt="Grand National" />
        <h3>Dark Griffin Confirmed to Run in the 2025 Grand National</h3>
      </div>
      <div className="news-grid-item">
        <img src={Health} alt="Salad" />
        <h3>Discover the Power of a Balanced Salad for Optimal Health</h3>
      </div>
      <div className="news-grid-item">
        <img src={Science} alt="Flu" />
        <h3>Officials Assess Threat of H5N1 Avian Flu</h3>
      </div>
    </div>
  )
}
