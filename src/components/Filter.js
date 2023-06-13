import React from "react";

const Filter = (props) => {
  let filterData = props.filterData;
  return (
    <div>
      <nav>
        {filterData.map((data) => (
          <button key={data.id}>{data.title}</button>
        ))}
      </nav>
    </div>
  );
};

export default Filter;