import Cookies from 'js-cookie'
import {Component} from 'react'
import './index.css'

class Profile extends Component {
  state = {
    obj: {},
  }

  fetchApi = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/profile'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    let updateObj = ''
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)

    if (response.ok) {
      updateObj = {
        name: data.profile_details.name,
        profileImgUrl: data.profile_details.profile_image_url,
        shortBio: data.profile_details.short_bio,
      }
      this.setState({obj: updateObj})
      console.log(updateObj)
    }
    // console.log(jwtToken)
  }

  render() {
    const {obj} = this.state
    return (
      this.fetchApi(),
      (
        <div>
          <div className="bio">
            <img src={obj.profileImgUrl} alt={obj.name} />
            <h1>{obj.name}</h1>
            <p>{obj.shortBio}</p>
          </div>
        </div>
      )
    )
  }
}

export default Profile
