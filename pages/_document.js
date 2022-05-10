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
          <meta name="description" content="The AETHR World uses blockchain technology and NFTs to empower the players and creators, Free To Earn NFT Game ATH token." />
          <meta name="keywords" content="AETHR, Free To Play, Free To Earn NFT Game,NFT, Game" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta property="og:site_name" content="AETHR" />
          <meta property="og:type" content="website" />
          <meta property="og:title" itemProp="name" content="AETHR - Free To Play & Free To Earn NFT Game" />
          <meta property="og:url" itemProp="url" content="https://aethr.world/" />
          <meta property="og:description" content="The AETHR World uses blockchain technology and NFTs to empower the players and creators, Free To Earn NFT Game ATH token." />

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