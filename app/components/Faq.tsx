// components/FaqSection.tsx

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqSection() {
  return (
    <div className="flex flex-col md:flex-row gap-10 px-6 py-16 max-w-7xl mx-auto bg-gray-300/10">
      {/* Left Section */}
      <div className="md:w-1/2 space-y-4">
        <p className="uppercase text-sm text-primary font-semibold tracking-wide">
          FAQ
        </p>
        <h2 className="text-4xl font-semibold">Still Have Any Questions?</h2>
        <p className="text-muted-foreground text-lg">
          Here are the answers to the most popular ones:
        </p>

        <Accordion type="single" collapsible className="w-full mt-6 space-y-2">
          <AccordionItem value="q1">
            <AccordionTrigger>
              Which attorney in your company is the best?
            </AccordionTrigger>
            <AccordionContent>
              Every case is unique, and the best attorney depends on your
              specific needs. We will match you with the most suitable expert.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q2">
            <AccordionTrigger>
              What do I get when paying for your services?
            </AccordionTrigger>
            <AccordionContent>
              You get expert legal consultation, case handling, and full
              transparency throughout the process.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q3">
            <AccordionTrigger>
              How will I be kept informed of my case?
            </AccordionTrigger>
            <AccordionContent>
              You’ll receive regular updates via email and phone, and can
              request a case status at any time.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q4">
            <AccordionTrigger>
              What do I do when I have a question?
            </AccordionTrigger>
            <AccordionContent>
              Reach out through our support team or contact your assigned
              attorney directly.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q5">
            <AccordionTrigger>
              What is the cost of your legal services?
            </AccordionTrigger>
            <AccordionContent>
              Pricing varies by service. We offer free consultations to provide
              accurate quotes.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 max-lg:hidden">
        <img
          src="/lawyer_3.avif" // replace with your image path
          alt="woman working at desk"
          className="w-full h-auto object-cover rounded-md"
        />
      </div>
    </div>
  );
}
