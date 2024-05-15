import { Link as ChakraLink, Box, Container, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { BiLogoPostgresql, BiLogoReact } from "react-icons/bi";
import { DiNodejs, DiJsBadge } from "react-icons/di";

export function Projects() {
  return (
    <Container mt="100px" maxWidth="960px">
      <Heading as="i" mb="50px" color="Purple" fontSize="3rem">My Projects</Heading>
      <Box>
        <ChakraLink href="https://resilient-alpaca-fd5bf3.netlify.app/" isExternal>
        <Heading color="mediumblue" fontSize="2rem" as="h3">NC News</Heading>
        </ChakraLink>
        <Flex>
          <Text color="#DBD8E3">Tech stack:</Text>
          <Icon color="turquoise" w="50px" h="30px" as={BiLogoPostgresql} />
          <Icon color="turquoise" w="50px" h="30px" as={BiLogoReact} />
          <Icon color="turquoise" w="50px" h="30px" as={DiJsBadge} />
          <Icon color="turquoise" w="50px" h="50px" as={DiNodejs} />
        </Flex>
        <Text as="i" color="#DBD8E3">
          This is my first project. It's a news website I made as a project on
          the Northcoders NC bootcamp. It was created using PostgreSQL and
          Express.js for the backend and React for the frontend. Users are
          greeted with a list of user profiles they can choose to login as. By
          default they are the guest profile. They cannot comment or vote on
          articles as a guest but selecting a user profile uses useContext to
          unlock the comment and voting options. The site is hosted on a free service which is why it can be slow to load the first time around. Click the project title above to see the hosted site.
        </Text>
      </Box>
    </Container>
  );
}
