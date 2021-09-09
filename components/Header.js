import { useEffect, useState } from 'react'
import { useTheme } from "next-themes"

export default function Header() {
    const { theme, setTheme } = useTheme()
    const [isMounted, setIsMounted] = useState(false)
    
    useEffect(() => {
      setIsMounted(true);
    }, []);
    const switchTheme=()=>{
      if(isMounted){
        setTheme(theme==="light"?"dark":"light")
      }
    }
    return (
        <div className="tracking-wide group flex font-bold dark:text-[#f1f1f1] text-black items-center h-auto justify-between p-2 w-full mx-auto sm:px-10 shadow-md">
            <h1>Where in the world?</h1>
            <div className='flex flex-nowrap justify-center items-center p-2'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
                <h1 className='pl-2'><button type='button' className='block font-bold' onClick={switchTheme}>Dark mode</button></h1>
            </div>

        </div>


    )
}