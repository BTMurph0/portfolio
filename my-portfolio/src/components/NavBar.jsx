import { Link as ChakraLink, Flex, Spacer, IconButton } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaHome } from "react-icons/fa";
import { Link as ReactRouterLink } from "react-router-dom";

export function NavBar() {
  return (
    <Flex py="10px" as="nav" bg="black">
      <Spacer></Spacer>
      <ReactRouterLink to="/">
        <IconButton
          aria-label="home button"
          cursor="pointer"
          mx="5px"
          bg="black"
          color="#DBD8E3"
          as={FaHome}
        />
      </ReactRouterLink>
      <ChakraLink href="https://github.com/BTMurph0" isExternal>
        <IconButton
          aria-label="link to github profile"
          cursor="pointer"
          mx="5px"
          bg="black"
          color="hotpink"
          as={FaGithub}
        />
      </ChakraLink>
      <ChakraLink
        href="https://www.linkedin.com/in/barry-murphy-969097a3/"
        isExternal
      >
        <IconButton
          aria-label="link to linkedin profile"
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
