import Logo from "./logo"
import PrimaryBtn from "./primaryBtn"

function Footer() {
  return (
    <div>
        {/** footer logo and email/newsletter */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-[24px] lg:gap-[32px]">
            <div className="w-full">
                <Logo />
                <p className="w-full max-w-[600px] font-normal text-[12px] lg:text-[18px] leading-[24px] -tracking-[0.26px]">
                    Discover AI companions built to understand your emotions and desires, remember your intimate moments, and evolve with every conversation—creating a safe, passionate, and unforgettable connection just for you.
                </p>
            </div>
            <div className="w-full">
                <div className="flex items-center gap-[8px] w-full">
                    <input type="email" placeholder="Enter your email" className="w-full lg:max-w-[70%] px-[12px] py-[8px] lg:px-[20px] lg:py-[13px] text-[12px] lg:text-[16px] leading-[22px] -tracking-[0.18px] rounded-[12px] text-[#697586] bg-white font-medium"  />
                    <PrimaryBtn text="Subscribe" href="/" />
                </div>
                <p className="font-normal text-[12px] lg:text-[16px] leading-[22px] -tracking-[0.18px] text-[F9FAFB]">
                    By submitting your email address, you agree to our Privacy policy and Terms of Service. You can unsubscribe any time via the link in your email.
                </p>
            </div>
        </div>

        {/** links */}
    </div>
  )
}

export default Footer