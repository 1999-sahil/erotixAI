import CTXSection from "./ctxSection";
import Banner from "../../assets/banner.svg";

function ShowcaseSection() {
  return (
    <div className="relative w-full h-[900px] pt-[52px]">
      {/** radial gradient */}
      <div className=" w-full flex items-center justify-center">
        <div className="absolute top-[30%] lg:top-[30%] w-[400px] h-[200px] lg:w-[800px] lg:h-[500px] rounded-full bg-[#EE46BC] mix-blend-lighten filter blur-3xl opacity-[35%]"></div>
      </div>

      {/** main heading and cta */}
      <div className="absolute left-[50%] translate-x-[-50%] z-10">
        <CTXSection />
      </div>

      {/** visual/media banner */}
      <div className="absolute top-[45%]">
        <img src={Banner} alt="banner" className="object-cover" />
      </div>
    </div>
  );
}

export default ShowcaseSection;
