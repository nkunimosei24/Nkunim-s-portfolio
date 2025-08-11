import React from 'react';
import { NavLink } from 'react-router';
import { portfolioCategories } from '../../data/portfolio';

const PortfolioNavbar = () => {
  return (
    <div className="mx-4 sm:mx-10 my-4 shadow-lg p-4 bg-yellow-50/50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0 mt-25">
      {/* Title */}
      <h1 className="text-lg sm:text-xl font-semibold text-gray-800 text-center sm:text-left">
        PORTFOLIO
      </h1>

      {/* Links */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-center">
        {portfolioCategories.map((cat) => (
          <NavLink
            key={cat.id}
            to={`/projects/${cat.id}`}
            className={({ isActive }) =>
              `text-gray-700 font-light pb-1 border-b-2 transition-colors duration-200 ${
                isActive ? 'border-pink-700 text-pink-700' : 'border-transparent hover:text-pink-600'
              }`
            }
          >
            {cat.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default PortfolioNavbar;
