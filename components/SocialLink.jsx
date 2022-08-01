import { ActionIcon } from "@mantine/core";

import { IconBrandGithub, IconBrandTwitter } from "@tabler/icons";

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
  npm: {
    href: "https://twitter.com/henil06",
    styleColor: "#C80000",
    icon: <IconBrandTwitter size={30} />,
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
