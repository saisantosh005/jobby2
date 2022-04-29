import { Component } from "react";
import Header from "../../commonComponents/Header/Header";
import Profile from "../Profile/Profile";
import JobItem from "../JobItem/JobItem";
// import Loader from 'react-loader-spinner'

// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import {
  JobRouteMainContainer,
  JobRouteDetailsContainer,
  EmployementListContainer,
  Heading,
  LableInputContainer,
  Input,
  Label,
  JobListContainer,
  FilterAndJobListContainer,
  Text,
  NoJobDetails,
  HeadingTwo,
  SpecialImage,
  ErrorContainer,
  Button
} from "./styledComponents";

class JobRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employementType: [],
      salaryRange: "",
      searchValue: "",
      jobs: [],
      error: false,
      isLoading: true
    };
  }
  componentDidMount() {
    this.getJobs();
  }
  getJobs = async () => {
    this.setState({
      isLoading: true
    });
    const token = localStorage.getItem("jwt_token");
    const url = "https://apis.ccbp.in/jobs";
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
    const response = await fetch(url, options);
    if (response.ok === true) {
      const data = await response.json();
      const jobs = data.jobs.map((item) => ({
        id: item.id,
        title: item.title,
        rating: item.rating,
        logo: item.company_logo_url,
        location: item.location,
        description: item.job_description,
        employementType: item.employment_type,
        package: item.package_per_annum
      }));
      this.setState({
        jobs: jobs,
        error: false,
        isLoading: false
      });
    } else {
      this.setState({
        error: true
      });
    }
  };

  getFilterList = async () => {
    this.setState({
      isLoading: true
    });
    const { employementType, salaryRange, searchValue } = this.state;
    const stringList = employementType.join(",");
    const url = `https://apis.ccbp.in/jobs?employment_type=${stringList}&minimum_package=${salaryRange}&search=${searchValue}`;
    const token = localStorage.getItem("jwt_token");

    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
    const response = await fetch(url, options);
    if (response.ok === true) {
      const data = await response.json();
      const jobs = data.jobs.map((item) => ({
        id: item.id,
        title: item.title,
        rating: item.rating,
        logo: item.company_logo_url,
        location: item.location,
        description: item.job_description,
        employementType: item.employment_type,
        package: item.package_per_annum
      }));
      this.setState({
        jobs: jobs,
        isLoading: false
      });
    } else {
      this.setState({
        error: true,
        isLoading: false
      });
    }
  };

  onChangeEmploymentFilter = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;
    const { employementType } = this.state;
    if (isChecked === true) {
      this.setState(
        {
          employementType: [...employementType, value]
        },
        this.getFilterList
      );
    } else {
      const newList = employementType.filter((item) => item !== value);
      this.setState(
        {
          employementType: [...newList]
        },
        this.getFilterList
      );
    }
  };

  renderEmployementList = () => {
    const employementType = [
      { id: 1, name: "Full Time", value: "FULLTIME", checked: false },
      { id: 2, name: "part Time", value: "PARTTIME", checked: false },
      { id: 3, name: "Free Lance", value: "FREELANCE", checked: false },
      { id: 4, name: "Internship", value: "INTERNSHIP", checked: false }
    ];
    return (
      <EmployementListContainer>
        <Heading>Type of Employement</Heading>
        {employementType.map((item) => (
          <LableInputContainer>
            <Input
              id={item.id}
              type="checkbox"
              name="employee"
              value={item.value}
              // checked={item.checked}
              onChange={this.onChangeEmploymentFilter}
            />
            <Label htmlFor={item.id}>{item.name}</Label>
          </LableInputContainer>
        ))}
      </EmployementListContainer>
    );
  };
  onChangeSalaryFilter = (event) => {
    const salary = parseInt(event.target.value.split(" ")[0]);
    this.setState(
      {
        salaryRange: salary
      },
      this.getFilterList
    );
  };

  renderSalaryRange = () => {
    const salaryRange = [
      { id: 5, name: "10 LPA and above", value: "1000000" },
      { id: 6, name: "20 LPA and above", value: "2000000" },
      { id: 7, name: "30 LPA and above", value: "3000000" },
      { id: 8, name: "40 LPA and above", value: "4000000" }
    ];
    return (
      <EmployementListContainer>
        <Heading>Salary Range</Heading>
        {salaryRange.map((item) => (
          <LableInputContainer>
            <Input
              id={item.id}
              type="radio"
              name="salary"
              value={item.value}
              onChange={this.onChangeSalaryFilter}
            />
            <Label htmlFor={item.id}>{item.name}</Label>
          </LableInputContainer>
        ))}
      </EmployementListContainer>
    );
  };
  renderJobListContainer = () => {
    const { jobs, error } = this.state;

    return (
      <JobListContainer>
        {error ? (
          this.renderError()
        ) : jobs.length > 0 ? (
          jobs.map((item) => <JobItem details={item} />)
        ) : (
          <NoJobDetails>
            <SpecialImage src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png " />
            <HeadingTwo>No Jobs Found</HeadingTwo>
            <Text>We're sorry, the page you requested could not be found.</Text>
          </NoJobDetails>
        )}
      </JobListContainer>
    );
  };
  renderError = () => (
    <ErrorContainer>
      <SpecialImage src="https://assets.ccbp.in/frontend/react-js/failure-img.png" />
      <HeadingTwo>Oops! Some thing went wrong</HeadingTwo>
      <Text>We cannot seem to find the page you are looking for.</Text>
      <Button onClick={this.getJobs}>Retry</Button>
    </ErrorContainer>
  );
  render() {
    const { isLoading } = this.state;
    return (
      <JobRouteMainContainer>
        <Header />
        <FilterAndJobListContainer>
          <JobRouteDetailsContainer>
            <Profile />
            {this.renderEmployementList()}
            {this.renderSalaryRange()}
          </JobRouteDetailsContainer>
          {isLoading ? (
            <div>Loading</div>
          ) : (
            // <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
            //
            this.renderJobListContainer()
          )}
        </FilterAndJobListContainer>
      </JobRouteMainContainer>
    );
  }
}
export default JobRoute;
