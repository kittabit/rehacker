import '../styles/globals.css'
import Link from 'next/link';

export default function RootLayout({ children }) {

    return (
        <html lang="en">
            <head>
                <title>Rehacker - HackerNews NextJS Clone</title>

                <meta name="viewport" content="viewport-fit=cover" />
            </head>
            <body>
                <header className="relative flex flex-col jus items-center justify-center overflow-hidden bg-hn-orange">
                    <nav className="container mx-auto pt-[15px] pb-[15px]">
                        <ul className="flex justify-between items-center w-full max-w-4xl mx-auto">
                            <li className="text-white">
                                <Link href="/" className="hover:underline underline-offset-2">
                                    Top
                                </Link>
                            </li>

                            <li className="text-white">
                                <Link href="/new" className="hover:underline underline-offset-2">
                                    New
                                </Link>
                            </li>

                            <li className="text-white">
                                <Link href="/show" className="hover:underline underline-offset-2">
                                    Show
                                </Link>
                            </li>

                            <li className="text-white">
                                <Link href="/ask" className="hover:underline underline-offset-2">
                                    Ask
                                </Link>
                            </li>

                            <li className="text-white">
                                <Link href="/jobs" className="hover:underline underline-offset-2">
                                    Jobs
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                
                {children}

                <footer className="text-black bg-gray-50 pt-2 pb-6">
                    <div className="max-w-4xl mx-auto w-full text-center">
                        <span className="block text-base">Data Provided by <a href="https://github.com/HackerNews/API" className="hover:underline underline-offset-2" target="_blank" rel="noreferrer">Official HackerNews API</a>.</span>
                        <span className="block text-base">Built w/ &#10084; by <a href="https://kittabit.com/" className="hover:underline underline-offset-2" target="_blank" rel="noreferrer">Kittabit</a>.</span>
                        <span className="block text-base">Source Code on <a href="https://github.com/kittabit/rehacker" className="hover:underline underline-offset-2" target="_blank" rel="noreferrer">GitHub</a>.</span>
                    </div> 
                </footer>
            </body>
        </html>
    );

}