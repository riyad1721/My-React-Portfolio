import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact } from "react-icons/fa";
import { BsFiletypeScss } from "react-icons/bs";
import { BiLogoTailwindCss, BiLogoRedux } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandTypescript } from "react-icons/tb";
import machine_learning from "../../assets/img/rsz_machine-learning.png";
import deep_learning from "../../assets/img/rsz_deep-learning.png";
import nlp from "../../assets/img/rsz_nlp.png";
import llm from "../../assets/img/rsz_llm.jpg";
import cv from "../../assets/img/rsz_image-processing.png";
import pytorch from "../../assets/img/rsz_pytorch.png";
import tensorflow from "../../assets/img/rsz_tensorflow.png";
import mlflow from "../../assets/img/rsz_mlflow.png";
import kubeflow from "../../assets/img/rsz_kubeflow.png";

const ExpertData = () => {
  return (
    <div className=" mt-12">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
        <div className="shadow-md px-10 py-5  dark:bg-gray-900 border-opacity-20 shadow hover:border-opacity-100 text-center ">
          <button className="text-6xl text-primary font-bold">
            {/* <FaHtml5></FaHtml5> */}
            <img src={machine_learning.src} />
          </button>
          <h2 className="dark:text-gray-200 font-bold">Machine Learning</h2>
        </div>
        <div className="shadow-md px-10 py-5  dark:bg-gray-900 border-opacity-20 shadow hover:border-opacity-100 text-center">
          <button className="text-6xl text-primary font-bold">
            {/* <FaCss3Alt></FaCss3Alt> */}
            <img src={deep_learning.src} />
          </button>
          <h2 className="dark:text-gray-200 font-bold">Deep Learning</h2>
        </div>
        <div className="shadow-md px-10 py-5  dark:bg-gray-900 border-opacity-20 shadow hover:border-opacity-100 text-center">
          <button className="text-6xl text-primary font-bold">
            {/* <BsFiletypeScss></BsFiletypeScss> */}
            <img src={nlp.src} />
          </button>
          <h2 className="dark:text-gray-200 font-bold">
            Natural Language Processing{" "}
          </h2>
        </div>
        <div className="shadow-md px-10 py-5  dark:bg-gray-900 border-opacity-20 shadow hover:border-opacity-100 text-center">
          <button className="text-6xl text-primary font-bold">
            <img src={llm.src} />
          </button>
          <h2 className="dark:text-gray-200 font-bold">Large Language Model</h2>
        </div>
        <div className="shadow-md px-10 py-5  dark:bg-gray-900 border-opacity-20 shadow hover:border-opacity-100 text-center">
          <button className="text-6xl text-primary font-bold">
            <img src={cv.src} />
          </button>
          <h2 className="dark:text-gray-200 font-bold">Computer Vision</h2>
        </div>
        <div className="shadow-md px-10 py-5  dark:bg-gray-900 border-opacity-20 shadow hover:border-opacity-100 text-center">
          <button className="text-6xl text-primary font-bold">
            <img src={pytorch.src} />
          </button>
          <h2 className="dark:text-gray-200 font-bold">Pytorch</h2>
        </div>
        <div className="shadow-md px-10 py-5  dark:bg-gray-900 border-opacity-20 shadow hover:border-opacity-100 text-center">
          <button className="text-6xl text-primary font-bold">
            <img src={tensorflow.src} />
          </button>
          <h2 className="dark:text-gray-200 font-bold">Tensorflow</h2>
        </div>
        <div className="shadow-md px-10 py-5  dark:bg-gray-900 border-opacity-20 shadow hover:border-opacity-100 text-center">
          <button className="text-6xl text-primary font-bold">
            <img src={mlflow.src} />
          </button>
          <h2 className="dark:text-gray-200 font-bold">MLflow</h2>
        </div>
        <div className="shadow-md px-10 py-5  dark:bg-gray-900 border-opacity-20 shadow hover:border-opacity-100 text-center">
          <button className="text-6xl text-primary font-bold">
            <img src={kubeflow.src} />
          </button>
          <h2 className="dark:text-gray-200 font-bold">kubeflow</h2>
        </div>
      </div>
    </div>
  );
};

export default ExpertData;
