import './index.css'

const JobItem = props => {
  const {JobItemData} = props
  const {
    companyLogoUrl,
    employmentType,
    id,
    jobDescription,
    location,
    packagePerAnnum,
    rating,
    title,
  } = JobItemData
  return (
    <div>
      <div>
        <img src={companyLogoUrl} />
        <h1>{title}</h1>
        <p>{rating}</p>
      </div>
      <div>
        <img />
        <p>{location}</p>
        <img />
        <p>{employmentType}</p>
        <p>{packagePerAnnum}</p>
      </div>
      <div>
        <h1>Description</h1>
        <p>{jobDescription}</p>
      </div>
    </div>
  )
}

export default JobItem
