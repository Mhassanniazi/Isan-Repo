import Image from "next/image";
import Slider from "react-slick";
import profile from "../../../assets/images/profile.jpeg";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import testiominal1 from "../../../assets/images/home/testimonial2.jpeg";
import testiominal2 from "../../../assets/images/home/testimonial1.jpeg";

const Testimonial = ({ testimonials, mainHeading, blogPage }) => {
  // console.log("testimonials", testimonials);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <BsChevronRight
        onClick={onClick}
        className="absolute right-[-8%] sm:right-[-4%] md:right-[-1%] top-[50%] translate-y-[-50%] text-[15px] sm:text-[20px] text-[#9D9D9D] z-[2] cursor-pointer"
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <BsChevronLeft
        onClick={onClick}
        className="absolute left-[-8%] sm:left-[-4%] md:left-[-1%] top-[50%] translate-y-[-50%] text-[15px] sm:text-[20px] text-[#9D9D9D] z-[2] cursor-pointer"
      />
    );
  }

  return (
    <section className="bg-[#fff] pt-[30px] md:pt-[70px] pb-[30px] md:pb-[70px]">
      <div className="myContainer">
        <h1
          className={`fpr text-[#0F2E3C] lg:text-[80px] text-[32px]  md:text-[40px] leading-[32px] md:leading-[75px] text-center ${blogPage ? "max-w-[81%]" : "max-w-[242px]"
            } md:max-w-[100%] mx-auto`}
        >
          {mainHeading}
        </h1>
        <div className="max-w-[1000px] bg-[#F2F2F2] mx-auto pt-[23px] md:pt-[35px] pb-[23px] md:pb-[35px] slider-main mt-[22px] md:mt-[35px] px-[26px] md:px-[30px] ">
          <Slider {...settings}>
            {testimonials?.map((testimonail, index) => {
              return (
                <div
                  key={testimonail.name + 1}
                  className="min-h-[240px] fgi leading-[22px] text-center max-w-[850px] flex-imp flex-col justify-center"
                >
                  {testimonail.paragraphs.map((paragraph) => {
                    return (
                      <p
                        key={paragraph}
                        className="max-w-[90%] lg:max-w-[800px] mx-auto text-[16px] md:text-[16px] leading-[20px] md:leading-[22px]"
                      >
                        {paragraph}
                      </p>
                    );
                  })}
                  <div className=" flex flex-start mt-[15px] md:mt-[37px] mx-auto">
                    <div className="w-[38px] md:w-[63px] min-w-[34px] h-[38px] md:h-[63px] rounded-[50px] overflow-hidden prof-img mr-[5px] sm:mr-[10px]">
                      <Image src={testimonail.profileImg} />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h6 className="fgr leading-[18px] md:leading-[26px] font-[600] text-[16px] md:text-[16px] text-[#555555] text-left mt-[7px ] md:mt-[5px ]">
                        {testimonail.name}
                      </h6>
                      <h5 className="fgr max-w-[180px] sm:max-w-[100%] leading-[20px] md:leading-[26px] text-[16px] md:text-[16px] text-[#555555] text-left mt-0 md:mt-[-5px]">
                        {testimonail.designation}
                      </h5>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
