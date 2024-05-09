import Button from "../components/Button";
import "./About.css";
import { FaArrowRight } from "react-icons/fa6";
import people from "../assets/imgs/people.png";
import man from "../assets/imgs/man.png";
import boy from "../assets/imgs/boy.png";
import learning from "../assets/imgs/learning.png";
import course from "../assets/imgs/courses icon.png";
import expert from "../assets/imgs/Expert.png";
import certification from "../assets/imgs/Certification.png";

const About = () => {
  return (
    <>
      <div
        className="  fSection flex flex-col-reverse sm:flex-row pt-6 px-10 -mb-4 sm:-mb-12   "
        style={{ height: 600 }}
      >
        <div className="right  w-full sm:w-1/2 h-96 ">
          <div className="dedicate      ">
            <h1 className="   text-2xl mt-5 sm:mt-0  sm:text-7xl font-bold">
              Dedicated to achieving excellence in learning.
            </h1>
            <p className="discover sm:text-2xl font-medium mt-5 sm:mt-9 sm:mb-16">
              Discover the possibilities of online education and unlock your
              true potential! Expand your mind with online education.{" "}
            </p>

            <Button
              className="bg-royal-blue border-2 flex w-60 items-center gap-1 text-white  px-4 py-3 mt-6 sm:mt-14 rounded-xl font-medium text-base lg:text-xl whitespace-nowrap "
              target="_blank"
              rel="noreferrer"
              href="https://learnnation.com.ng/login/signup.php"
            >
              Get Started Today <FaArrowRight />
            </Button>
          </div>
        </div>

        <div className="left   w-full sm:w-1/2 sm:h-96 h-72 mb-0 sm:mb-5   ">
          <div className="flex justify-center gap-4 sm:gap-2">
            <img
              src={people}
              className="w-1/2 h-1/2 sm:w-2/5 sm:h-2/5 translate-y-1 "
              alt=""
            />{" "}
            <img
              src={man}
              className=" w-1/2 h-1/2 sm:w-2/5 sm:h-2/5 rotate-12"
              alt=""
            />{" "}
          </div>
          <div className="flex justify-center -translate-y-10 sm:-translate-y-16">
            <img src={boy} className=" w-1/2 h-1/2 sm:w-2/5 sm:h-2/5" alt="" />
          </div>
        </div>
      </div>

      <div className=" flex items-center gap-3 px-10 h-36">
        <div className="shadow-lg h-28 flex items-center justify-center w-24">
          <div><img src={learning} className="h-14" alt="" /></div>
          <div>
            <h1 className="text-royal-blue">Learning Skills</h1>
            <p className=" twenty">Excellent Learning Skills</p>
            
          </div>
        </div>
        <div className="shadow-lg h-28 flex items-center justify-center w-24">
          <div><img src={course} className="h-14" alt="" /></div>
          <div>
            <h1 className="text-royal-blue">Learning Skills</h1>
            <p className=" twenty">Excellent Learning Skills</p>
            
          </div>
        </div>
        <div className="shadow-lg h-28 flex items-center justify-center w-24">
          <div><img src={expert} className="h-14" alt="" /></div>
          <div>
            <h1 className="text-royal-blue">Learning Skills</h1>
            <p className=" twenty">Excellent Learning Skills</p>
            
          </div>
        </div>
        <div className="shadow-lg h-28 flex items-center justify-center w-24">
          <div><img src={certification} className="h-14" alt="" /></div>
          <div>
            <h1 className="text-royal-blue">Learning Skills</h1>
            <p className=" twenty">Excellent Learning Skills</p>
            
          </div>
        </div>
        
      </div>

    </>
  );
};

export default About;
