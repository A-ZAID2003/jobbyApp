import {Component} from 'react'

import Cookies from 'js-cookie'
import jobItem from '../JobItem'
import JobDetails from '../JobDetails'

class Jobs extends Component {
  state = {
    jobsList: [],
    jobsDetailsList: [],
    profile: [],
  }

  componentDidMount() {
    this.getJobsList()
    this.getJobsDetailsList()
    this.profile()
  }

  profile = async () => {
    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = 'https://apis.ccbp.in/profile'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = fetch(apiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.jobsList.map(profileItem => ({
        name: profileItem.name,
        profileImageUrl: profileItem.profile_image_url,
        shortBio: profileItem.short_bio,
      }))
      this.setState({
        profile: updatedData,
      })
    }
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
      const updatedData = fetchedData.jobsList.map(jobItems => ({
        companyLogoUrl: jobItems.company_logo_url,
        employmentType: jobItems.employment_type,
        id: jobItems.id,
        jobDescription: jobItems.jobDescription,
        location: jobItems.location,
        packagePerAnnum: jobItems.package_per_annum,
        rating: jobItems.rating,
        title: jobItems.title,
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
      this.setState({
        jobsDetailsList: updatedData,
      })
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
