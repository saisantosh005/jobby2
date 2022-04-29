import { Component } from "react";
import Cookies from "js-cookie";

// import Loader from 'react-loader-spinner'

// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {
  ProfileContainer,
  Image,
  Name,
  Bio,
  ButtonContainer,
  Button
} from "./styledComponents";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      imgUrl: "",
      bio: "",
      error: false,
      isLoading: true
    };
  }
  componentDidMount() {
    this.getDetails();
  }

  getDetails = async () => {
    const url = "https://apis.ccbp.in/profile";
    // const jwtToken = Cookies.get("jwt_token");
    const jwtToken = localStorage.getItem("jwt_token");

    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwtToken}`
      }
    };
    const response = await fetch(url, options);

    if (response.ok === true) {
      const data = await response.json();
      console.log(data);
      this.setState({
        name: data.profile_details.name,
        imgUrl: data.profile_details.profile_image_url,
        bio: data.profile_details.short_bio,
        error: false,
        isLoading: false
      });
    } else {
      this.setState({
        isLoading: false,
        error: true
      });
    }
  };

  render() {
    const { name, imgUrl, bio, error, isLoading } = this.state;
    return (
      <>
        {isLoading === true ? (
          <div>Loading...</div>
        ) : error === true ? (
          <ButtonContainer>
            <Button onClick={this.getDetails}>Retry</Button>
          </ButtonContainer>
        ) : (
          // <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          <ProfileContainer>
            <Image src={imgUrl} alt="profile" />
            <Name>{name}</Name>
            <Bio>{bio}</Bio>
          </ProfileContainer>
        )}
      </>
    );
  }
}

export default Profile;
