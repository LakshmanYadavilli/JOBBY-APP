import Header from '../Header'
import './index.css'

const Home = props => {
  const findJobs = () => {
    const {history} = props
    history.replace('/jobs')
  }
  return (
    <div className="home">
      <Header />
      <div className="text">
        <h1>
          Find The Job That <br /> Fits Your Life
        </h1>
        <p>
          Millions of people are searching for job, salary <br /> information,
          company reviews. Fid the job that fits your <br /> abilities and
          potential.
        </p>
        <button type="button" onClick={findJobs}>
          Find Jobs
        </button>
      </div>
    </div>
  )
}

export default Home
