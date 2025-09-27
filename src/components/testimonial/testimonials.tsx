import SectionSubheading from "../sectionSubheading"

function Testimonials() {
  return (
    <div className="my-[40px] lg:my-[60px]" >
      {/** hading and desc */}
      <div className="flex flex-col items-start lg:items-center justify-center w-full gap-2">
        <SectionSubheading subheading="Testimonials" />
        <h2 className="text-[26px] lg:text-[44px] font-semibold leading-[120%] -tracking-[3%]">
          What Our Users Feel
        </h2>
        <p className="max-w-[680px] text-start lg:text-center text-[16px] lg:text-[20px] leading-[28px] -tracking-[2%]">
          Genuine voices sharing how our AI companions transformed their conversations and relationships.
        </p>
      </div>

      {/** progression */}
    </div>
  )
}

export default Testimonials