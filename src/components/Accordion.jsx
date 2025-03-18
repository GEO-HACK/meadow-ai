import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const CustomAccordion = () => {
  const faqs = [
    {
      question: "What is Meadow AI?",
      answer: "Meadow AI is an advanced AI-powered platform designed to streamline workflows, automate tasks, and enhance productivity across various industries. The system utilizes machine learning models to provide insights, automate processes, and create efficient workflows."
    },
    {
      question: "How does Meadow AI improve efficiency?",
      answer: "Meadow AI leverages machine learning and automation to reduce repetitive tasks, optimize decision-making, and provide intelligent insights in real time. By integrating with existing enterprise systems, it enhances efficiency by automating data processing, reducing errors, and accelerating workflows."
    },
    {
      question: "Can Meadow AI integrate with existing systems?",
      answer: "Yes. Meadow AI is built with compatibility in mind, offering APIs and integrations with popular platforms to ensure a seamless workflow. Whether you're using cloud-based or on-premise systems, Meadow AI provides a robust and flexible integration framework."
    }
  ];

  return (
    <Accordion.Root type="single" collapsible className="flex flex-col items-center w-full">
      {faqs.map((faq, index) => (
        <Accordion.Item key={index} value={`item-${index + 1}`} className="border-b border-green-700 w-fit">
          <Accordion.Header className="w-fit">
            <Accordion.Trigger className="flex justify-between items-center w-fit min-w-max p-3 rounded-md text-left text-lg font-medium text-gray-50">
              {faq.question}
              <AccordionChevron />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="p-3 text-gray-50 w-fit">
            <div className="max-w-3xl">{faq.answer}</div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
};

// Rotating Chevron Icon
const AccordionChevron = () => (
  <Accordion.Trigger asChild>
    <motion.div
      initial={{ rotate: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="w-5 h-5"
    >
      <ChevronDown />
    </motion.div>
  </Accordion.Trigger>
);

export default CustomAccordion;
