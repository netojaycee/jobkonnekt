import React, { useEffect, useState } from "react";
import JobCard from "./JobCard";

const jobs = [
  {
    title: "Sales Team Lead",
    company: "ShortComingsNG",
    salary: "₦300,000 - ₦350,000",
    jobType: "Full-Time",
    location: "Lagos State, Nigeria",
    postedTime: "Posted 3 mins ago",
    link: "/job",
  },
  {
    title: "Marketing Manager",
    company: "AwesomeCorp",
    salary: "₦400,000 - ₦500,000",
    jobType: "Part-Time",
    location: "Abuja, Nigeria",
    postedTime: "Posted 1 hour ago",
    link: "/job",
  },
  {
    title: "Software Developer",
    company: "Techie Ltd.",
    salary: "₦600,000 - ₦700,000",
    jobType: "Remote",
    location: "Anywhere, Nigeria",
    postedTime: "Posted 2 days ago",
    link: "/job",
  },
  {
    title: "Project Manager",
    company: "BuildIt Inc.",
    salary: "₦500,000 - ₦600,000",
    jobType: "Full-Time",
    location: "Lagos State, Nigeria",
    postedTime: "Posted 3 days ago",
    link: "/job",
  },
  {
    title: "HR Specialist",
    company: "PeopleFirst",
    salary: "₦250,000 - ₦300,000",
    jobType: "Full-Time",
    location: "Port Harcourt, Nigeria",
    postedTime: "Posted 5 days ago",
    link: "/job",
  },
  {
    title: "UI/UX Designer",
    company: "DesignHub",
    salary: "₦450,000 - ₦500,000",
    jobType: "Contract",
    location: "Remote",
    postedTime: "Posted 1 week ago",
    link: "/job",
  },
  {
    title: "Data Analyst",
    company: "Insight Analytics",
    salary: "₦350,000 - ₦400,000",
    jobType: "Full-Time",
    location: "Lagos State, Nigeria",
    postedTime: "Posted 2 weeks ago",
    link: "/job",
  },
  {
    title: "Product Manager",
    company: "Innovatech",
    salary: "₦550,000 - ₦650,000",
    jobType: "Full-Time",
    location: "Abuja, Nigeria",
    postedTime: "Posted 3 weeks ago",
    link: "/job",
  },
  {
    title: "Content Writer",
    company: "WriteNow",
    salary: "₦200,000 - ₦250,000",
    jobType: "Part-Time",
    location: "Remote",
    postedTime: "Posted 1 month ago",
    link: "/job",
  },
  {
    title: "Customer Service Rep",
    company: "ServicePlus",
    salary: "₦150,000 - ₦200,000",
    jobType: "Full-Time",
    location: "Ibadan, Nigeria",
    postedTime: "Posted 2 months ago",
    link: "/job",
  },
  {
    title: "Customer Service Rep",
    company: "ServicePlus",
    salary: "₦150,000 - ₦200,000",
    jobType: "Full-Time",
    location: "Ibadan, Nigeria",
    postedTime: "Posted 2 months ago",
    link: "/job",
  },
  {
    title: "Customer Service Rep",
    company: "ServicePlus",
    salary: "₦150,000 - ₦200,000",
    jobType: "Full-Time",
    location: "Ibadan, Nigeria",
    postedTime: "Posted 2 months ago",
    link: "/job",
  },
  {
    title: "Customer Service Rep",
    company: "ServicePlus",
    salary: "₦150,000 - ₦200,000",
    jobType: "Full-Time",
    location: "Ibadan, Nigeria",
    postedTime: "Posted 2 months ago",
    link: "/job",
  },
  {
    title: "Customer Service Rep",
    company: "ServicePlus",
    salary: "₦150,000 - ₦200,000",
    jobType: "Full-Time",
    location: "Ibadan, Nigeria",
    postedTime: "Posted 2 months ago",
    link: "/job",
  },{
    title: "Customer Service Rep",
    company: "ServicePlus",
    salary: "₦150,000 - ₦200,000",
    jobType: "Full-Time",
    location: "Ibadan, Nigeria",
    postedTime: "Posted 2 months ago",
    link: "/job",
  },
  {
    title: "Customer Service Rep",
    company: "ServicePlus",
    salary: "₦150,000 - ₦200,000",
    jobType: "Full-Time",
    location: "Ibadan, Nigeria",
    postedTime: "Posted 2 months ago",
    link: "/job",
  },
  {
    title: "Customer Service Rep",
    company: "ServicePlus",
    salary: "₦150,000 - ₦200,000",
    jobType: "Full-Time",
    location: "Ibadan, Nigeria",
    postedTime: "Posted 2 months ago",
    link: "/job",
  },
  

];

const JobList = ({ searchQuery }) => {
  const [visibleJobs, setVisibleJobs] = useState(10);
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  useEffect(() => {
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const filtered = jobs.filter(
        (job) =>
          job.title.toLowerCase().includes(query) ||
          job.company.toLowerCase().includes(query) ||
          job.location.toLowerCase().includes(query)
      );
      setFilteredJobs(filtered);
    } else {
      setFilteredJobs(jobs);
    }
  }, [searchQuery]);

  const handleSeeMore = () => {
    setVisibleJobs((prevVisibleJobs) => prevVisibleJobs + 5);
  };

  return (
    <div className="space-y-4">
      {filteredJobs.slice(0, visibleJobs).map((job, index) => (
        <JobCard
          key={index}
          title={job.title}
          company={job.company}
          salary={job.salary}
          jobType={job.jobType}
          location={job.location}
          postedTime={job.postedTime}
          link={job.link}
        />
      ))}
      {visibleJobs < filteredJobs.length && (
        <button
          onClick={handleSeeMore}
          className="bg-primary text-white p-2 rounded"
        >
          See More
        </button>
      )}
    </div>
  );
};

export default JobList;
