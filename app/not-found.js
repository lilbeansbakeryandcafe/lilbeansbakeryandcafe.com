import { faCookieBite } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export const metadata = {
    title: 'Page Not Found | Lil Beans Bakery and Cafe',
    description: 'Sorry, the page you are looking for doesn\'t exist or has been moved. Return to our homepage to explore our menu and bakery offerings.',
};

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-amber-50 text-brown-800 px-4">
            <div className="max-w-5xl text-center">
                <h1 className="text-6xl font-bold mb-4">404</h1>
                <h2 className="flex items-center justify-evenly text-center gap-2 text-2xl font-semibold mb-4 sm:justify-center">
                    <FontAwesomeIcon className='w-8' icon={faCookieBite} />
                    <span>Oops! This page seems half-baked</span>
                    <div className='w-8 block sm:hidden'></div>
                </h2>
                <p className="text-zinc-500 mb-6">The page you're looking for might have been moved, renamed, or is still in our recipe book waiting to be made.</p>
                <Link
                    href="/"
                    className="inline-block px-6 py-3 bg-yellow-500 text-white font-medium rounded-lg hover:bg-amber-700 transition-colors"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
}