import Link from "next/link";

const GraySection = () => {
  return (
    <section className="bg-[#fff] px-0 md:px-[20px] py-[10px] md:pt-[100px]">
      <div>
        <div className="max-w-[100%] bg-[#F2F2F2] mx-auto pt-[25px] md:pt-[47px] pb-[10px] md:pb-[30px] slider-mainq px-[50px]">
          <h1 className="fpr text-[#0F2E3C] text-[35px] md:text-[50px] leading-[35px] md:leading-[50px] text-center">
            Programs and seminars
          </h1>
          <p className="fgr max-w-[860px] text-[16px] md:text-[16px] leading-[16px] md:leading-[26px] text-center my-6 mx-auto md:pt-[15px] xl:pt-[30px]">
            In addition to a wide range of personalized coaching programs, Ihsan
            Coaching partners with local organizations to offer robust Programs
            and seminar including a wide range of Islamic lectures such as
            choosing the right partner, raising children, and proving the
            existence of the Creator. Click the link below for a full list of
            available programs and seminars.
          </p>
          <Link href="/programs">
            <a className="fgb w-[90px] md:w-[160px] h-[30px] md:h-[45px] bg-[#fff] text-[#0F2E3C] text-[12px] md:text-[16px] leading-[16px] md:leading-[26px] rounded-[50px] px-[5px] py-[10px] mt-[32px] cursor-pointer mb-[20px] flex justify-center items-center mx-auto hover:bg-[#0F2E3C] hover:text-[#fff]">
              Get started
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GraySection;
