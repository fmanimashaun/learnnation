import Button from "./Button";
import HeroImg from "../assets/imgs/hero-img.png";

const Hero = () => {
  return (
    <div className="bg-light-blue pt-8 pb-8 flex md:px-8">
      <div className="container mx-auto flex flex-col sm:flex-row gap-8 md:gap-16 items-center justify-between">
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-black mb-8">
            Welcome to <br />
            <span className="text-royal-blue">Learn Nation</span>
          </h1>
          <div>
            <p className="text-base lg:text-xl text-light-gray mt-4">
              Unlock limitless potential through our state-of-the-art e-learning
              portal! Embark on a transformative journey of growth with courses
              curated by industry luminaries. Enroll today to elevate your
              skills to unprecedented heights. Our platform is designed for
              those aspiring to reach new levels of proficiency. Seize the
              opportunity to learn from the best and propel yourself toward a
              future of endless possibilities!
            </p>
            <div className="flex gap-x-6 mt-6">
              <Button
                className="bg-royal-blue text-white px-4 py-3 rounded-xl font-medium text-base lg:text-xl whitespace-nowrap"
                target="_blank"
                rel="noreferrer"
                href="https://learnnation.com.ng/login/signup.php"
              >
                Enroll Today
              </Button>
              <Button
                className="bg-white border-2 border-royal-blue text-royal-blue px-4 py-3 rounded-xl font-medium text-base lg:text-xl whitespace-nowrap"
                target="_blank"
                rel="noreferrer"
                href="https://learnnation.com.ng/login/signup.php"
              >
                View Courses
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src={HeroImg}
            alt="a lady carrying a book"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
