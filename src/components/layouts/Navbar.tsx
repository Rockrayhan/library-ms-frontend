import React, { useState } from "react";
import { Link } from "react-router";
import { AddBook } from "../module/books/AddBook";
import { Button } from "../ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-800 shadow-md mb-6">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo / Brand */}
        <div className="text-xl text-teal-300 font-bold ">
          <Link to="/" className="center gap-2.5">
            <img
              className="h-10 w-10 rounded-md"
              src="/images/logo.png"
              alt=""
            />
            Library Manager
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <Link to="/books">
            <Button className="bg-teal-400">All Books</Button>
          </Link>

          <AddBook />

          <Link to="/borrow-summary">
            <Button className="bg-teal-400">Borrow Summery</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {/* Hamburger Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  isOpen
                    ? "M6 18L18 6M6 6l12 12" // X icon
                    : "M4 6h16M4 12h16M4 18h16" // Hamburger
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-1.5">
          <span>
            <Link to="/books">
              <Button className="bg-teal-400">All Books</Button>
            </Link>
          </span>
          <span>
            <AddBook />
          </span>

          <span>
            <Link to="/borrow-summary">
              <Button className="bg-teal-400">Borrow Summery</Button>
            </Link>
          </span>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
