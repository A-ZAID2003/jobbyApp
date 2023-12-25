import './index.css'

const JobDetails = props => {
  const {jobDetailsData} = props
  const {
    companyLogoUrl,
    companyWebsiteUrl,
    employmentType,
    imageUrl,
    name,
    description,
    descriptionImageUrl,
    location,
    packagePerAnnum,
    rating,
  } = jobDetailsData
  return (
    <div>
      <div>
        <img />
        <div>
          <h1>{name}</h1>
          <p>{rating}</p>
        </div>
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
        <p>{description}</p>
        <h1>skills</h1>
        <div>
          <div>
            <h1>life at company</h1>
            <p>{description}</p>
          </div>
          <img />
        </div>
      </div>
      <h1>Similar Jobs</h1>
    </div>
  )
}

export default JobDetails
