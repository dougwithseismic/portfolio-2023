import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head>
      <link href="https://api.fontshare.com/v2/css?f[]=nunito@400&f[]=bebas-neue@400&f[]=satoshi@900,700,500,300,400&display=swap" rel="stylesheet"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
