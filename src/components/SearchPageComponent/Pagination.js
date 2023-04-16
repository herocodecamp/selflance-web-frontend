import React, { useState } from 'react';



const Pagination = ({ page, total, limit, setPage}) => {
 
  const totalPages = Math.ceil(total / limit);

	const onClick = (newPage) => {
		setPage(newPage + 1);
	};




  // const [totalItems, setTotalItems] = useState(100)
  // const [itemsPerPage] = useState(20)
  // const pageNumbers = [];

  // for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
  //   pageNumbers.push(i);
  // }

  // const [currentPage, setCurrentPage] = useState(1);

  // const handleClick = (number) => {
  //   setCurrentPage(number);
  // };

  return (
    <nav className="sm:flex items-center justify-center my-4 sm:block hidden">
      <div className="flex flex-row">
        {
          totalPages > 0 &&
          [...Array(totalPages)].map((val, index) => (

            <button
              onClick={() => onClick(index)}
              className={
                `px-3 py-2 rounded-md ${page === index + 1
                  ? 'font-bold bg-[#FFB33E] text-white'
                  :''}`
                
              }
              key={index}
            >
              {index + 1}
            </button>
          ))

        }
        {/* {pageNumbers.map((number) => (
          <li key={number} className={`mx-1 ${currentPage === number ? 'font-bold' : ''}`}>
            <button
              type="button"
              onClick={() => handleClick(number)}
              className={`px-3 py-2 rounded-md  ${currentPage === number ? 'bg-[#FFB33E] text-white' : ''}`}
            >
              {number}

            </button>
          </li>
        ))} */}
      </div>
    </nav>
  );
};

export default Pagination;
