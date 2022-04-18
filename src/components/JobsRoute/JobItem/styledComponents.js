import styled from "styled-components";

const JobItemMainContainer = styled.div`
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
  Description
};
