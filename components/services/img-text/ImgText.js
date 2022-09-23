import Link from "next/link";
import Image from "next/image";
import Fade from "react-reveal/Fade";
import 'animate.css'
// import AOS from 'aos';

// AOS.init();

const ImgText = ({ data, pb, flip, dir }) => {
  return (
    <section
      className={`w-full bg-[#fff] ${pb
          ? "pt-[65px] md:pt-[100px] pb-[30px] sm:pb-[70px] xl:pb-[150px]"
          : "pt-[55px] md:pt-[100px] pb-[15px] xl:pb-[90px] "
        }`}
    >
      <div
        className={`
        ${flip === true ? "flex flex-col justify-center md:pr-[700px] relative lg:flex-row-reverse" :
        "flex flex-col justify-end md:justify-center pl-[10px] md:pl-[650px] relative lg:flex-row"
      }`}
      >
        {/* <Fade> */}
        {/* <div className="relative"> */}
        {/* <div className="absolute w-[100%] h-[100%] shadow-lg shadow-cyan-500/50 top-0 left-0"></div> */}
        <div
          className={`absolute card-shadow
            animate__animated
            animate__fadeIn
            animate__delay-2s
            animate__repeat-1	1
            ${flip == true ? "right-0 self-end" : "left-0"}
              top-0 max-w-[90%] sm:max-w-[90%] md:max-w-[90%] lg:max-w-[40%] xl:max-w-[100%] sc1350:max-w-[40%]  xl:pl-0
      `}
        >
          <div
            className={`max-w-[100%] xl:max-w-[550px] sc1350:max-w-[780px] max-h-[100%]
        ${flip == true
                ? "right-0 after:left-[-15px] sm:after:left-[-35px]"
                : "left-0 after:right-[-15px] sm:after:right-[-35px]"
              } 
        after:w-[100px] md:after:w-[170px] relative after:h-[100px] md:after:h-[170px] after:bg-[#0F2E3C] after:rounded-[100px] 
        after:bottom-[-15px] sm:after:bottom-[-40px] after:absolute after:z-[-1] z-[2]
        before:w-[150px] md:before:w-[237px] before:h-[100px] md:before:h-[160px] before:bg-[#0F2E3C] 
      
      ${flip == true
                ? "before:right-[0] before:rounded-tl-[100px] "
                : "before:left-[0]  before:rounded-tr-[100px] "
              } 
      before:top-[-30px] sm:before:top-[-45px] before:absolute
      `}
          >
            <div
            style={{
              // boxShadow: "0px 80px 80px -30px rgb(0 0 0 / 30%)",
            //   height: "90%",
            }}
            >
              <Image
                style={{
                  // boxShadow: "0px 8px 24px rgb(149, 157, 165, 0.2)"
                  // boxShadow: "0px 80px 80px -30px rgb(0 0 0 / 30%)",
                }}
                src={data.img}
                className={`shadow-lg shadow-cyan-500/50 z-[1]  ${flip == true ? "scale-x-[-1]" : ""} `}
              />
            </div>
            {/* </Fade> */}
          </div>
        </div>
        {/* </div> */}
        {/* </Fade> */}
        <div className={`flex ${flip == true ? "" : "lg:flex-row-reverse"} `}>
          <div
            className={`md:mt-[23px] pt-[80%] lg:pt-0 xl:pt-0  ${flip == true
                ? "pr-0 lg:mr-[6%] xl:pr-0 lg:pt-0"
                : "pl-0 lg:pl-[6%] xl:pl-0"
              }`}
            style={{ display: "flex", justifyContent: "right" }}
          >
            <div
              className={` pt-[15px] ${flip === true ? "ml-[150px]" : "mr-[100px]"
                }`}
            >
              <h1 className="fpr mt-[20px] text-[32px] md:text-[45px] leading-[32px] md:leading-[50px]  text-[#0F2E3C] pt-[10px] xl:pt-[40px] sc1350:pl-[32px}">
                {data.title}
              </h1>
              <p className="fgr text-[18px] md:text-[16px] leading-[16px] md:leading-[25px] text-[#292929] pt-[15px] pb-[10px] md:pb-[20px] max-w-[710px] lg:max-w-[510px] xl:max-w-[610px] sc1500:max-w-[680px]">
                {data.paragraph1}
              </p>
              <p className="fgr text-[18px] md:text-[16px] leading-[16px] md:leading-[25px] text-[#292929]  max-w-[710px] lg:max-w-[510px] xl:max-w-[610px]">
                {data.paragraph2}
              </p>
              <Link href={`/${data.link}`}>
                <a className="fgr w-[125px] md:w-[150px] h-[45px] md:h-[40px] bg-[#AE8B5C] text-[#fff] text-[16px] md:text-[16px] leading-[36px] rounded-[50px] px-[5px] py-[10px] hover:opacity-[.8] cursor-pointer mb-0 md:mb-[20px] flex justify-center items-center hover:text-[#AE8B5C] hover:bg-[#fff] border-[1px] border-[#AE8B5C] mt-[10px] md:mt-[30px]">
                  Learn more
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImgText;
