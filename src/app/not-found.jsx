"use client";
import { useRouter } from "next/navigation"; // Assuming this is 'next/router' for Next.js routing

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-xl font-semibold text-gray-600 mb-2">
        Page Not Found.
      </h2>
      <p className="text-gray-600 mb-4">
        Sorry, we can&apos;t find the page you&apos;re looking for.
      </p>
      <button
        onClick={() => router.push("/")}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md"
      >
        Back to Home
      </button>
    </div>
  );
};

export default NotFound;
