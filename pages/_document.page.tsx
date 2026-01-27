import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render () {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Mogra&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Lato&family=Lobster&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet" />

          <link rel="shortcut icon" href="/logo.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
