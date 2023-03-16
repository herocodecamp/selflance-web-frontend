import React, { useState } from 'react';



const SePagination = () => {

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
    <nav className="flex items-center justify-center my-4 ">
      <ul className="flex">
        {pageNumbers.map((number) => (
          <li key={number} className={`mx-1 ${currentPage === number ? 'font-bold' : ''}`}>
            <button
              type="button"
              onClick={() => handleClick(number)}
              className={`px-3 py-2 rounded-md  ${currentPage === number ? 'bg-[#00538F] text-white' : ''}`}
            >
              {number}

            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SePagination;
