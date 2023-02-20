import { Button } from "@chakra-ui/react";
import { SOCIAL_ICON, SOCIAL_NETWORK_COLORS } from "../utils/constants";

export function SocialBtn({ social, text, url }) {
  const SocialIconComponent = SOCIAL_ICON[social];
  return (
    <Button
      leftIcon={<SocialIconComponent />}
      colorScheme={SOCIAL_NETWORK_COLORS[social]}
      as="a"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </Button>
  );
}
