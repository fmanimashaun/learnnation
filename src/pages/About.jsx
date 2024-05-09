// import Index from "../tailwTutoPages";
import Button from '../components/Button';
import './about.css';
import { FaArrowRight } from "react-icons/fa6";
import people from '../assets/imgs/people.png';
import man from '../assets/imgs/man.png';
import boy from '../assets/imgs/boy.png';






const About = () => {
  return (
    <>


    <div className="  fSection flex flex-col-reverse sm:flex-row pt-6 px-10 -mb-4 sm:-mb-12   " style={{height:600}} >
      <div className="right  w-full sm:w-1/2 h-96 ">
        <div className="dedicate      ">
          <h1 className='   text-2xl   sm:text-7xl font-bold'>Dedicated to achieving excellence in learning.</h1>
          <p className='discover sm:text-2xl font-medium mt-5 sm:mt-9 sm:mb-16'>Discover the possibilities of online education and unlock your true potential! Expand your mind with online education. </p>

          <Button
                className="bg-royal-blue border-2 flex w-60 items-center gap-1 text-white  px-4 py-3 sm:mt-14 rounded-xl font-medium text-base lg:text-xl whitespace-nowrap "
                target="_blank"
                rel="noreferrer"
                href="https://learnnation.com.ng/login/signup.php"
              >
                Get Started Today   <FaArrowRight  />
            </Button>
        </div>
      </div>


      <div className="left   w-full sm:w-1/2 sm:h-96 h-72 mb-0 sm:mb-5   ">
        <div className='flex justify-center gap-4 sm:gap-2'><img src={people} className='w-1/2 h-1/2 sm:w-2/5 sm:h-2/5 translate-y-1 ' alt="" /> <img src={man} className=' w-1/2 h-1/2 sm:w-2/5 sm:h-2/5 rotate-12' alt="" /> </div>
        <div className='flex justify-center -translate-y-10 sm:-translate-y-16'><img src={boy} className=' w-1/2 h-1/2 sm:w-2/5 sm:h-2/5'  alt="" /></div>

      </div>
    </div>

    <div className='bb  h-36'>
      <div className='hh h-28 w-4'></div>
      <div className='hh h-28 w-4'></div>
      <div className='hh h-28 w-4'></div>
      <div className='hh h-28 w-4'></div>
    </div>









    {/* <div className='hh h-32 '>
      who goes
    </div> */}


      {/* <Index/> */}
















   
    </>
  );
};

export default About;
