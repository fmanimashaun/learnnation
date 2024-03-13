import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
// import myImage from './myImage.jpg';
import people from '../assets/imgs/people.png'


const About = () => {

  return (
    <section className="aboutus-first-section">
      <div className="right">
        <h1>Decicated to achieving excellent in learning.</h1>
        <p>Discover the possibility of online education and unlock your true potential! expand your mind withonline education</p>
        <button>Get started today <IoIosArrowForward/> </button>
      </div>
      <div className="left">
        <div> <img src={people} alt="My Image" /> </div>
        <div></div>
      </div>
    </section>
  );
};

export default About;