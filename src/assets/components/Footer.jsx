import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { CiFacebook } from "react-icons/ci";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Options = ({ heading, opt1, opt2, opt3, opt4 }) => {
  return (
    <Box display="flex" flexDirection="column">
      <Text fontSize="md" fontWeight="500">
        {heading}
      </Text>
      <VStack alignItems="flex-start" gap={1} mt={6}>
        <a href="/">
          <span>{opt1}</span>
        </a>
        <a href="/">
          <span>{opt2}</span>
        </a>
        <a href="/">
          <span>{opt3}</span>
        </a>
        <a href="/">
          <span>{opt4}</span>
        </a>
      </VStack>
    </Box>
  );
};

const Footer = () => {
  return (
    <Box bg="rgba(0, 65, 24, 0.05)">
      <Box p={16} w="100%" display="flex" flexDirection="column" pb="2rem">
        <Box pb={4} pt={4} w="100%" borderBottom="1px solid #dee2e6">
          <Heading as="h4">Yes, it’s that simple.</Heading>
          <Text fontSize="1.25rem" fontWeight="100" color="gray.500">
            Download the Tanami app today and start growing your wealth.
          </Text>
        </Box>
        <Box pb="4rem" pt="2rem" borderBottom="1px solid #dee2e6" w="100%">
          <Box>
            <Flex p={8} gap="4rem">
              <Box display="flex" flexDirection="column" w="50%" gap={3}>
                <Heading as="h6">About Tanami</Heading>
                <Text
                  fontSize="0.875rem"
                  fontWeight="100"
                  color="#4a5568"
                  mt={2}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam dictum aliquet accumsan porta lectus ridiculus in
                  mattis. Netus sodales in volutpat ullamcorper amet adipiscing
                  fermentum.
                </Text>
                <Box display="flex" gap={8}>
                  <FaTwitter />
                  <CiFacebook />
                  <FaInstagram />
                  <FaGithub />
                </Box>
                <Text fontSize="small" fontWeight="500">
                  info@tanamicapital.com
                </Text>
              </Box>

              <Box display="flex" gap="4rem" alignItems="center">
                <Options
                  heading="Company"
                  opt1="Home"
                  opt2="Investment"
                  opt3="How it Work's"
                  opt4="FAQ's"
                />

                <Options
                  heading="help"
                  opt1="About us"
                  opt2="Contact us"
                  opt3="Privacy Policy"
                  opt4="Term & Services"
                />
              </Box>
            </Flex>
          </Box>
        </Box>
        <Box
          bg="rgba(0, 65, 24, 0.05)"
          borderBottom="1px solid #dee2e6"
          display="flex"
          justifyContent="space-between"
          mt={3}
          fontWeight="500"
          fontSize="small"
        >
          <span style={{ overflowWrap: "break-word", boxSizing: "border-box" }}>
            Copyright © 2024 Tanami Capital
          </span>
          <span style={{ overflowWrap: "break-word", boxSizing: "border-box" }}>
            Tanami Capital is authorized to participate in the Central Bank of
            Bahrain’s Fintench Regualatory Sandbox
          </span>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
