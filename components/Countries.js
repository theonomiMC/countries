import { useState } from 'react'
import Country from './Country'
import regions from '../utils/regions'

const Countries = ({ countries }) => {
    const [searchTerm, searchTermSet] = useState('')
    const [region, setRegion] = useState('')

    const selectRegion = (e) => {
        setRegion(e.target.value) 
    }
    const filterByRegion = !region || region === 'Filter by region' ? countries :
        countries.filter(c => c.region.toLowerCase() === region.toLowerCase())
    const renderCountries = filterByRegion.filter(c => c.name.toLowerCase().startsWith(searchTerm.toLowerCase()))
    return (
        <div className='text-sm flex justify-between flex-wrap mx-auto px-6 py-7 mb-24 sm:px-16'>
            <div className="flex w-full sm:w-1/3 items-center mb-10 ">
                <svg className="w-6 h-6 fill-current text-gray-500 ml-4 z-10"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black">
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg>
                <input type='text' placeholder="Search for a country ..."
                    value={searchTerm} onChange={e => searchTermSet(e.target.value)}
                    className=" w-full -ml-8 pl-12 dark:bg-[#2b3945] px-4 py-3 rounded-md focus:outline-none focus:border-gray-200" />
            </div>
            <div className=" inline-block relative w-40" id='regions'>
                <select onChange={selectRegion} aria-labelledby='regions'
                    className="dark:bg-[#2b3945] appearance-none block w-full py-3 px-4 pr-8 rounded-md leading-tight focus:outline-none" >
                    <option>Filter by region</option>
                    {regions.map((region, i) => <option key={i} value={region}>{region}</option>)}
                </select>
            </div>
            <div className='px-5 my-10 w-full sm:grid md:grid-cols-3 lg:grid-cols-4 gap-12 2xl:flex flex flex-wrap justify-center'>               
                {renderCountries.length ? renderCountries.map(country => (
                    <Country key={country.name} country={country} />
                )) : <h1>No country found</h1>}
            </div>
        </div>
    )
}

export default Countries
