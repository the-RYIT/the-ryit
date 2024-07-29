import { ntr } from "@/utils/fonts/fonts";
import FAQ from "./FAQ";
import "./style.scss";

const faqDetails = [
  {
    question: "What types of courses do you offer?",
    answer:
      "We offer a range of courses in emerging technologies, soft skills, and industry-specific skills.(Computer,AI, Robotics,Spoken English)",
  },
  {
    question: "What is the duration of the courses?",
    answer:
      "Course durations vary from a few weeks to several months and years , depending on the program.",
  },
  {
    question: "Who are the trainers?",
    answer:
      "Our trainers are industry experts with different extensive experience in their fields.",
  },
  {
    question: "What is the certification process?",
    answer:
      "Upon completing the course, participants receive a certificate of completion from our institute( Approved by Govt.of India).",
  },
  {
    question: "Do you offer placement assistance?",
    answer:
      "Yes, we have a dedicated placement and internship cell that assists participants in finding job opportunities.",
  },
  {
    question: "What is the fee structure?",
    answer:
      "Our fee structure varies depending on the course and duration. Please contact us for details. M-9679103253",
  },
  {
    question: "Do you offer financial assistance or scholarships?",
    answer: " Yes, we offer scholarships and financial assistance to deserving participants.",
  },
  {
    question: "What is the admission process?",
    answer:
      "Participants can apply online or offline, and our admissions team will guide them through the process.",
  },
  {
    question: "Can I attend a trial class before enrolling?",
    answer: "Yes, we offer trial classes for some courses. Please contact us to schedule one.",
  },
  {
    question: " Do you offer online courses?",
    answer: "Yes, we offer online courses and blended learning options for some programs.",
  },
  {
    question: "How do I know which course is right for me?",
    answer:
      "Our career counselors can help you choose the best course based on your interests and career goals.",
  },
];

const FAQSection = () => {
  return (
    <section className="faq-section py-8">
      <h1 className={`text-7xl mb-7 ${ntr.className}`}>FAQ - Frequent Ask Question</h1>

      <div className="flex flex-col gap-3">
        {faqDetails.map((data, index: number) => (
          <FAQ key={index} question={data.question} answer={data.answer} />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
