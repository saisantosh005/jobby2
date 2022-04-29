import styled from "styled-components";
import { Link } from "react-router-dom";

import { AiFillStar } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

const JobDetailsMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #121212;
`;
const JobDetailsContainer = styled.div`
  padding: 20px;
`;
const JobItemMainContainer = styled.div`
  text-decoration: none;
  padding: 10px;
  color: #ffffff;

  background-color: #272727;

  border-radius: 20px;
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
  font-size: 20px;
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
const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
`;
const SkillContainer = styled.div`
  display: flex;
  align-items: center;
  list-style-type: none;
  margin: 0px;
  margin-right: 40px;
`;
const SkillImage = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;
const SkillName = styled.p`
  font-size: 15px;
`;

const LifeAtCompanyMainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    justify-content: space-between;
  }
`;
const LifeDescription = styled.p`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 60%;
  }
`;
const LifeImage = styled.img`
  width: 100%;
  height: 200px;
  @media screen and (min-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

const SimilarJobsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;
const SimilarJobItem = styled(Link)`
  text-decoration: none;
  width: 100%;
  padding: 10px;
  color: #ffffff;
  background-color: #272727;
  border-radius: 20px;
  margin: 10px;
  @media screen and (min-width: 768px) {
    min-width: 100px;
    max-width: 300px;
  }
`;

const IconAndTextContainer = styled.div`
  display: flex;
  align-items: center;
`;
const LocationIcon = styled(GoLocation)`
  margin-right: 3px;
`;
const StarIconContainer = styled.div`
  display: flex;
  align-items: center;
`;
const StarIcon = styled(AiFillStar)`
  color: #fbbf24;
  margin-right: 5px;
`;
const NoJobDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SpecialImage = styled.img`
  width: 90%;
  padding: 20px;
`;

const HeadingTwo = styled.h1`
  text-align: center;
  color: #ffffff;
`;
const Text = styled.p`
  color: #ffffff;
  text-align: center;
`;
const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  background-color: #6366f1;
  color: #ffffff;
  border: none;
  border-radius: 3px;
  padding: 8px 20px;
`;
export {
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
  StarIcon,
  ErrorContainer,
  SpecialImage,
  HeadingTwo,
  Text,
  Button
};
