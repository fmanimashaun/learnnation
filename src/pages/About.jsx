import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
// import myImage from './myImage.jpg';
import people from '../assets/imgs/people.png'
import man from '../assets/imgs/man.png'
import boy from '../assets/imgs/boy.png'


const About = () => {

  return (
    <section className="aboutus-first-section">
      <div className="right">
        <h1>Decicated to achieving excellent in learning.</h1>
        <p>Discover the possibility of online education and unlock your true potential! expand your mind withonline education</p>
        <button>Get started today <IoIosArrowForward/> </button>

      </div>
      <div className="left">
        <div> <img src={people} alt="My Image" /> <img src={man} alt="My Image" /> </div>
        <div> <img src={boy} alt="My Image" /></div>
      </div>
    </section>
  );
};

export default About;