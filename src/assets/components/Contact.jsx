import {
  Box,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Grid, GridItem } from "@chakra-ui/react";

const Contact = () => {
  const initialVal = { fname: "", lname: "", email: "", phno: "", msgtxt: "" };
  const [formVal, setFormVal] = useState(initialVal);
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const HandleOnChange = (e) => {
    const { name, value } = e.target;
    setFormVal({ ...formVal, [name]: value });
  };

    console.log(formVal)
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!formVal.fname) {
      validationErrors.fname = "First Name is required!";
    }
    if (!formVal.lname) {
      validationErrors.lname = "Last Name is required!";
    }
    if (!formVal.email) {
      validationErrors.email = "Email is required!";
    } else if (!/\S+@\S+\.\S+/.test(formVal.email)) {
      validationErrors.email = "Email is not valid";
    }
    if (!formVal.phno) {
      validationErrors.phno = "Contact Number is required!";
    } else if (formVal.phno.length < 9) {
      validationErrors.phno = "Contact Number is not valid";
    }
    if (!formVal.msgtxt) {
      validationErrors.msgtxt = "Message is required!";
    }
    setFormError(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      alert("Form Submitted successfully");
      setIsSubmit(true);
    }
  };

  useEffect(() => {
    if (Object.keys(formError).length === 0 && isSubmit) {
      console.log(formVal);
    }
  }, [formError, isSubmit]);

  return (
    <div>
      <Box
        bg="rgba(0, 65, 24, 0.05)"
        height="360px"
        display="flex"
        flexDirection="column"
        textAlign="center"
      >
        <Heading as="h2">Contact Us</Heading>
        <Text fontSize="20px" marginBottom="0px" fontWeight="500">
          Fill out the form below and we will get back to you soon.
        </Text>
      </Box>
      <Box
        w="100%"
        h="100%"
        p={16}
        border="1px solid #E2E8F0"
        borderRadius="5px"
        boxShadow="rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px"
        alignItems="center"
      > 
        <form onSubmit={handleSubmit}>
          <Grid
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(2, minmax(0px, 1fr))"
            gap="20px 40px"
          >
            <FormControl isRequired w="100%" position="relative">
              <FormLabel htmlFor="fname" fontSize="16px" fontWeight="400">
                First Name
              </FormLabel>
              <Input
                name="fname"
                type="text"
                value={formVal.fname}
                onChange={HandleOnChange}
              />
              {formError.fname && (
                <span style={{ color: "red" }}>{formError.fname}</span>
              )}
            </FormControl>

            <FormControl isRequired mt={4}>
              <FormLabel htmlFor="lname">Last Name</FormLabel>
              <Input
                name="lname"
                value={formVal.lname}
                onChange={HandleOnChange}
              />
              {formError.lname && (
                <span style={{ color: "red" }}>{formError.lname}</span>
              )}
            </FormControl>

            <FormControl isRequired mt={4}>
              <FormLabel htmlFor="email">Email Address</FormLabel>
              <Input
                name="email"
                type="email"
                value={formVal.email}
                onChange={HandleOnChange}
              />
              {formError.email && (
                <span style={{ color: "red" }}>{formError.email}</span>
              )}
            </FormControl>

            <FormControl isRequired mt={4}>
              <FormLabel htmlFor="phno">Phone Number</FormLabel>
              <Input
                name="phno"
                value={formVal.phno}
                onChange={HandleOnChange}
              />
              {formError.phno && (
                <span style={{ color: "red" }}>{formError.phno}</span>
              )}
            </FormControl>
          </Grid>
          <FormControl isRequired mt={4}>
            <FormLabel htmlFor="msgtxt">Message</FormLabel>
            <Textarea
              name="msgtxt"
              value={formVal.msgtxt}
              onChange={HandleOnChange}
            />
            {formError.msgtxt && (
              <span style={{ color: "red" }}>{formError.msgtxt}</span>
            )}
          </FormControl>
          <Button mt={6} colorScheme="green" type="submit">
            Submit
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default Contact;
