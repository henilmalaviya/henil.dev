import { ActionIcon } from "@mantine/core";

import {
  IconBrandGithub,
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandMedium,
} from "@tabler/icons";

const socials = {
  github: {
    href: "https://github.com/henil0604",
    styleColor: "#161B22",
    icon: <IconBrandGithub size={30} />,
  },
  twitter: {
    href: "https://twitter.com/henil06",
    styleColor: "#1DA1F2",
    icon: <IconBrandTwitter size={30} />,
  },
  youtube: {
    href: "https://www.youtube.com/channel/UChe1_Uk7eR5fOPnHr3X1CoA",
    styleColor: "#FF0000",
    icon: <IconBrandYoutube size={30} />,
  },
  medium: {
    href: "https://henil06.medium.com/",
    styleColor: "#292929",
    icon: <IconBrandMedium size={30} />,
  },
};

export default function SocialLink({ to }) {
  let social = socials[to];

  return (
    <ActionIcon
      variant='filled'
      component='a'
      href={social.href}
      target='_blank'
      color={social.color}
      size='xl'
      style={{ margin: "0 3px", backgroundColor: social.styleColor }}
    >
      {social.icon}
    </ActionIcon>
  );
}
