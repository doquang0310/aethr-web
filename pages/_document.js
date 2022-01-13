import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
            <title>AETHR - Free To Play & Free To Earn NFT Game</title>
            <meta name="description" content="Free Web tutorials"/>
            <meta name="keywords" content="AETHR, Free To Play, Free To Earn NFT Game,NFT, Game"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument