import {
  Link as ChakraLink,
  Flex,
  Spacer,
  IconButton,
  Heading,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaHome} from "react-icons/fa";
import { Link as ReactRouterLink } from "react-router-dom";

export function NavBar() {
  return (
    <Flex py="10px" as="nav" bg="black">
      <Spacer></Spacer>
      <ReactRouterLink to="/">
        <IconButton cursor="pointer" mx="5px" bg="black" color="white" as={FaHome}/>
      </ReactRouterLink>
      <ChakraLink href="https://github.com/BTMurph0" isExternal>
        <IconButton
          cursor="pointer"
          mx="5px"
          bg="black"
          color="pink"
          as={FaGithub}
        />
      </ChakraLink>
      <ChakraLink
        href="https://www.linkedin.com/in/barry-murphy-969097a3/"
        isExternal
      >
        <IconButton
          cursor="pointer"
          mx="5px"
          bg="black"
          color="turquoise"
          as={FaLinkedin}
        />
      </ChakraLink>
    </Flex>
  );
}
