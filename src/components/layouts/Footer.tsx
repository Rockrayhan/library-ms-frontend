// import { Link } from "react-router-dom";

import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-teal-300 py-10 mt-20 shadow-inner">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-semibold text-teal-400 flex gap-2.5">  <img className="h-10 w-10 rounded-lg" src="/images/logo.png" alt="" /> Library Manager</h2>
          <p className="mt-2 text-sm text-gray-400">
            Manage your books, track borrowing, and keep your library organized with ease.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/books" className="hover:underline">Books</Link></li>
            <li><Link to="/borrow-summary" className="hover:underline">Borrowed</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <p className="text-sm text-gray-400">Email: support@mylibrary.com</p>
          <p className="text-sm text-gray-400">Phone: +1 234 567 890</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-slate-700 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} MyLibrary. All rights reserved.
      </div>
    </footer>
  );
}
