// ... (imports
import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import "./Product.css";

export default function Products({ searchTerm }) {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `http://localhost:8080/api/pagination?page=${currentPage}&size=3`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Data received:", data.content);
        setProducts(data.content || []);
        setTotalPages(data.totalPages || 1);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  return (
    <>
      <h2>Product List</h2>
      <p>{searchTerm}</p>
      {loading && <p>Loading...</p>}
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <div className="product-image">
              <img
                src={`http://localhost:8080/images/${product.images}`}
                alt={product.images}
              />
            </div>
            <div className="product-details">
              <h3>{product.name}</h3>
              <p>Brand: {product.brand}</p>
              <p>Price: ${product.price}</p>
              <p>Description: {product.description}</p>
            </div>
          </li>
        ))}
      </ul>
      <div class="pagination-container">
        <div className="pagination">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 0 || loading}
            className="Button"
          >
            Previous
          </button>

          <span>{`Page ${currentPage + 1} of ${totalPages}`}</span>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages - 1 || loading}
            className="Button"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
