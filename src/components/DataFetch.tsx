import React from "react";

type fetchDataProps = {
  status: "loading" | "success" | "error";
};

const DataFetch = ({ status }: fetchDataProps) => {
  if (status === "success") {
    return <h2>Data Fetched Successfully..</h2>;
  } else if (status === "error") {
    return <h2>Error.. Data could not fetched..</h2>;
  }
  return (
    <div>
      <h2>Data is Loading...</h2>
    </div>
  );
};

export default DataFetch;
