import { Box, Button, Image } from "@chakra-ui/react";
import { GrLanguage } from "react-icons/gr";
import {Link} from "react-router-dom";

const Header = ({ logo }) => {
  return (
    <div>
      <Box style={{transition:"top 0.3s ease 0s"}}
        padding="16px"
        w="100%"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        backgroundColor="rgb(0, 65, 24)"
        color="white"
        top="0"
        zIndex="3"
        position="fixed"
      >
        <Image pl="2rem" h="30px" src={logo} alt="Dan Abramov" />
        <Box display="flex" alignItems="center">
          <ul
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "1rem",
              listStyle: "none",
              display: "flex",
              gap: "1rem",
            }}
          >
            <li>
              <Link to="/invest">Investment</Link>
            </li>
            <li>
              <Link to="/how">How it works</Link>
            </li>
            <li>
              <a href="#services">FAQ</a>
            </li>
            <li>
              <a href="#contact">About Us</a>
            </li>
          </ul>
        </Box>

        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center" pr="1rem" gap="8px">
            <GrLanguage />
            EN
          </Box>
          <Link to="/contact"><Button>Contact Us</Button></Link> 
        </Box>
      </Box>
    </div>
  );
};

export default Header;
