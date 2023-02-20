import { TwitterShareButton, TwitterIcon } from "react-share";
import styled from "@emotion/styled";
import { Box, Flex, Spacer } from "@chakra-ui/react";

const StyledShare = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 2rem;
  right: 0;
  z-index: 1;
  margin: 0 auto;
  transition: bottom 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    bottom: 2.5rem;
  }
`;

export function TwitterShareBtn({
  url,
  title,
  text = "¡Compártelo en Twitter!",
}) {
  return (
    <StyledShare>
      {/* <Spacer /> */}
      <TwitterShareButton url={url} title={title}>
        <Flex
          bg="white"
          color="black"
          fontFamily="heading"
          fontWeight="500"
          align="center"
          justify="space-between"
          width="260px"
          p={2}
          m={2}
          rounded="2xl"
          boxShadow="dark-lg"
        >
          <Box as="p" p="2">
            {text}
          </Box>
          <TwitterIcon size={32} round={true} />
        </Flex>
      </TwitterShareButton>
      {/* <Spacer /> */}
    </StyledShare>
  );
}
