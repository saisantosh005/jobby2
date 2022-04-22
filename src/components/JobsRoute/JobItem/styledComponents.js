import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

const JobItemMainContainer = styled(Link)`
  text-decoration: none;
  padding: 10px;
  color: #ffffff;
`;
const DetailsContainer = styled.div`
  border-bottom: 2px solid #64748b;
`;
const ImageContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Image = styled.img`
  width: 40px;
  height: 40px;
`;
const ImageDetails = styled.div`
  margin-left: 10px;
`;
const Heading = styled.h1`
  color: #ffffff;
  padding: 0px;
  margin: 0px;
`;
const Rating = styled.p`
  color: #ffffff;
  padding: 0px;
  margin: 0px;
`;
const FitlerPartContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FilterTextContainer = styled.div`
  display: flex;
`;
const IconAndTextContainer = styled.div`
  display: flex;
  align-items: center;
`;
const LocationIcon = styled(GoLocation)`
  margin-right: 3px;
`;
const JobIcon = styled.div;
const FilterText = styled.p`
  margin-right: 10px;
`;
const SalaryText = styled.p`
  font-weight: bold;
`;
const DescriptionContainer = styled.div``;
const DescriptionHeading = styled.p`
  font-size: 20px;
`;
const Description = styled.p``;
const StarIconContainer = styled.div`
  display: flex;
  align-items: center;
`;
const StarIcon = styled(AiFillStar)`
  color: #fbbf24;
  margin-right: 5px;
`;
export {
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
  JobIcon,
  IconAndTextContainer
};
