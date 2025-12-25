import React, { useState } from "react";

function Pagination() {
  const items = [
    "Item 1","Item 2","Item 3","Item 4","Item 5",
    "Item 6","Item 7","Item 8","Item 9","Item 10"
  ];

  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <h2>Pagination Example</h2>

      <ul>
        {currentItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <div style={{ display: "flex", gap: "10px" }}>
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => setCurrentPage(number)}
            style={{
              padding: "5px 10px",
              fontWeight: currentPage === number ? "bold" : "normal",
            }}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Pagination;
