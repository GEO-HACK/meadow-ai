import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const CustomAccordion = () => {
  return (
    <Accordion.Root type="single" collapsible className="w-[60%] ">
      {["Is it accessible?", "Is it styled?", "Is it animated?"].map((question, index) => (
        <Accordion.Item key={index} value={`item-${index + 1}`} className="border-b border-green-700">
          <Accordion.Header>
            <Accordion.Trigger className="flex justify-between items-center w-full p-3 rounded-md text-left text-lg font-medium">
              {question}
              <AccordionChevron />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="p-3 text-gray-600">
            {index === 0
              ? "lorems ipsum dolor sit amet consectetur adipisicing elit. Molestiae doloremque autem quia fugiat, cupiditate molestias et eligendi magni quaerat aperiam,"
              : index === 1
              ? "Yes. It comes with default styles that match the other components’ aesthetic."
              : "Yes. It's animated by default, but you can disable it if you prefer."}
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
    //   animate={{ rotate: 180 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="w-5 h-5"
    >
      <ChevronDown />
    </motion.div>
  </Accordion.Trigger>
);

export default CustomAccordion;
