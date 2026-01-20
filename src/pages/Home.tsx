import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-900">
            <h1 className="text-4xl font-bold mb-4 text-brand-gold">
                FouDeBusinessWorld
            </h1>
            <p className="text-xl mb-8">
                Hello World - Platform Initialized
            </p>
            <div className="space-x-4">
                <button className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition">
                    Get Started
                </button>
                <Link to="/about" className="text-blue-600 hover:underline">
                    About Us
                </Link>
            </div>
        </div>
    );
}
