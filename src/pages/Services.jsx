import { Button } from "@material-tailwind/react";
import React , {useEffect} from "react";
import ProjectCard from "../components/ProjectCard";
import Accodion from "../components/Accordion";
import PageLoader from "../components/PageLoader";
import { Link } from "react-router-dom";

const Services = () => {
  const TitleName = "Portfolio | Work";
  useEffect(() => {
    document.title = TitleName ;

  },[TitleName]);
 
  return (
    <div className="mt-[12rem] mb-20">
      <PageLoader />
      <div>
        <h1 className="font-bold text-center text-[2rem]">My Work</h1>

        <p className="text-[15px] mt-4">
          I've been busy past few years, working on some of the best projects.
          Here's a Glimpse!
        </p>
        <Accodion />
        <Link to="/contact">
          <Button className="bg-gray-900 shadow-none hover:shadow-none mt-8">
            Get Started 👉
          </Button>
        </Link>
      </div>
      <div className="mt-8">
        <h1 className="font-bold text-[2rem]">My Project</h1>

        <ProjectCard />
      </div>
    </div>
  );
};

export default Services;
