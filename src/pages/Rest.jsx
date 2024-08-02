import Mobile from "../../public/Mobile.png";
import {
  Accordion,
  // AccordionButton,
  // AccordionItem,
  // AccordionPanel,
  Box,
  Button,
  Flex,
  Heading,
  // HStack,
  Image,
  Tab,
  TabList,
  // TabPanel,
  // TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState, Suspense } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Line from "../../public/download.png";
import SquareAsset from "../../public/asset2.png";
import "../assets/styles/fade.css";
import cellframe from "../../public/cellFrame.png";
import cellAsset from "../../public/asset1.png";
import {ArrowForwardIcon } from "@chakra-ui/icons";
import DuoMobile from "../../public/adImage-CTn0r7Bj.png";
import Header from "../assets/components/Header";
import logo from "../../public/logo.png";
const AnimationSquare = React.lazy(() => import("../assets/components/Slider"));
const DownloadButton = React.lazy(() => import("../assets/components/DownloadButton"));
const CustomAccordian = React.lazy(() => import("../assets/components/CustomAccordian"));

const images = [
  "public/slider1.png",
  "public/slider2.png",
  "public/slider3.png",
];

const jpgs = [
  "public/signup.png",
  "public/invest.png",
  "public/monitor.png",
  "public/browse.png",
];
const tabsContent = [
  "Content for Select tab",
  "Content for Onboard tab",
  "Content for Invest tab",
];

const Body = () => {
  const [currentText, setCurrentText] = useState(0);
  const [heightIndex, setHeightIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const texts = ["Low Minimums", "High Returns", "Secure Investments"];
  const height = ["25%", "50%", "75%", "100%"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText((prevText) => (prevText + 1) % texts.length);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % tabsContent.length);
      setHeightIndex((prev) => (prev + 1) % height.length);
    }, 2000);

    return () => clearInterval(intervalId);
  });

  return (
    <div>
      <Header logo={logo} />

      <Box bg="gray.50" h="100%" p={16}>
        <Flex
          direction={["column", "column", "row"]}
          align="center"
          justify="space-between"
        >
          <VStack spacing={8} align="flex-start" maxW="lg">

            <Box
              display="flex"
              flexDirection="column"
              w="auto"
            >
              <Text
                fontSize="54px"
                fontWeight="500"
                position="relative"
                as="h1"
                color="rgb(0, 65, 24)"
              >
                Access private Market <span>today</span>
                <Image
                  src={Line}
                  position="absolute"
                  width="333px"
                  right="3.5rem"
                  bottom="3.5rem"
                ></Image>
              </Text>
              <Text mt={4} fontSize="lg" color="#1a202c">
                Tanami provides Shariah-compliant global private investments
                alongside world class managers, simplified through an app.
              </Text>
            </Box>
            <Suspense fallback={<div>...Loading</div>}>
              <DownloadButton />
            </Suspense>
            <Text fontSize="sm" color="gray.500">
              Download the app & grow your wealth with Tanami today.
            </Text>
          </VStack>

          <Box mt={[8, 8, 0]} flexShrink={0}>
            <Image
              src={Mobile}
              alt="Phone App Screenshot"
              h="70%"
              maxW="400px"
            />
          </Box>
        </Flex>
      </Box>
      
      <Flex direction="column" align="center" bg="gray.50" w="100%">
        <Heading as="h2" mb={4}>
          Why Choose Our Investment Platform
        </Heading>
        <Flex
          pt={8}
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-evenly"
          bg="white"
          borderRadius="lg"
          w="100%"
          position="relative"
        >
          <Box display="flex" justifyContent="space-between" textAlign="center">
            <Image
              src={SquareAsset}
              alt="Investment details"
              borderRadius="lg"
              mb={4}
              h="250px"
            />
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap={2}
            >
              <Box
                width="300px"
                height="300px"
                bg="#cad9cb"
                borderRadius="50%"
                display="flex"
                alignItems="center"
                justifyContent="center"
                color="white"
              >
                <Suspense fallback={<div>Loading...</div>}>
                  <AnimationSquare photos={images} />
                </Suspense>
              </Box>
              <Tabs index={currentIndex}>
                <TabList borderBottom="none">
                  {tabsContent.map((_, index) => (
                    <Tab
                      borderTop={
                        currentIndex === index
                          ? "2px solid rgb(0, 65, 24)"
                          : "1px solid gray.300"
                      }
                      borderBottom="none"
                      key={index}
                      transition="all 1s"
                      color={
                        currentIndex === index ? "rgb(0, 65, 24)" : "gray.400"
                      }
                    >
                      {index === 0
                        ? "Select"
                        : index === 1
                        ? "Onboard"
                        : "Invest"}
                    </Tab>
                  ))}
                </TabList>
              </Tabs>
            </Box>
          </Box>

          <Box
            flex="1"
            textAlign={{ base: "center", md: "left" }}
            ml={{ md: 8 }}
            w="50%"
            p={16}
          >
            <Box position="relative" h="65px">
              <TransitionGroup>
                <CSSTransition
                  key={texts[currentText]}
                  timeout={500}
                  classNames="fade"
                >
                  <Heading as="h3" size="lg" mb={4}>
                    {texts[currentText]}
                  </Heading>
                </CSSTransition>
              </TransitionGroup>
            </Box>
            <Text mb={4}>
              We make it easy. From real estate to private equity, Tanami
              invests alongside global managers with a proven track record of
              consistent outperformance.
            </Text>
            <Button
              bg="rgb(0, 65, 24)"
              color="white"
              size="lg"
              sx={{
                _hover: {
                  bg: "rgb(0, 65, 24)",
                },
              }}
            >
              Get Started
            </Button>
          </Box>
        </Flex>
      </Flex>

      <Heading textAlign={["left", "center"]} fontSize="4xl" mt="3rem" p={8}>
        How does it work?
      </Heading>
      <Flex h="100%" bg="white" justifyContent="space-evenly">
        <Flex p={5} gap="1rem">
          <Box
            w={2}
            bg="rgb(0, 65, 24)"
            transition="height 0.5s"
            borderRadius="10px"
            height={height[heightIndex]}
          />
          <VStack
            w="50%"
            spacing={10}
            p={10}
            alignItems="flex-start"
            align="flex-start"
            mt={2}
          >
            <Box>
              <Text fontSize="lg" fontWeight="bold" color="green.700">
                Sign-up
              </Text>
              <Text>
                Create an account with Tanami and get approved in under 10
                minutes.
              </Text>
            </Box>
            <Box>
              <Text fontSize="lg" fontWeight="bold" color="green.700">
                Browse
              </Text>
              <Text>
                Select from top-tier funds approved on the Tanami platform.
              </Text>
            </Box>
            <Box>
              <Text fontSize="lg" fontWeight="bold" color="green.700">
                Invest
              </Text>
              <Text>
                Fund investments using a bank transfer, debit, or credit card.
              </Text>
            </Box>
            <Box>
              <Text fontSize="lg" fontWeight="bold" color="green.700">
                Monitor
              </Text>
              <Text>
                Stay up to date with the performance of your investment
                portfolio, live on the app.
              </Text>
            </Box>
          </VStack>
        </Flex>
        <Flex p={8}>
          <Box
            position="relative"
            width="fit-content"
            margin="auto"
            mt="50px"
            zIndex="0"
          >
            <Image
              src={cellAsset}
              alt="Square"
              position="absolute"
              top="2%"
              left="90%"
              transform="translate(-50%, -50%)"
              zIndex="0"
              width="150px"
              height="150px"
            />
            <Box
              position="relative"
              zIndex="0"
              width="200px"
              height="400px"
              bg="green.50"
              borderRadius="50px"
            >
              <Image
                position="absolute"
                src={cellframe}
                alt="Phone"
                zIndex="1"
              />
              <Box
                borderRadius="50px"
                overflow="hidden"
                zIndex="0"
                top="0%"
                position="absolute"
                h="100%"
                width="200px"
              >
                <Suspense fallback={<div>...Loading</div>}>
                  <AnimationSquare photos={jpgs} />
                </Suspense>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Flex>

      <Box
        display="flex"
        flexDirection="column"
        h="100%"
        p={4}
        w="100%"
        marginInline="auto"
        paddingInlineStart={4}
        alignItems="center"
      >
        <Heading as="h4">Frequently asked questions</Heading>
        <Text>Everything you need to know about the property investment.</Text>
        <VStack p={8} w="80%">
          <Accordion style={{ width: "100%" }} allowMultiple>
            <Suspense fallback={<div>...Loading</div>}>
              <CustomAccordian
                heading="How do I get started with your app?"
                context="Our app is designed to be user-friendly and accessible to investors with varying levels of experience. Whether you are a seasoned investor or new to alternative investments, our app provides educational resources, due diligence reports, and other knowledge support to help you make informed decisions."
              />
              <CustomAccordian
                heading="How much money do I need to start investing through your app?"
                context="The minimum investment amount varies depending on the specific investment opportunity. You will find the minimum investment amount within the page of each investment opportunity."
              />
              <CustomAccordian
                heading="How long does it take to open an account and start investing?"
                context="The account opening process can typically be completed online within a few minutes. Once your account is approved, you can start exploring and investing in alternative assets through our app. However, please note that additional verification requirements or account funding may be necessary, which may affect the timeline."
              />
              <CustomAccordian
                heading="What types of investment opportunities are available through your app?"
                context="Our app offers a range of alternative investment options, including private equity funds, venture capital funds, real estate investment funds, infrastructure funds, private debt funds, and more. You can choose investments based on your risk tolerance and investment goals."
              />
            </Suspense>
          </Accordion>

          <Box p={4}>
            <Button
              gap={2}
              bg="rgb(0, 47, 15)"
              color="white"
              borderRadius="18px"
              p={6}
              sx={{
                _hover: {
                  bg: "rgb(0, 65, 24)",
                },
              }}
            >
              View All
              <ArrowForwardIcon />
            </Button>
          </Box>
        </VStack>
      </Box>

      <Box
        p={16}
        display="flex"
        h="100%"
        w="100%"
        alignContent="center"
        alignItems="center"
      >
        <VStack
          bgImage="linear-gradient(rgb(255, 255, 255), rgb(201, 217, 203))"
          backgroundColor="black"
          bgPosition="center"
          bgRepeat="no-repeat"
          display="flex"
          flexDirection="row"
          alignItems="flex-start"
          h="100%"
          w="100%"
          justifyContent="space-between"
        >
          <Box
            w="50%"
            display="flex"
            alignItems="start"
            flexDirection="column"
            justifyContent="center"
            p={16}
            zIndex="0"
          >
            <Heading>Ready to get started?</Heading>
            <Text>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
              minus minima expedita itaque delectus sequi voluptatem aperiam
              similique quasi. Tenetur explicabo aperiam voluptas fugit veniam
              ea non, vitae tempore laborum doloribus fugiat.
            </Text>
            <Box p={4}>
              <Suspense fallback={<div>...Loading</div>}>
                <DownloadButton />
              </Suspense>
            </Box>
          </Box>
          <Box display="flex" justifyContent="center" w="50%">
            <Image w="90%" h="90%" src={DuoMobile}></Image>
          </Box>
        </VStack>
      </Box>
    </div>
  );
};
export default Body;
