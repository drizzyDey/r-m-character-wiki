import React from "react";
import Status from "./category/Status";

const Filter = ({
  setCurrentPage,
  setStatus,
  status,
  filter,
}) => {
  const clear = () => {
    setStatus("");
    setCurrentPage(1);
    window.location.reload(false);
  };
  return (
    <div className="col-lg-10 col-12 mb-5 mx-auto">
      <div className="text-center fw-bold fs-4 mb-2">FILTER BY</div>
      <div
        style={{ cursor: "pointer" }}
        onClick={clear}
        className="text-primary text-decoration-underline text-center mb-3"
      >
        Clear Filters
      </div>
      <div className="accordion" id="accordionExample">
        <Status
          setCurrentPage={setCurrentPage}
          setStatus={setStatus}
          status={status}
          filter={filter}
        />
      </div>
    </div>
  );
};

export default Filter;