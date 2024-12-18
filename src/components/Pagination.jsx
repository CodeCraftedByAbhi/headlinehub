import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="pagination justify-content-center">
      <button className='btn btn-primary mx-3 w-10' style={{width: "7rem"}}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span className="text-center text-decoration-underline" style={{width: "7rem", alignSelf:"center"}}>Page {currentPage} of {totalPages}</span>
      <button className='btn btn-primary mx-3' style={{width: "7rem"}}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;