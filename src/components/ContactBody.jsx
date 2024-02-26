import { IoMailOutline, IoLocationSharp, IoCall } from "react-icons/io5";
import ContactForm from "./ContactForm";

const ContactBody = () => {
  return (
    <div className="bg-[url('../../Images/bg-1.svg')]  bg-cover bg-center  w-full h-96 py-14">
      <div className="w-1/2 m-auto">
        <h2 className="text-center text-5xl font-bold">Contact Us</h2>
        <p className="text-center font-medium text-lg text-neutral-500">
          Fill up the form and our team will get back to <br />
          you within 24 hours
        </p>
      </div>
      <div className="flex w-full mt-10 justify-between">
        <div className="flex flex-col ml-28 h-96 justify-center">
          <div className="flex w-full mb-7 justify-between items-start">
            <p className=" h-10 mr-10 text-lg bg-mint-green p-3 rounded-full">
              <IoLocationSharp />
            </p>
            <p className="text-lg font-medium">
              Plot 20, Block C, Agu Awka <br />
              Layout Extension, By Mopol <br />
              Base, Awka, Anambra <br />
              State, Nigeria
            </p>
          </div>
          <div className="flex w-full mb-11 items-start">
            <p className=" h-10 mr-10 text-lg bg-mint-green p-3 rounded-full">
              <IoMailOutline />
            </p>
            <a
              href="mailto:info@learnnation.com.ng"
              className="text-lg font-medium"
            >
              info@learnnation.com.ng
            </a>
          </div>
          <div className="flex w-full items-start">
            <p className=" h-10 mr-10 text-lg bg-mint-green p-3 rounded-full">
              <IoCall />
            </p>
            <p className="text-lg font-medium">+2348164746117</p>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactBody;
