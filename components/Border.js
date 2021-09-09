import { useRouter } from 'next/router'

const Border = ({ border }) => {
    const router = useRouter()
    if(!border) return 'None'
    return (
        <>
            <li className='flex flex-row flex-wrap p-0 m-0'>
            <button className="py-2 px-3 text-gray-900 rounded dark:text-white dark:bg-[#2b3945] md:bg-white m-1 text-sm"
                onClick={() => router.push(`${border?.alpha2Code.toLowerCase()}?country=${border.name}`)}>{border.name}</button></li>
        </>
    )
}

export default Border
