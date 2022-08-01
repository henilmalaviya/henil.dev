import Header from "@/components/common/Header";

import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  Divider,
} from "@mantine/core";

import Link from "next/link";

import SocialLink from "@/components/SocialLink";

const useStylesForSectionOne = createStyles((theme) => ({
  root: {
    minHeight: "90vh",
  },
  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
  },

  content: {
    maxWidth: 480,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  highlight: {
    position: "relative",
    backgroundColor: theme.fn.variant({
      variant: "light",
      color: theme.primaryColor,
    }).background,
    borderRadius: theme.radius.sm,
    padding: "4px 12px",
  },
}));

const SectionOne = () => {
  const { classes } = useStylesForSectionOne();
  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>Hey, I'm Henil</Title>
            <Text color='dimmed' mt='md'>
              I am a Full Stack web Developer with a goal to help the Software
              Community. I do most of the projects my self and try to be better
              at my work. I have skills ranging from HTML, CSS, JavaScript to
              NodeJs, React, NextJs, NuxtJs, Svelte, VueJs and more...
            </Text>

            <Group mt={30}>
              <Link href='mailto:henilmalaviya06@gmail.com' passHref>
                <Button radius='xl' size='lg' component='a'>
                  Contact Me
                </Button>
              </Link>
            </Group>
          </div>
          <Image
            src='/img/henil-malaviya.jpg'
            alt="It's Me"
            withPlaceholder
            className={classes.image}
            placeholder={
              <Text align='center'>My Image Could Not Load! :(</Text>
            }
          />
        </div>
      </Container>
    </div>
  );
};

const useStylesForSectionTwo = createStyles((theme) => ({
  root: {
    marginTop: 40,
  },
  social: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  links: {
    display: "flex",
    marginTop: 10,
  },
}));

const SectionTwo = () => {
  const { classes } = useStylesForSectionTwo();
  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.social}>
          <Text color='dimmed' size='xl'>
            You can Find me at...
          </Text>
          <div className={classes.links}>
            <SocialLink to='github' />
            <SocialLink to='twitter' />
          </div>
        </div>
      </Container>
    </div>
  );
};

const Index = () => {
  return (
    <>
      <Header activeLink='About'></Header>
      <SectionOne />
      <Divider my='sm' />
      <SectionTwo />

      <div style={{ marginTop: 50 }}></div>
    </>
  );
};

export default Index;
