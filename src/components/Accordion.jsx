import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const CustomAccordion = () => {
  const faqs = [
    {
      question: "What is Meadow AI?",
      answer:
        "Meadow AI is an advanced AI-powered platform designed to streamline workflows, automate tasks, and enhance productivity across various industries. The system utilizes machine learning models to provide insights, automate processes, and create efficient workflows.",
    },
    {
      question: "How does Meadow AI improve efficiency?",
      answer:
        "Meadow AI leverages machine learning and automation to reduce repetitive tasks, optimize decision-making, and provide intelligent insights in real time. By integrating with existing enterprise systems, it enhances efficiency by automating data processing, reducing errors, and accelerating workflows.",
    },
    {
      question: "Can Meadow AI integrate with existing systems?",
      answer:
        "Yes. Meadow AI is built with compatibility in mind, offering APIs and integrations with popular platforms to ensure a seamless workflow. Whether you're using cloud-based or on-premise systems, Meadow AI provides a robust and flexible integration framework.",
    },
  ];

  return (
    <div className="flex flex-col items-center w-full px-4 sm:px-6 md:px-8">
      <Accordion.Root type="single" collapsible className="w-full max-w-3xl">
        {faqs.map((faq, index) => (
          <Accordion.Item
            key={index}
            value={`item-${index + 1}`}
            className="border-b border-green-700 w-full"
          >
            <Accordion.Header className="w-full">
              <Accordion.Trigger className="flex justify-between items-center w-full p-3 sm:p-4 text-left text-base sm:text-lg font-medium text-gray-50 rounded-md">
                {faq.question}
                <AccordionChevron />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="p-3 sm:p-4 text-gray-50 rounded-md">
              <div className="max-w-3xl text-sm sm:text-base">{faq.answer}</div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
};

// Rotating Chevron Icon
const AccordionChevron = () => (
  <motion.div
    initial={{ rotate: 0 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
    className="w-5 h-5"
  >
    <ChevronDown />
  </motion.div>
);

export default CustomAccordion;
