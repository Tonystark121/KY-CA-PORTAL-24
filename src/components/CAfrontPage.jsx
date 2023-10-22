import React, { useState } from "react";
import caSvg from "./svgfiles/ca.svg";
import leftPeople from "./svgfiles/leftPeople.svg";
import rightPeople from "./svgfiles/rightPeople.svg";
import stage from "./svgfiles/stage.svg";
import lamp from "./svgfiles/lamp.svg";
import participant from "./svgfiles/participant.svg";
import lyt from "./svgfiles/lyt.png";

function CAfrontPage(props) {
  const [showCA, setShowCA] = useState(true);

  const handleTaphere = () => {
    setShowCA(!showCA);
  };

  return (
    <>
      <div className="container bg-colorOfbg xs:h-[90rem] sm:h-[90rem] md:h-[90rem] mdl:h-[90rem] lg:h-[60rem] xlg:h-[60rem] max-w-full lg:flex lg:flex-row xlg:flex xlg:flex-row">
        <div className="box-1 text-center lg:float-right lg:w-[50%] lg:mt-52 xlg:float-right xlg:w-[45%] xlg:mt-52">
          <h1 className="xs:text-5xl font-bold text-[white] sm:text-6xl md:text-6xl mdl:text-6xl lg:text-6xl xlg:text-6xl">
            CAMPUS AMBASSADOR
          </h1>
          <h4 className="text-[white] xs:text-xl sm:text-2xl md:text-2xl mdl:text-2xl lg:text-2xl xlg:text-2xl xs:mt-5 sm:mt-5 md:mt-5 mdl:mt-7 lg:mt-7 xlg:mt-7">
            Be the face of Kashiyatra!
          </h4>
          <h5 className="text-[white] xs:text-lg sm:text-xl md:text-xl mdl:text-xl lg:text-xl xlg:text-xl xs:m-2 sm:m-2 md:m-2 mdl:m-4 lg:m-4 xlg:m-4">
            Represent your college and lead the contingent among all others.
          </h5>
          <button className="bg-ca-page-btn-color border rounded-full p-1 xs:h-10 xs:w-40 sm:h-10 sm:w-40 md:h-10 md:w-40 mdl:h-10 mdl:w-40 lg:h-10 lg:w-40 xlg:h-10 xlg:w-40 font-bold box shadow-2xl xs:text-xl xs:mt-2 sm:text-2xl sm:mt-4 smd:text-2xl smd:mt-4 md:text-2xl md:mt-4 mdl:text-2xl mdl:mt-5 lg:text-2xl lg:mt-5 xlg:text-2xl xlg:mt-5">
            APPLY
          </button>
        </div>
        <div className="box-2 block items-center justify-center xs:flex sm:flex md:flex mdl:flex xs:flex-col sm:flex-col md:flex-col mdl:flex-col xs:mt-20 sm:mt-20 smd:mt-20 md:mt-20 mdl:mt-20 lg:float-right lg:w-[40%] xlg:float-right xlg:w-[40%]">
          <div className="flex flex-col items-center justify-center lg:mt-20 lg:ml-36 xlg:mt-20 xlg:ml-36">
            <img
              className="xs:w-[160px] xs:h-[55px] z-10 sm:w-[160px] sm:h-[55px] md:w-[160px] md:h-[55px] mdl:w-[170px] mdl:h-[55px] lg:w-[170px] lg:h-[55px] xlg:w-[170px] xlg:h-[55px]"
              src={lamp}
              alt=""
            />
            <img
              className={`xs:h-[420px] xs:w-[250px] xs:absolute sm:absolute md:absolute mdl:absolute lg:absolute xlg:absolute sm:h-[420px] sm:w-[250px] md:h-[420px] md:w-[250px] mdl:h-[420px] mdl:w-[250px] lg:h-[418px] lg:w-[280px] xlg:h-[418px] xlg:w-[280px]
              ${showCA ? "show" : "hidden"}
              `}
              src={lyt}
              alt=""
            />
            <button
              className="p-1 xs:h-[40px] xs:w-[110px] xs:mt-[-35%] sm:h-[40px] sm:w-[110px] sm:mt-[-35%] md:w-[110px] md:mt-[-35%] mdl:h-[40px] mdl:w-[115px] mdl:mt-[-35%] lg:h-[40px] lg:w-[115px] lg:mt-[-55px] xlg:h-[40px] xlg:w-[115px] xlg:mt-[-55px] text-white font-semibold text-xl border rounded-full bg-colorOfLamp z-20"
              onClick={handleTaphere}
            >
              Tap here
            </button>

            <div className="flex xs:absolute xs:w-20 xs:mt-[5rem] xs:block-inline xs:items-center xs:justify-center sm:absolute sm:w-20 sm:mt-[5rem] sm:block-inline sm:items-center sm:justify-center md:absolute md:w-20 md:mt-[5rem] md:block-inline md:items-center md:justify-center mdl:absolute mdl:w-20 mdl:mt-[5rem] mdl:block-inline mdl:items-center mdl:justify-center lg:absolute lg:w-20 lg:mt-[5rem] lg:block-inline lg:items-center lg:justify-center xlg:absolute xlg:w-20 xlg:mt-[5rem] xlg:block-inline xlg:items-center xlg:justify-center">
              <img className="" src={leftPeople} alt="" />
              <img
                className={`${showCA ? "show" : "hidden"}`}
                src={caSvg}
                alt=""
              />
              <img
                className={`${!showCA ? "show" : "hidden"}`}
                src={participant}
                alt=""
              />
              <img className="" src={rightPeople} alt="" />
            </div>
            <div className="xs:absolute xs:block xs:items-center xs:justify-center xs:mt-[21rem] sm:absolute sm:block sm:items-center sm:justify-center sm:mt-[21rem] md:absolute md:block md:items-center md:justify-center md:mt-[21rem] mdl:absolute mdl:block mdl:items-center mdl:justify-center mdl:mt-[21rem] lg:absolute lg:block lg:items-center lg:justify-center lg:mt-[21rem] xlg:absolute xlg:block xlg:items-center xlg:justify-center xlg:mt-[21rem]">
              <img
                className={`${showCA ? "show" : "hidden"}`}
                src={stage}
                alt=""
              />
            </div>
            <span className="text-[white] text-center font-bold xs:mt-[29rem] sm:mt-[29rem] md:mt-[29rem] mdl:mt-[29rem] lg:mt-[29rem] xlg:mt-[29rem]">
              {showCA ? "CA" : "PARTICIPANTS"}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default CAfrontPage;
