import PrimaryBtn from "../primaryBtn";
import SectionSubheading from "../sectionSubheading";

function CTXSection() {
  return (
    <div className="flex flex-col gap-[32px] items-center">
      {/** ctx */}
      <SectionSubheading subheading="🔥 Your Virtual Intimate Partner" />
      
      <div className="flex flex-col gap-[12px] w-full">
        <div className="text-white text-center whitespace-nowrap text-[34px] lg:text-[68px] font-redhat font-semibold leading-[120%]">
          Your AI Companion <br />
          for Romance & <span className="text-primary">Desire</span>
        </div>
        <p className="w-full lg:w-[680px] font-redhat font-normal text-[16px] lg:text-[20px] leading-[28px] -tracking-[2%] text-center text-white">
          Experience conversations that adapt to your fantasies, remember your
          moments, and grow with your passion.
        </p>

        {/** left */}
        <span className="absolute w-fit h-fit -left-[18%] top-[33%]">
          <svg
            width="30"
            height="29"
            viewBox="0 0 30 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.534 0.798597C21.4097 -1.47341 26.8484 1.64083 28.8658 5.97022C32.9514 14.738 22.6999 28.2531 22.4538 28.3678C22.2077 28.4825 5.26548 27.639 1.17991 18.8712C-0.837477 14.5418 0.276167 8.37433 5.15196 6.10232C7.95132 4.79789 10.442 5.36217 12.0839 6.1135C12.5646 4.3731 13.7346 2.10303 16.534 0.798597Z"
              fill="#FAA7E0"
            />
          </svg>
        </span>
        <span className="absolute w-fit h-fit top-[6%] left-2 lg:-left-[2%] lg:top-[8%] animate-bounce transition duration-300">
          <svg
            width="17"
            height="19"
            viewBox="0 0 17 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.33092 1.5325C7.81862 0.51775 6.38413 0.730214 6.15709 1.85447L5.12775 6.96286L0.751961 9.41368C-0.210927 9.95357 -0.00932162 11.4653 1.05747 11.7046L5.90476 12.7894L8.23032 17.4009C8.74262 18.4156 10.1771 18.2032 10.4042 17.0789L11.4335 11.9705L15.8093 9.5197C16.7722 8.97981 16.5706 7.46805 15.5038 7.22878L10.6565 6.14399L8.33092 1.5325Z"
              fill="#FAA7E0"
            />
          </svg>
        </span>
        <span className="absolute w-fit h-fit left-0 top-[90%] lg:-left-[6%] lg:top-[56%]  animate-pulse transition-all duration-200">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.9251 1.10579C14.1177 -0.381891 17.6789 1.65728 18.9999 4.49212C21.675 10.2332 14.9625 19.0827 14.8013 19.1578C14.6402 19.2329 3.54659 18.6806 0.871394 12.9395C-0.449571 10.1047 0.279631 6.06631 3.47226 4.57862C5.30524 3.72449 6.93614 4.09398 8.0112 4.58594C8.32599 3.44634 9.09208 1.95992 10.9251 1.10579Z"
              fill="#FAA7E0"
            />
          </svg>
        </span>

        <span className="absolute w-fit h-fit -left-[16%] top-[80%]">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.99819 0.860326C6.61397 0.0992613 5.5381 0.25861 5.36782 1.1018L4.59581 4.93309L1.31397 6.77121C0.591805 7.17613 0.743009 8.30995 1.5431 8.4894L5.17857 9.30299L6.92274 12.7616C7.30696 13.5227 8.38283 13.3633 8.55311 12.5201L9.32512 8.68884L12.607 6.85072C13.3291 6.44581 13.1779 5.31198 12.3778 5.13253L8.74236 4.31894L6.99819 0.860326Z"
              fill="#FAA7E0"
            />
          </svg>
        </span>

        {/** right */}
        <span className="absolute w-fit h-fit right-[7%] top-[10%] animate-bounce transition-all duration-200 ">
          <svg
            width="12"
            height="12"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.99819 0.860326C6.61397 0.0992613 5.5381 0.25861 5.36782 1.1018L4.59581 4.93309L1.31397 6.77121C0.591805 7.17613 0.743009 8.30995 1.5431 8.4894L5.17857 9.30299L6.92274 12.7616C7.30696 13.5227 8.38283 13.3633 8.55311 12.5201L9.32512 8.68884L12.607 6.85072C13.3291 6.44581 13.1779 5.31198 12.3778 5.13253L8.74236 4.31894L6.99819 0.860326Z"
              fill="#FAA7E0"
            />
          </svg>
        </span>
        <span className="absolute w-fit h-fit -right-[12%] top-[20%]">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.03697 1.01396C8.52468 -0.000789642 7.09019 0.211675 6.86315 1.33593L5.8338 6.44432L1.45802 8.89514C0.495128 9.43503 0.696733 10.9468 1.76353 11.1861L6.61082 12.2709L8.93638 16.8823C9.44867 17.8971 10.8832 17.6846 11.1102 16.5604L12.1395 11.452L16.5153 9.00116C17.4782 8.46127 17.2766 6.94951 16.2098 6.71024L11.3625 5.62545L9.03697 1.01396Z"
              fill="#FAA7E0"
            />
          </svg>
        </span>
        <span className="absolute w-fit h-fit -right-[22%] top-[48%]  animate-pulse transition-all duration-150">
          <svg
            width="42"
            height="40"
            viewBox="0 0 42 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M35.2481 9.73851C41.9184 13.1677 43.1364 21.8208 40.0915 27.7436C33.9249 39.7384 10.2745 39.9972 9.93779 39.8241C9.60111 39.651 -3.95075 20.2665 2.21576 8.27173C5.26068 2.34891 13.0066 -1.69582 19.6769 1.7334C23.5066 3.70222 25.0139 6.92829 25.5895 9.37912C27.9177 8.42114 31.4184 7.76969 35.2481 9.73851Z"
              fill="#FAA7E0"
            />
          </svg>
        </span>
        <span className="absolute w-fit h-fit -right-3 bottom-10 lg:-right-[10%] lg:top-[80%]">
          <svg
            width="33"
            height="35"
            viewBox="0 0 33 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.6618 1.52185C15.6373 -0.507652 12.7683 -0.0827236 12.3142 2.16579L10.2555 12.3826L1.50392 17.2842C-0.421853 18.364 -0.0186432 21.3875 2.11495 21.8661L11.8095 24.0356L16.4606 33.2586C17.4852 35.2881 20.3542 34.8632 20.8083 32.6147L22.867 22.3979L31.6186 17.4962C33.5443 16.4165 33.1411 13.3929 31.0075 12.9144L21.313 10.7448L16.6618 1.52185Z"
              fill="#FAA7E0"
            />
          </svg>
        </span>
        <span className="absolute w-fit h-fit -right-[40%] top-[90%]  animate-bounce transition-all duration-200">
          <svg
            width="9"
            height="10"
            viewBox="0 0 9 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.66546 0.906945C4.40931 0.399569 3.69207 0.505801 3.57855 1.06793L3.06388 3.62212L0.87598 4.84753C0.394537 5.11748 0.495339 5.87336 1.02874 5.993L3.45238 6.53539L4.61516 8.84113C4.87131 9.34851 5.58856 9.24228 5.70208 8.68015L6.21675 6.12596L8.40464 4.90054C8.88609 4.6306 8.78528 3.87472 8.25189 3.75508L5.82824 3.21269L4.66546 0.906945Z"
              fill="#FAA7E0"
            />
          </svg>
        </span>
      </div>

      {/** cta */}
      <PrimaryBtn text="Get started for free" href="/" />
    </div>
  );
}

export default CTXSection;
