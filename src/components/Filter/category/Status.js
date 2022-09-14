import React from "react";
import FilterBtn from "../FilterBtn";

const Status = ({ setStatus, setCurrentPage, filter }) => {
  const status = ["Alive", "Dead", "Unknown"];
  return (
    <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Status
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div class="accordion-body" className='filter-body'>
            {status.map((item, index) => (
              <FilterBtn
                key={index}
                index={index}
                name="status"
                task={setStatus}
                setCurrentPage={setCurrentPage}
                input={item}
                filter={filter}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;