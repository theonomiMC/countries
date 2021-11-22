import Head from 'next/head'
import Countries from '../components/Countries'

export default function Home({ countries }) {
  return (
    <>
      <Head>
        <title>Countries</title>
        <meta name="description" content="Get detaild info about countries" />
        <link rel="icon" href="/favicon3.png" />
      </Head>
      <Countries countries={countries} />
    </>
  )
}

// useing getStaticProps cause there is no change in countries
export async function getStaticProps() {
  const response = await fetch("https://restcountries.com/v2/all")
  const data = await response.json()

  if (!data) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      countries: data
    }
  }
}
