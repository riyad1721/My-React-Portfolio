import { DiPostgresql, DiDjango  } from "react-icons/di";
import { SiFastapi, SiApachekafka   } from "react-icons/si";
import { PiFileSqlBold } from "react-icons/pi";

const Familear = () => {
  return (
    <div className=" mt-12">
      <div className="flex flex-wrap items-center gap-6">
        <div className="border px-10 py-5 dark:border-primary dark:bg-gray-900 border-opacity-70 shadow hover:border-opacity-100 text-center">
          <button className="text-6xl text-primary font-bold">
            <DiDjango></DiDjango>
          </button>
          <h2 className="dark:text-gray-200 font-bold">django</h2>
        </div>
        <div className="border px-10 py-5 dark:border-primary dark:bg-gray-900 border-opacity-70 shadow hover:border-opacity-100 text-center">
          <button className="text-6xl text-primary font-bold">
            <SiFastapi></SiFastapi>
          </button>
          <h2 className="dark:text-gray-200 font-bold">Fastapi</h2>
        </div>
        <div className="border px-10 py-5 dark:border-primary dark:bg-gray-900 border-opacity-70 shadow hover:border-opacity-100 text-center">
          <button className="text-6xl text-primary font-bold">
            <PiFileSqlBold ></PiFileSqlBold>
          </button>
          <h2 className="dark:text-gray-200 font-bold">sql</h2>
        </div>
        <div className="border px-10 py-5 dark:border-primary dark:bg-gray-900 border-opacity-70 shadow hover:border-opacity-100 text-center">
          <button className="text-6xl text-primary font-bold">
            <DiPostgresql></DiPostgresql>
          </button>
          <h2 className="dark:text-gray-200 font-bold">Postgresql</h2>
        </div>
        <div className="border px-10 py-5 dark:border-primary dark:bg-gray-900 border-opacity-70 shadow hover:border-opacity-100 text-center">
          <button className="text-6xl text-primary font-bold">
            <SiApachekafka></SiApachekafka>
          </button>
          <h2 className="dark:text-gray-200 font-bold">Apache kafka</h2>
        </div>
      </div>
    </div>
  );
};

export default Familear;
