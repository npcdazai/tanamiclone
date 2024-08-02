import { useState, useEffect } from "react";
import { Box, Image } from "@chakra-ui/react";


const FadeSlider = ({photos}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
        setIsFading(false);
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box position="relative" width="100%" height="100%" overflow="hidden">
      {photos.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt={`Slide ${index + 1}`}
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          objectFit="cover"
          transition="opacity 0.5s ease-in-out"
          opacity={currentIndex === index && !isFading ? 1 : 0}
          zIndex={currentIndex === index ? 1 : 0}
        />
      ))}
    </Box>
  );
};

export default FadeSlider;