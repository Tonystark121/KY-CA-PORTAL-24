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
      <div className="container mx-auto bg-colorOfbg h-screen w-[100%]">
        <div className="text-center float-left m-20 w-[40%]">
          <h1 className="text-7xl font-bold m-7 mt-24 text-[white]">
            CAMPUS AMBASSADOR
          </h1>
          <h4 className="mt-10 text-[white]">Be the face of Kashiyatra!</h4>
          <h5 className="text-[white]">
            Represent your college and lead the contingent among all others.
          </h5>
          <button className="bg-ca-page-btn-color border rounded-full p-3 h-auto w-40 font-bold text-3xl mt-7 box shadow-2xl">
            APPLY
          </button>
        </div>
        <div className="flex flex-col float-right w-[45%] mx-center justify-center items-center">
          <div className="mt-[10%] mr-[27%]">
            <img className="absolute" src={lamp} alt="" />
            <button
              className="p-1 h-[50px] w-[110px] text-white font-semibold absolute ml-[-0.6%] mt-[-0.5%] text-xl border rounded-full bg-colorOfLamp"
              onClick={handleTaphere}
            >
              Tap here
            </button>
          </div>

          <img
            className={`h-[65%] w-[14%] ml-[-6%] mt-[42%] absolute z-1 ${
              showCA ? "show" : "hidden"
            }`}
            src={lyt}
            alt=""
          />

          <div className="flex ml-[4.25%] mt-[48%] absolute z-5">
            <img className="w-[25%]" src={leftPeople} alt="" />
            <img
              className={`w-[20%] mt-5 ${showCA ? "show" : "hidden"}`}
              src={caSvg}
              id="changingSvg"
              alt=""
            />
            <img
              className={`w-[20%] mt-5 ${!showCA ? "show" : "hidden"}`}
              src={participant}
              alt=""
            />
            <img className="w-[25%]" src={rightPeople} alt="" />
          </div>
          <div className="mt-[70%] ml-3 absolute z-3">
            <img
              className={`w-[70%] ${showCA ? "show" : "hidden"}`}
              src={stage}
              alt=""
            />
          </div>
          <span className="mt-[80%] mr-24 text-[white] font-bold text-center absolute">
            {showCA ? "CA" : "PARTICIPANTS"}
          </span>
        </div>
      </div>
    </>
  );
}

export default CAfrontPage;
