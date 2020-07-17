# devenv.now.sh
This website will help you to setup the Development environment which will keep all the personal Directory and Development Directory different so that you can work fearlessly and feel like a real Developer.
## File Structure
### src
```
src/
┣ components/
┃ ┣ Code.js
┃ ┣ Container.js
┃ ┣ Footer.js
┃ ┣ Hero.js
┃ ┣ NewsLetter.js
┃ ┣ Terminal.js
┃ ┣ UbuntuInstallation.js
┃ ┣ WhoAmI.js
┃ ┗ Why.js
┣ pages/
┃ ┣ api/
┃ ┃ ┗ subscribe.js
┃ ┣ _app.js
┃ ┣ _document.js
┃ ┗ index.js
┗ theme/
┃ ┗ index.js
```

## Running Locally

```bash
$ git clone https://github.com/pranavp10/devenv.now.sh.git
$ cd devenv.now.sh
$ yarn
$ yarn dev
```

To use the `subscribe.js` api you need `.env.local` file and add the api key to it find more about [MAILCHIMP_API_KEY](https://mailchimp.com/help/about-api-keys/#find+or+generate+your+api+key) and [MAILCHIMP_LIST_ID](https://mailchimp.com/help/find-audience-id/)
```
MAILCHIMP_API_KEY=
MAILCHIMP_LIST_ID=
```

## Built Using
- [Next.js](https://nextjs.org/)
- [Chakra UI](https://chakra-ui.com/)

## Deployed on
- [Vercel](https://vercel.com)

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature or Bug Branch (`git checkout -b feature/AmazingFeature`) `or` (`git checkout -b bug/bugName`)
3. Commit your Changes (`git commit -m 'comment'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`) `or`(`git push origin bug/bugName`)
5. Open a Pull Request
