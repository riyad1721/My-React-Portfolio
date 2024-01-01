import { FaNodeJs,FaPython  } from "react-icons/fa";
import { SiExpress, SiPytorch, SiTensorflow, SiJupyter } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { BiLogoFirebase } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io";
import { RiOpenaiFill } from "react-icons/ri";
import { TbBrandRedux, TbBrandTypescript } from "react-icons/tb";
import datamodeling from "../../assets/img/rsz_datamodeling.png";
import huggingface from "../../assets/img/huggingface.png";

const ComfortableData = () => {
  return (
    <div className=" mt-12">
      <div className="flex flex-wrap items-center gap-6">
        <div className="border px-10 py-5 dark:border-primary dark:bg-gray-900 border-opacity-70 shadow hover:border-opacity-100 text-center">
          {/* <h2 className="text-xl text-primary font-bold py-5">UI/UX</h2> */}
          <button className="text-6xl text-primary font-bold">
            <FaPython ></FaPython>
          </button>
          <h2 className="dark:text-gray-200 font-bold">Python</h2>
        </div>
        <div className="border px-10 py-5 dark:border-primary dark:bg-gray-900 border-opacity-70 shadow hover:border-opacity-100 text-center">
          <button className="text-6xl text-primary font-bold">
            <SiPytorch ></SiPytorch>
          </button>
          <h2 className="dark:text-gray-200 font-bold">Pytorch</h2>
        </div>
        <div className="border px-10 py-5 dark:border-primary dark:bg-gray-900 border-opacity-70 shadow hover:border-opacity-100 text-center">
          <button className="text-6xl text-primary font-bold">
            <SiTensorflow ></SiTensorflow>
          </button>
          <h2 className="dark:text-gray-200 font-bold">Tensorflow </h2>
        </div>
        <div className="border px-10 py-5 dark:border-primary dark:bg-gray-900 border-opacity-70 shadow hover:border-opacity-100 text-center">
          <button className="text-6xl text-primary font-bold">
            <RiOpenaiFill></RiOpenaiFill>
          </button>
          <h2 className="dark:text-gray-200 font-bold">OpenAI</h2>
        </div>
        <div className="border px-10 py-5 dark:border-primary dark:bg-gray-900 border-opacity-70 shadow hover:border-opacity-100 text-center">
          <button className="text-6xl text-primary font-bold">
          <img class="fill-blue-500" src={huggingface.src} />
          </button>
          <h2 className="dark:text-gray-200 font-bold">Hugging Face</h2>
        </div>
        <div className="border px-10 py-5 dark:border-primary dark:bg-gray-900 border-opacity-70 shadow hover:border-opacity-100 text-center">
          <button className="text-6xl text-primary font-bold">
            <SiJupyter></SiJupyter>
          </button>
          <h2 className="dark:text-gray-200 font-bold">Jupyter</h2>
        </div>
        <div className="border px-10 py-5 dark:border-primary dark:bg-gray-900 border-opacity-70 shadow hover:border-opacity-100 text-center">
          <button className="text-6xl text-primary font-bold">
          <img class="fill-blue-500" src={datamodeling.src} />
          </button>
          <h2 className="dark:text-gray-200 font-bold">Data Modeling</h2>
        </div>
      </div>
    </div>
  );
};

export default ComfortableData;
