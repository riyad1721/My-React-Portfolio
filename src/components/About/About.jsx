import Image from "next/image";
import img from "../../assets/img/Group 376.png";
import Link from "next/link";
import styles from "../../styles/Custome/custom.module.css";
import { FaChevronRight } from "react-icons/fa";

const About = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row custom-container justify-between items-center pt-10 lg:pt-24 pb-32 md:space-x-14">
        <div className=" w-full lg:w-[45%] mb-20 lg:mb-0">
          <Image width="0" height="0" className="w-full" src={img} alt="" />
        </div>
        <div className=" w-full lg:w-[55%]">
          <div className="relative mb-4">
            <h2 className="text-[70px] font-extrabold font-uppercase absolute left-0 -top-16">
              <span className={`text-stroke-effect`} data-text="About" />
            </h2>

            <h2 className="text-3xl pl-0 mb-7 font-bold dark:text-gray-200 mt-4">
              Know About <span className="text-primary">Me</span>
            </h2>
          </div>

          <p className="dark:text-gray-300 text-gray-500 text-justify mb-2">
          Welcome! I am Md Reyad Hossain, an AI Engineer with a passion for crafting 
          intelligent solutions. Armed with a undergrad from North South University, 
          I specialize in machine learning, deep learning, data science and data analysis.
          </p>

          <p className="dark:text-gray-300 text-gray-500 text-justify font-medium mb-2">
          I am also specializing in computer vision, NLP, Generative AI, large language models, and 
          MLops.I specialize in crafting innovative solutions at the intersection of 
          data science and artificial intelligence. Proficient in Python and frameworks 
          like TensorFlow and PyTorch, I have successfully implemented advanced models. 
          Whether it is enhancing computer vision applications or optimizing NLP algorithms, 
          my passion lies in pushing the boundaries of AI innovation
          </p>

          <p className="dark:text-gray-300 text-gray-500 text-justify font-medium mb-2">
          I believe in the transformative power of AI to tackle real-world challenges ethically. 
          Continuous learning fuels my dynamic approach, and I am always open to collaboration. 
          Lets connect and explore the exciting possibilities at the intersection of technology and 
          innovation.
          </p>

          <div className="inline-block ">
            <Link
              href="/project"
              className="group hover:bg-primary bg-gray-200 dark:bg-gray-700 pr-7 duration-300 rounded-full mt-10 flex items-center space-x-2"
            >
              <button className="p-4 bg-primary rounded-full text-xl text-gray-200">
                <FaChevronRight></FaChevronRight>
              </button>
              <button className="dark:text-gray-300 group-hover:text-white font-semibold text-black ">
                See Projects
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
