"use client";
import Link from 'next/link';
import Image from 'next/image';

const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
            <div className="text-center space-y-6 max-w-lg">
                {/* Visual Element */}
                <h1 className="text-9xl font-extrabold text-blue-600 tracking-widest">404</h1>
                
                <div className="bg-blue-600 px-2 text-sm rounded rotate-12 absolute">
                    Page Not Found
                </div>

                {/* Message */}
                <div className="pt-8">
                    <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">
                        Oops! Look like you're lost.
                    </h2>
                    <p className="mt-4 text-gray-600">
                        The page you are looking for might have been removed, had its name changed, 
                        or is temporarily unavailable.
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                    <Link 
                        href="/" 
                        className="w-full sm:w-auto px-8 py-3 font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition duration-300 shadow-lg"
                    >
                        Back to Homepage
                    </Link>
                    
                    <button 
                        onClick={() => window.history.back()}
                        className="w-full sm:w-auto px-8 py-3 font-semibold rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 transition duration-300"
                    >
                        Go Back
                    </button>
                </div>
            </div>

        
        </div>
    );
};

export default NotFoundPage;