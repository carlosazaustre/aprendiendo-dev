import { Box, Container, Flex, Spacer, Text } from "@chakra-ui/react";
import { SocialBtn } from "./SocialBtn";
import { COLOR_THEME } from "../utils/constants";

export function NavBar({ theme }) {
  return (
    <Box bg={COLOR_THEME[theme]}>
      <Container maxW="container.md">
        <Flex p="4" w="100%" h="20" justify="" as="nav">
          <div>
            <Text as="span" color="black">
              aprendiendo
            </Text>
            <Text as="span" color="yellow.600">
              .dev
            </Text>
          </div>
          <Spacer />
          <SocialBtn
            social="discord"
            text="Únete a la comunidad"
            url="https://discord.gg/carlosazaustre"
          />
        </Flex>
      </Container>
    </Box>
  );
}
