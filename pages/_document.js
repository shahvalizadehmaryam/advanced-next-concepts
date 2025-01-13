import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="author" contant="Maryam shahvalizaeh" />
        </Head>
        <body>
          <h1>Maryam</h1>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
