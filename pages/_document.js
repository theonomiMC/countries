// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html >
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&family=Playfair+Display:ital@1&family=Poppins:wght@300&display=swap" rel="stylesheet"/>
        </Head>
        <body className="bg-[#fafafa] dark:bg-[#202c37] text-gray-900 dark:text-gray-100">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument