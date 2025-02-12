import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="flex flex-col items-center text-red-800 justify-center min-h-screen bg-black px-6">
        
        <h1 className="text-4xl font-bold text-gray-800">Oops! Page Not Found</h1>
        <p className="text-gray-600 mt-2 text-center">
            The page you’re looking for doesn’t exist. It might have been moved or deleted.
        </p>
        <Link to="/" className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
            Go Back Home
        </Link>
    </div>
    );
};

export default Error;