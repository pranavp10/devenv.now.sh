import { NextSeo } from 'next-seo';

const SEO = () => (
  <NextSeo
    title="Developers environment"
    description="It will help you setup the Development environment which will keep the personal and Development Directory different so that you can work fearlessly."
    canonical="https://devenv.now.sh/"
    openGraph={{
      url: 'https://devenv.now.sh/',
      title: 'Developers environment',
      description:
        'It will help you setup the Development environment which will keep the personal and Development Directory different so that you can work fearlessly.',
      images: [
        {
          url: 'https://devenv.now.sh/shareSEO.png',
          alt: 'SEO Image',
        },
      ],
      site_name: 'Development .env setup',
    }}
  />
);
export default SEO;
