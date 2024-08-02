import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Text,
} from "@chakra-ui/react";
// import React from "react";

const CustomAccordian = ({ heading, context }) => {
  return (
      <AccordionItem p={4}>
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton>
                <Text
                  fontWeight="600"
                  fontSize="22px"
                  as="span"
                  flex="1"
                  textAlign="left"
                >
                  {heading}
                </Text>
                {isExpanded ? (
                  <MinusIcon fontSize="12px" />
                ) : (
                  <AddIcon fontSize="12px" />
                )}
              </AccordionButton>
            </h2>
            <AccordionPanel color="#718096" fontWeight="400" p={4}>
              {context}
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
  );
};

export default CustomAccordian;
