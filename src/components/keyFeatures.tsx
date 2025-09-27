import { features } from "../constant/keyFeatures"
import PrimaryBtn from "./primaryBtn"
import SectionSubheading from "./sectionSubheading"

function KeyFeatures() {
  return (
    <div className="flex flex-col gap-[28px] lg:gap-[32px] py-[32px]">
        {/** heading and description */}
        <div className="flex flex-col lg:flex-row items-start lg:justify-between gap-2 lg:gap-20">
            <div className="flex flex-col gap-4">
                <SectionSubheading subheading="Key Features" />
                <h2 className="text-[26px] lg:text-[44px] font-semibold leading-[120%] -tracking-[3%]">
                    What Makes Our AI <br />
                    Companions
                    <span className="text-[#FCCEEE] ml-2">So Irresistible</span>
                </h2>
            </div>
            <div className="flex-1 flex flex-col gap-[24px]">
                <p className="text-[16px] lg:text-[20px] leading-[28px] -tracking-[2%]">Experience AI companions designed to understand your deepest desires and evolve with your relationship</p>
                <PrimaryBtn text="Get Started Now" href="/" />
            </div>
        </div>

        {/** feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[12px] lg:gap-[16px]">
            {features.map((feat) => (
                <div key={feat.feature} className="rounded-[12px] p-[20px] lg:p-[32px] bg-[#0F0F0F] flex flex-col gap-[12px] lg:gap-[20px]">
                    <img src={feat.svg} alt={feat.feature} className="w-12 h-12 lg:w-16 lg:h-16" />
                    <h2 className="font-semibold text-[18px] lg:text-[24px] leading-[120%] -tracking-[3%]">{feat.feature}</h2>
                    <p className="font-normal text-[14px] lg:text-[18px] leading-[24px] -tracking-[0.26px] text-[#EAECF0]">{feat.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default KeyFeatures