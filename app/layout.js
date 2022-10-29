import '../styles/globals.css'

import Script from 'next/script';

import NavLinks from '../components/navigation/NavLinks';
import PaginateNews from '../components/navigation/PaginateNews';
import ScrollToTop from '../components/global/ScrollToTop';

export default function RootLayout({ children }) {

    const env = process.env

    return (
        <html lang="en">
            <head>
                <title>Rehacker - HackerNews NextJS Clone</title>
                <meta name="description" content="Simple and easy to use NextJS HackerNews Clone." />
                <meta name="viewport" content="width=device-width" />

                { env['NEXT_PUBLIC_ANALYTICS_ID'] &&
                    <>
                    <Script strategy="afterInteractive" id="gtm_snippet" dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','${env['NEXT_PUBLIC_ANALYTICS_ID']}');`}}></Script>
                    </>
                }
            </head>
            <body className="relative">
                { env['NEXT_PUBLIC_ANALYTICS_ID'] &&
                    <>
                        <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${env['NEXT_PUBLIC_ANALYTICS_ID']}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>
                    </>
                }

                <header className="relative flex flex-col jus items-center justify-center overflow-hidden bg-hn-orange">
                    <nav className="container mx-auto pt-[15px] pb-[15px]">

                        <ul className="flex justify-between items-center w-3/4 lg:w-full max-w-5xl mx-auto">
                            <NavLinks />
                        </ul>
                    </nav>
                </header>

                <PaginateNews />
                
                {children}

                <footer className="text-black bg-gray-50 pt-2 pb-6">
                    <div className="max-w-4xl mx-auto w-full text-center">
                        <span className="block text-sm">Data provided by <a href="https://github.com/HackerNews/API" className="hover:underline underline-offset-2" target="_blank" rel="noreferrer">Official HackerNews API</a>.</span>
                        <span className="block text-sm">Built w/ &#10084; by <a href="https://kittabit.com/" className="hover:underline underline-offset-2" target="_blank" rel="noreferrer">Kittabit</a>.</span>
                        <span className="block text-sm">Source Code on <a href="https://github.com/kittabit/rehacker" className="hover:underline underline-offset-2" target="_blank" rel="noreferrer">GitHub</a>.</span>
                    </div> 
                </footer>

                <ScrollToTop />

            </body>
        </html>
    );

}