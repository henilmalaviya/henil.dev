import Header from "@/components/common/Header";

import {
  createStyles,
  Container,
  Title,
  Button,
  Group,
  Text,
  Divider,
  Avatar,
} from "@mantine/core";

import Link from "next/link";

import SocialLink from "@/components/SocialLink";

import MyImage from "@/public/img/henil-malaviya.jpg";

const getAge = (birthDate) =>
  Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e10);

const useStylesForSectionOne = createStyles((theme) => ({
  root: {
    minHeight: "90vh",
  },
  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,

    [theme.fn.smallerThan("md")]: {
      paddingTop: theme.spacing.xl * 2,
      paddingBottom: theme.spacing.xl * 2,
      flexDirection: "column",
    },
  },

  content: {
    maxWidth: 480,
    marginLeft: theme.spacing.xl * 3,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginLeft: 0,
      paddingTop: theme.spacing.xl,
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

  image: {
    flex: 1,
    objectFit: "fill",
    height: "fit-content",

    [theme.fn.smallerThan("md")]: {
      marginLeft: "auto",
      marginRight: "auto",
      width: "30%",
    },
  },

  highlight: {
    backgroundColor: theme.fn.variant({
      variant: "light",
      color: theme.primaryColor,
    }).background,
    borderRadius: theme.radius.sm,
    padding: "4px 5px",
    margin: "0px 0px",
  },
}));

const SectionOne = () => {
  const { classes } = useStylesForSectionOne();

  const age = getAge("2006-04-06");

  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.inner}>
          <Avatar
            src={MyImage.src}
            alt="It's Me"
            className={classes.image}
            radius='50%'
            placeholder={
              <Text align='center'>My Image Could Not Load! :(</Text>
            }
          />
          <div className={classes.content}>
            <Title className={classes.title}>
              Hey, I'm <span className={classes.highlight}>Henil</span>
            </Title>
            <Text color='dimmed' mt='md'>
              I am {age} and a{" "}
              <span className={classes.highlight}>
                Full Stack web developer
              </span>{" "}
              with a goal to help the Software Community. I do most of the
              projects my self and try to be better at my work. I have skills
              ranging from HTML, CSS, JavaScript to TypeScript, NodeJs, ReactJs,
              NextJs, NuxtJs, Svelte, VueJs and more...
            </Text>

            <Group mt={30}>
              <Link href='mailto:henilmalaviya06@gmail.com' passHref>
                <Button radius='xl' size='lg' component='a'>
                  Contact Me
                </Button>
              </Link>
            </Group>
          </div>
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
            <SocialLink to='youtube' />
            <SocialLink to='medium' />
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
