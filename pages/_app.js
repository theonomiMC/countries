import '../styles/globals.css'
import 'tailwindcss/tailwind.css';
import { ThemeProvider } from "next-themes";

import Header from '../components/Header'

function MyApp({ Component, pageProps }) {
  
  return <ThemeProvider attribute="class">
    <main>
      <Header />
      <Component {...pageProps} />
    </main>
  </ThemeProvider>

}

export default MyApp
