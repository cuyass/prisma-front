import React from "react";
import Card from "../components/Card";
import Pagination from "../components/Pagination";

function Learn () {
    return (
        <>
        <Card />
        <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
      </>
    );
};
export default Learn;