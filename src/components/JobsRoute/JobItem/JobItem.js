import {
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
  StarIconContainer,
  StarIcon,
  LocationIcon,
  IconAndTextContainer
} from "./styledComponents";

const JobItem = (props) => {
  const { details } = props;
  const id = details.id;
  const title = details.title;
  const rating = details.rating;
  const url = details.logo;
  const location = details.location;
  const description = details.description;
  const employementType = details.employementType;
  const packageValue = details.package;
  return (
    <JobItemMainContainer to={`/jobs/${id}`}>
      <DetailsContainer>
        <ImageContainer>
          <Image src={url} alt="icon-logo" />
          <ImageDetails>
            <Heading>{title}</Heading>
            <StarIconContainer>
              <StarIcon /> <Rating>{rating}</Rating>
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
              <FilterText>{employementType}</FilterText>
            </IconAndTextContainer>
          </FilterTextContainer>
          <SalaryText>{packageValue}</SalaryText>
        </FitlerPartContainer>
      </DetailsContainer>
      <DescriptionContainer>
        <DescriptionHeading>Description</DescriptionHeading>
        <Description>{description}</Description>
      </DescriptionContainer>
    </JobItemMainContainer>
  );
};

export default JobItem;
