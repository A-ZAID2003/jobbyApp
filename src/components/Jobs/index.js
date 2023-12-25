import {component} from 'react'

import Cookies from 'js-cookie'
import jobItem from './component/JobItem'
import JobDetails from './component/JobDetails'

class Jobs extends component {
  state = {
    jobsList: [],
    jobsDetailsList: [],
  }

  componentDidMount() {
    this.getJobsList()
    this.getJobsDetailsList()
  }

  getJobsList = async () => {
    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = 'https://apis.ccbp.in/jobs'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = fetch(apiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.jobsList.map(jobItem => ({
        companyLogoUrl: jobItem.company_logo_url,
        employmentType: jobItem.employment_type,
        id: jobItem.id,
        jobDescription: jobItem.jobDescription,
        location: jobItem.location,
        packagePerAnnum: jobItem.package_per_annum,
        rating: jobItem.rating,
        title: jobItem.title,
      }))
      this.setState({
        jobsList: updatedData,
      })
    }
  }

  getJobsDetailsList = async () => {
    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = 'https://apis.ccbp.in/jobs/:id'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken} `,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.jobsDetailsList.map(itemDetails => ({
        companyLogoUrl: itemDetails.job_details.company_logo_url,
        companyWebsiteUrl: itemDetails.job_details.company_website_url,
        employmentType: itemDetails.job_details.employment_type,
        id: itemDetails.job_details.id,
        imageUrl: itemDetails.skills.image_url,
        name: itemDetails.skills.name,
        description: itemDetails.life_at_company.description,
        descriptionImageUrl: itemDetails.life_at_company.image_url,
        location: itemDetails.location,
        packagePerAnnum: itemDetails.package_per_annum,
        rating: itemDetails.rating,
      }))
    }
  }

  profile = () => (
    <div>
      <img />
      <h1>Rahul Atturuli</h1>
      <p>Lead software engineer and AI-ML expert</p>
    </div>
  )

  render() {
    return (
      <div>
        {this.profile()}
        <div>
          <h1>Type of employment</h1>
          <div>
            <input type="checkbox" />
            <p>Full Time</p>
          </div>
          <div>
            <input type="checkbox" />
            <p>Part Time</p>
          </div>
          <div>
            <input type="checkbox" />
            <p>Freelance</p>
          </div>
          <div>
            <input type="checkbox" />
            <p>Internship</p>
          </div>
        </div>
        <div>
          <h1>Salary Range</h1>
          <div>
            <input type="radio" />
            <p>10 LPA and above</p>
          </div>
          <div>
            <input type="radio" />
            <p>20 LPA and above</p>
          </div>
          <div>
            <input type="radio" />
            <p>30 LPA and above</p>
          </div>
          <div>
            <input type="radio" />
            <p>40 LPA and above</p>
          </div>
        </div>

        <div>
          <input type="search" placeholder="search" />
          <jobItem />
        </div>
      </div>
    )
  }
}

export default Jobs