import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Pagination = () => {
  const { page, handlePageChange, totalPages } = useContext(AppContext);

  return (
    <div className="w-full fixed bottom-0 bg-white border-t-2 py-2 ">
      <div className="w-11/12 max-w-2xl mx-auto  flex justify-between items-center">
        <div>
          {page > 1 && (
            <button
              className="rounded-md border-2 border-gray-300 py-1 px-4 "
              onClick={() => handlePageChange(page - 1)}
            >
              Previous
            </button>
          )}

          {page < totalPages && (
            <button
              className="rounded-md border-2 border-gray-300 py-1 px-4 "
              onClick={() => handlePageChange(page + 1)}
            >
              Next
            </button>
          )}
        </div>

        <p className="text-sm font-semibold">
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
};

export default Pagination;
