import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-orange-500">Jumia Clone</h1>
          <nav className="space-x-4">
            <Link to="/login" className="text-gray-600 hover:text-orange-500">Login</Link>
            <Link to="/register" className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
              Create Account
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col justify-center items-center text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
          Your Favorite Online Marketplace
        </h2>
        <p className="text-gray-600 max-w-xl mb-6">
          Shop the latest electronics, fashion, home appliances, and more —
          all in one convenient place.
        </p>
        <div className="space-x-4">
          <Link to="/register" className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600">
            Get Started
          </Link>
          <Link to="/login" className="border border-orange-500 text-orange-500 px-6 py-3 rounded-lg hover:bg-orange-100">
            Sign In
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Jumia Clone. All rights reserved.
      </footer>
    </div>
  );
}
