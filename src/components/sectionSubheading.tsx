interface SectionSubheadingProps {
    subheading: string;
}

function SectionSubheading({ subheading }: SectionSubheadingProps) {
  return (
    <div className="rounded-[8px] px-[8px] py-[4px] lg:px-[12px] lg:py-[8px] space-x-[10pnter text-white bg-gradient-to-r from-[#FFFFFF1A] to-[#FFFFFF33]">
      <p className="font-redhat font-medium text-[12px] lg:text-[18px] leading-[24px] -tracking-[0.26px] text-center text-white">
        {subheading}
      </p>
    </div>
  );
}

export default SectionSubheading;
