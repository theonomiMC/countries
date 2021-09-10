import Image from 'next/image'
import Link from 'next/link'
import { numSeparator } from '../utils/numSeparator'


const Country = ({ country }) => {
    return (
        <div className="bg-gray-100 dark:bg-[#2b3945] flex items-center justify-center">
                <div className="w-80 dark:bg-[#2b3945] bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 duration-500 transform transition">
                    <Link href={`/${country?.alpha2Code.toLowerCase() || country?.alpha3Code}?country=${country.name}`}>
                        <a><Image src={country?.flag} alt={country?.name} width={350} height={200} className='cursor-pointer' /></a>
                    </Link>
                        <div className="dark:bg-[#2b3945] p-5 m-1 ">
                        <h2 className="dark:text-[#fafafa] mb-4 font-bold">{country?.name}</h2>
                        <p className="mt-1 font-"><strong>Population:</strong> {numSeparator(country?.population)}</p>
                        <p className="mt-1 font-"><strong>Region:</strong> {country?.region}</p>
                        <p className="mt-1 font-"><strong>Capital:</strong> {country?.capital}</p>
                    </div>
                </div>            
        </div>
    )
}

export default Country
