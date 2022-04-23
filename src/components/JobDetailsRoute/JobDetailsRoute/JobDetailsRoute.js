import { Component } from "react";
import Header from "../../commonComponents/Header/Header";

import {
  JobDetailsMainContainer,
  JobItemMainContainer,
  DetailsContainer,
  ImageContainer,
  ImageDetails,
  Image,
  Heading,
  Rating,
  FitlerPartContainer,
  FilterTextContainer,
  FilterText,
  SalaryText,
  DescriptionContainer,
  DescriptionHeading,
  Description,
  JobDetailsContainer,
  SkillsContainer,
  SkillContainer,
  SkillImage,
  SkillName,
  LifeAtCompanyMainContainer,
  LifeDescription,
  LifeImage,
  SimilarJobsContainer,
  SimilarJobItem,
  IconAndTextContainer,
  LocationIcon,
  StarIconContainer,
  StarIcon
} from "./styledComponents";

class JobDetailsRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      title: "",
      url: "",
      websiteUrl: "",
      rating: "",
      location: "",
      packagePerAnnum: "",
      description: "",
      skills: [],
      life: {},
      employmentType: "",
      similarJobs: []
    };
  }

  componentDidMount() {
    this.getDetails();
  }

  getDetails = async () => {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const token = localStorage.getItem("jwt_token");
    const url = `https://apis.ccbp.in/jobs/${id}`;
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    };

    const response = await fetch(url, options);
    if (response.ok === true) {
      const data = await response.json();
      const details = data.job_details;
      const similarJobs = data.similar_jobs;
      this.setState({
        id: details.id,
        title: details.title,
        url: details.company_logo_url,
        websiteUrl: details.company_website_url,
        rating: details.rating,
        location: details.location,
        packagePerAnnum: details.package_per_annum,
        description: details.job_description,
        skills: details.skills.map((item) => ({
          name: item.name,
          imgUrl: item.image_url
        })),
        life: {
          description: details.life_at_company.description,
          url: details.life_at_company.image_url
        },
        employmentType: details.employment_type,
        similarJobs: similarJobs.map((item) => ({
          id: item.id,
          title: item.title,
          logoUrl: item.company_logo_url,
          location: item.location,
          employmentType: item.employment_type,
          jobDescription: item.job_description,
          rating: item.rating
        }))
      });
    }
  };
  goNextPage = (id) => {
    this.getDetails();
  };
  renderSimilarJobs = () => {
    const { similarJobs } = this.state;
    return (
      <SimilarJobsContainer>
        {similarJobs.map((item) => (
          <SimilarJobItem
            id={item.id}
            to={`/jobs/${item.id}`}
            onClick={() => {
              this.goNextPage(item.id);
            }}
          >
            <DetailsContainer>
              <ImageContainer>
                <Image src={item.logoUrl} alt="icon-logo" />
                <ImageDetails>
                  <Heading>{item.title}</Heading>
                  <StarIconContainer>
                    <StarIcon />
                    <Rating>{item.rating}</Rating>
                  </StarIconContainer>
                </ImageDetails>
              </ImageContainer>
            </DetailsContainer>
            <DescriptionContainer>
              <DescriptionHeading>Description</DescriptionHeading>
              <Description>{item.jobDescription}</Description>
            </DescriptionContainer>
            <FitlerPartContainer>
              <FilterTextContainer>
                <IconAndTextContainer>
                  <LocationIcon />
                  <FilterText>{item.location}</FilterText>
                </IconAndTextContainer>
                <IconAndTextContainer>
                  <LocationIcon />
                  <FilterText>{item.employmentType}</FilterText>
                </IconAndTextContainer>
              </FilterTextContainer>
            </FitlerPartContainer>
          </SimilarJobItem>
        ))}
      </SimilarJobsContainer>
    );
  };

  render() {
    const {
      similarJobs,
      id,
      title,
      url,
      websiteUrl,
      rating,
      location,
      packagePerAnnum,
      description,
      skills,
      life,
      employmentType
    } = this.state;
    return (
      <JobDetailsMainContainer>
        <Header />
        <JobDetailsContainer>
          <JobItemMainContainer>
            <DetailsContainer>
              <ImageContainer>
                <Image src={url} alt="icon-logo" />
                <ImageDetails>
                  <Heading>{title}</Heading>
                  <StarIconContainer>
                    <StarIcon />
                    <Rating>{rating}</Rating>
                  </StarIconContainer>
                </ImageDetails>
              </ImageContainer>
              <FitlerPartContainer>
                <FilterTextContainer>
                  <IconAndTextContainer>
                    <LocationIcon />
                    <FilterText>{location}</FilterText>
                  </IconAndTextContainer>
                  <IconAndTextContainer>
                    <LocationIcon />
                    <FilterText>{employmentType}</FilterText>
                  </IconAndTextContainer>
                </FilterTextContainer>

                <SalaryText>{packagePerAnnum}</SalaryText>
              </FitlerPartContainer>
            </DetailsContainer>
            <DescriptionContainer>
              <DescriptionHeading>Description</DescriptionHeading>
              <Description>{description}</Description>
            </DescriptionContainer>
            <h4>Skills</h4>
            <SkillsContainer>
              {skills.map((item) => (
                <SkillContainer>
                  <SkillImage src={item.imgUrl} alt="logo" />

                  <SkillName>{item.name}</SkillName>
                </SkillContainer>
              ))}
            </SkillsContainer>
            <h4>Life at Companu</h4>
            <LifeAtCompanyMainContainer>
              <LifeDescription>{life.description}</LifeDescription>
              <LifeImage src={life.url} />
            </LifeAtCompanyMainContainer>
          </JobItemMainContainer>
          {this.renderSimilarJobs()}
        </JobDetailsContainer>
      </JobDetailsMainContainer>
    );
  }
}
export default JobDetailsRoute;
