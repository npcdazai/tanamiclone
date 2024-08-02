import { Button, Flex, Image } from "@chakra-ui/react";
// import React from 'react'

const DownloadButton = () => {
  return (
    <Flex gap={4} justifyContent={["flex-start"]} w="100%">
      <Button
        as="a"
        href="#"
        size="lg"
        bg="rgb(0, 65, 24)"
        color="white"
        leftIcon={
          <Image
            src="https://img.icons8.com/color/48/000000/apple-app-store--v1.png"
            alt="App Store"
          />
        }
        sx={{
          _hover: {
            bg: "rgb(0, 65, 24)",
          },
        }}
      >
        App Store
      </Button>
      <Button
        as="a"
        href="#"
        size="lg"
        bg="rgb(0, 65, 24)"
        color="white"
        leftIcon={
          <Image
            src="https://img.icons8.com/color/48/000000/google-play.png"
            alt="Play Store"
          />
        }
        sx={{
          _hover: {
            bg: "rgb(0, 65, 24)",
          },
        }}
      >
        Play Store
      </Button>
    </Flex>
  );
};

export default DownloadButton;
