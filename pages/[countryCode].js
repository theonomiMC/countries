import Image from 'next/image'
import { numSeparator } from '../utils/numSeparator'
import { useRouter } from 'next/router'
import Border from '../components/Border'

const CountryInfo = ({ country, neighbors }) => {
    const router = useRouter()

    if (router.isFallback && !country) {
        return <h1 className='text-center mt-20 text-red-500'>Loading ...</h1>
    }
    if (!country) return <h1 className='text-2xl tracking-widest'>loading ...</h1>
    return (
        <div className="flex-col flex mx-auto px-8 h-screen">
            <div className='my-8 mx-0 text-left'>
                <button onClick={() => router.push(`/`)}
                    className="md:w-30 
                    text-gray-900 rounded 
                    dark:bg-[#2b3945] 
                    dark:text-white 
                    bg-white font-bold py-2 px-6 mr-2 flex 
                    items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                    </svg>
                    <span className='block tracking-wider px-2 text-sm'>Back</span>
                </button>
            </div>

            <div className='min-w-full flex flex-col md:flex-row flex-nowrap justify-between items-center'>
                <div className='flex-no-shrink m-0 md:w-1/2 w-80'>
                    <Image src={country?.flag} alt={country?.name} layout='responsive'
                        height={300}
                        width={400}
                        className='block mx-auto'
                    />
                </div>
                <div className='justify-centers 
                ml-7
                flex flex-col
                
                flex-nowrap 
                lg:w-1/2 
                px-4 py-2 
                w-1/2 ' >
                    <div className="my-0">
                        <h2 className='text-xl dark:text-white mb-4 font-bold text-black'>{country?.name}</h2>
                    </div>
                    <div className='flex flex-wrap flex-col md:flex-row justify-between w-full'>
                        <ul className='flex flex-wrap w-full pr-3 md:w-1/2 mb-8'>
                            <li className="mt-1 w-full">Native Name: {country?.nativeName}</li>
                            <li className="mt-1 w-full"><strong>Population:</strong> {numSeparator(country?.population)}</li>
                            <li className="mt-1 w-full"><strong>Region:</strong> {country?.region}</li>
                            <li className="mt-1 w-full"><strong>Sub Region:</strong> {country?.subregion}</li>
                            <li className="mt-1 w-full"><strong>Capital:</strong> {country?.capital}</li>
                        </ul>
                        <ul className='flex flex-col flex-wrap w-full md:w-1/2 mb-8'>
                            <li className="mt-1 w-full"><strong>Top Level Domain:</strong> {country?.topLevelDomain}</li>
                            <li className="mt-1 w-full"><strong>Currencies:</strong> {country?.currencies.map(cur => <span key={cur.name}>{cur.name}</span>)}</li>
                            <li className="mt-1 w-full"><strong>Languages:</strong> {country?.languages.map(lan => <strong key={lan.name}>{lan.name}</strong>)}</li>
                        </ul>
                    </div>
                    <div className='flex justify-items-start flex-nowrap flex-col text-left'>
                        <h2 className="text-xl dark:text-white mb-4 font-bold text-gray-800">Border Countries: </h2>
                        <ul className='flex p-0 m-0 flex-wrap'>
                            {(neighbors.length && neighbors) ? neighbors.map((border, i) => <Border key={i} border={border} />) : 'None'}
                        </ul>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default CountryInfo

const countriesUrl = `https://restcountries.com/v2`

export async function getStaticPaths() {
    let countries
    const response = await fetch(`${countriesUrl}/all`)
    countries = await response.json()
    if ( countries.length ){
        
        const paths = countries.map(c => ({
            params: { countryCode: `${c.alpha2Code}` }
        }))
    }
    return { paths:[], fallback: true }
}

export async function getStaticProps({ params }) {
    const responseCountry = await fetch(`${countriesUrl}/alpha/${params.countryCode}`)
    let responseBorders, neighbors;
    const country = await responseCountry.json().catch(e => console.log(e.message))
    const borderCountries = country?.borders ? country?.borders.join(',') : []

    if (borderCountries) {
        responseBorders = await fetch(`${countriesUrl}/alpha?codes=${borderCountries}`)
        neighbors = await responseBorders.json()
    } else {
        neighbors = []
    }

    if (!country) {
        return {
            notFound: true,
        }
    }
    return {
        props: {
            country,
            neighbors
        }
    }
}
