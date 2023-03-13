import React, { useState } from 'react';



const Pagination = () => {
  const [totalItems, setTotalItems] = useState(100)
  const [itemsPerPage] = useState(20)
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = (number) => {
    setCurrentPage(number);
  };

  return (
    <nav className="sm:flex items-center justify-center my-4 sm:block hidden">
      <ul className="flex">
        {pageNumbers.map((number) => (
          <li key={number} className={`mx-1 ${currentPage === number ? 'font-bold' : ''}`}>
            <button
              type="button"
              onClick={() => handleClick(number)}
              className={`px-3 py-2 rounded-md  ${currentPage === number ? 'bg-[#FFB33E] text-white' : ''}`}
            >
              {number}

            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
