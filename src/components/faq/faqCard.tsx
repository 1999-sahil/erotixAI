import SectionSubheading from "../sectionSubheading";

function FAQCard() {
  return (
    <div className="relative py-[80px]">
      {/** radial gradient */}
      <div className=" w-full flex items-center justify-center">
        <div className="absolute top-[5%] lg:top-[10%] w-[300px] h-[500px] lg:w-[600px] lg:h-[500px] rounded-full bg-primary mix-blend-lighten filter blur-3xl opacity-[35%]"></div>
      </div>

      {/** faq card */}
      <div className="relative rounded-[32px] p-[32px] lg:p-[60px] bg-[#0F0F0F80]">
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="0.5"
            width="99.7%"
            height="99%"
            rx="32"
            ry="32"
            fill="none"
            stroke="#2F2F2F"
            strokeWidth="1"
            strokeDasharray="12 12"
          />
        </svg>

        <div className="relative flex flex-col items-center justify-center gap-[24px]">
          <SectionSubheading subheading="FAQ's" />
          <h2 className="text-center font-semibold text-[28px] lg:text-[48px] leading-[120%] -tracking-[3%]">
            Ready to Meet Your AI Companion?
          </h2>
          <p className="max-w-[760px] text-center font-normal text-[16px] lg:text-[20px] leading-[28px] -tracking-[2%]">
            Start chatting today and experience a world of desire, intimacy, and
            unforgettable connections.
          </p>
          <span className="flex items-center gap-[12px]">
            <button className="border rounded-[12px] px-[12px] py-[8px] lg:px-[20px] lg:py-[13px] text-center whitespace-nowrap bg-white border-[#EAECF0] font-redhat font-medium text-[12px] lg:text-[16px] leading-[22px] -tracking-[0.18px] text-black cursor-pointer hover:text-[#121212] hover:opacity-95 transition">
              Create free account
            </button>
            <button className="flex items-center gap-1 rounded-[12px] px-[12px] py-[8px] lg:px-[20px] lg:py-[13px] text-center whitespace-nowrap bg-[#EE46BC] font-redhat font-medium text-[12px] lg:text-[16px] leading-[22px] -tracking-[0.18px] text-white cursor-pointer hover:bg-[#f94fc6] transition-colors">
              <svg
                width="16"
                height="18"
                className=""
                viewBox="0 0 16 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.00004 11.5C5.35831 11.5 3.00904 12.7755 1.51337 14.755C1.19146 15.181 1.0305 15.394 1.03577 15.6819C1.03984 15.9043 1.17951 16.1849 1.35451 16.3222C1.58103 16.5 1.89493 16.5 2.52273 16.5H13.4773C14.1051 16.5 14.4191 16.5 14.6456 16.3222C14.8206 16.1849 14.9602 15.9043 14.9643 15.6819C14.9696 15.394 14.8086 15.181 14.4867 14.755C12.991 12.7755 10.6418 11.5 8.00004 11.5Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.00004 9C10.0711 9 11.75 7.32107 11.75 5.25C11.75 3.17893 10.0711 1.5 8.00004 1.5C5.92897 1.5 4.25004 3.17893 4.25004 5.25C4.25004 7.32107 5.92897 9 8.00004 9Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Login
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default FAQCard;
