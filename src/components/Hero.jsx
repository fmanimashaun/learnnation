import Button from "./Button";
import HeroImg from "../assets/imgs/hero-img.png";

const Hero = () => {
  return (
    <div className="bg-light-blue px-3.5 pt-8 pb-32 mb-12 flex-col md:px-8 relative">
      <div className="container mx-auto flex flex-col sm:flex-row gap-8 md:gap-16 items-center justify-between">
        <div className="w-full custom:w-7/12">
          <h1 className="text-7xl font-medium text-black mb-8">
            Welcome to <span className="text-royal-blue">Learn Nation</span>
          </h1>
          <div>
            <p className="hero-text text-charcoal-black mt-4">
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
        <div className="hidden custom:block custom:w-5/12">
          <img
            src={HeroImg}
            alt="a lady carrying a book"
            className="w-full h-auto"
          />
        </div>
      </div>
      <p className="absolute -bottom-10 py-6 px-16  text-5xl font-bold shadow-lg rounded-3xl left-1/2 transform -translate-x-1/2 text-center bg-white whitespace-nowrap">
        TRUSTED BY 1000+ PROFESSIONALS NATION WIDE
      </p>
    </div>
  );
};

export default Hero;
