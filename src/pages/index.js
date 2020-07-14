import { Box, Flex } from '@chakra-ui/core';
import { NextSeo } from 'next-seo';
import Container from '../components/Container';
import Hero from '../components/Hero';
import Why from '../components/Why';
import UbuntuInstallation from '../components/UbuntuInstallation';
import Terminal from '../components/Terminal';
import Code from '../components/Code';
import WhoAmI from '../components/WhoAmI';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';

const Index = () => (
  <>
    <NextSeo
      title="Developers environment"
      description="Dev.env will help you to setup the Development environment which will keep all the person Directory and Development Directory different so that you can work fearlessly and feel like a real Developer"
      canonical="https://devenv.now.sh/"
      openGraph={{
        url: 'https://devenv.now.sh/',
        title: 'Developers environment',
        description:
          'Dev.env will help you to setup the Development environment which will keep all the person Directory and Development Directory different so that you can work fearlessly and feel like a real Developer',
        images: [
          {
            url: 'https://devenv.now.sh/shareSEO.png',
            alt: 'SEO Image',
          },
        ],
        site_name: 'Development .env setup',
      }}
    />
    <Box as="main">
      <Flex justifyContent="center" flexDirection="column" bg="#49fcd4">
        <Container>
          <Hero />
        </Container>
      </Flex>
      <Flex justifyContent="center" flexDirection="column">
        <Why />
      </Flex>
      <Flex justifyContent="center" flexDirection="column" bg="#FBFBFB">
        <UbuntuInstallation />
      </Flex>
      <Flex flexDirection="column">
        <Terminal />
      </Flex>
      <Flex justifyContent="center" flexDirection="column" bg="#FBFBFB">
        <Code />
      </Flex>
      <Flex flexDirection="column">
        <WhoAmI />
      </Flex>
      <Flex justifyContent="center" flexDirection="column" bg="#FBFBFB">
        <NewsLetter />
        <Footer />
      </Flex>
    </Box>
  </>
);

export default Index;
