import SectionSubheading from "../sectionSubheading";
import Accordion from "./accordion";
import FAQCard from "./faqCard";

function FAQ() {
  return (
    <div className="space-y-[24px]">
      {/** FAQ's */}
      <section className="space-y-[40px] lg:space-y-[60px]">
        <div className="flex flex-col items-start lg:items-center justify-center w-full gap-2">
        <SectionSubheading subheading="FAQ's" />
        <h2 className="text-[26px] lg:text-[44px] font-semibold leading-[120%] -tracking-[3%]">
          Everything You Want to Know
        </h2>
        <p className="max-w-[680px] text-start lg:text-center text-[16px] lg:text-[20px] leading-[28px] -tracking-[2%]">
          Quick answers to the most common questions about your AI companion
          experience.
        </p>
      </div>

      <div className="w-full max-w-[900px] rounded-[16px] p-[5px] lg:p-[8px] space-y-[5px] lg:space-y-[8px] border border-[#2F2F2F] mx-auto">
        <Accordion
         title="How private are my conversations?"
         answer="Our chats are fully encrypted and never shared with third parties. Only you and your AI companion have access, ensuring complete discretion and privacy."
        />
        <Accordion
         title="Can I customize my AI companion&apos;s personality?"
         answer="Our chats are fully encrypted and never shared with third parties. Only you and your AI companion have access, ensuring complete discretion and privacy."
        />
        <Accordion
         title="Is there a free trial available?"
         answer="Our chats are fully encrypted and never shared with third parties. Only you and your AI companion have access, ensuring complete discretion and privacy."
        />
        <Accordion
         title="Does the AI remember past conversations?"
         answer="Our chats are fully encrypted and never shared with third parties. Only you and your AI companion have access, ensuring complete discretion and privacy."
        />
        <Accordion
         title="Can I video call my AI companion?"
         answer="Our chats are fully encrypted and never shared with third parties. Only you and your AI companion have access, ensuring complete discretion and privacy."
        />
      </div>
      </section>

      <FAQCard />
    </div>
  );
}

export default FAQ;
