import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  [
    "What is HUGGED?",
    "HUGGED is your parenting village: a place to connect with other parents, ask questions, learn, find support and feel a little less alone in the parenting journey.",
  ],
  [
    "What is the Village?",
    "Village is the main parenting community inside HUGGED. You can discover Families to connect with other parents and explore Programs for guided learning and support.",
  ],
  [
    "What is the difference between Families and Programs?",
    "Families are for connecting: talking, asking questions and sharing experiences with other parents. Programs are guided experiences with activities, resources and support around a parenting or child-development goal.",
  ],
  [
    "Do I have to pay to use HUGGED?",
    "Many parts of HUGGED are available without buying a Program. Some Programs, webinars, resources or services may be paid. Any payment requirements are shown before purchase.",
  ],
  [
    "What is Meet?",
    "Meet is designed to help parents discover nearby connections and meetups. Availability can vary; check the HUGGED app for current options. You choose if and how you connect.",
  ],
  [
    "What is the Feed?",
    "Feed is a place to read, share and talk about everyday parenting: ask a question, share something that worked, celebrate a small win or hear what other parents are going through.",
  ],
  [
    "Can I share something without showing my name?",
    "Some conversations support anonymous posting. Check the post composer for the anonymous option. HUGGED’s community spaces are intended to be supportive, but anonymity is not a promise of absolute secrecy.",
  ],
  [
    "What will I find inside the Guide?",
    "Guide brings together parenting resources, webinars and expert support. The available resources and sessions may change over time.",
  ],
  [
    "Can I talk to an expert through HUGGED?",
    "You can explore experts and request guidance or a consultation where available. Requests may be coordinated by the HUGGED team; instant booking is not guaranteed.",
  ],
  [
    "What can I manage from my Profile?",
    "Your Profile is where you can review your account and available settings. The exact child details, saved items and preferences may depend on the features currently available in your app.",
  ],
];

export default function FAQSection() {
  return (
    <section
      id="faqs"
      className="scroll-mt-20 bg-[#f8f4e3] px-5 py-16 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-[960px]">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold  tracking-[.22em] text-[#333333]">
            FAQ's
          </p>
          <h2 className="mt-4 font-heading text-4xl font-bold tracking-[-.035em] text-[#333333] md:text-5xl">
            A few things you might be wondering.
          </h2>
        </div>
        <Accordion type="multiple" className="mt-10 space-y-3">
          {faqs.map(([question, answer], i) => (
            <AccordionItem
              key={question}
              value={`faq-${i}`}
              className="rounded-2xl border border-[#333333]/10 bg-white px-5 shadow-sm md:px-7"
            >
              <AccordionTrigger className="text-left text-base font-semibold text-[#333333] hover:text-[#ff6f61]">
                {question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-7 text-[#333333]/75">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
