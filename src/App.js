import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { apiUrl, filterData } from "./data";
import { toast } from "react-toastify";
import Spinners from "./components/Spinners";
import { Toast } from "react-toastify";
const App = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      ///output ->
      setCourses(output);
    } catch (error) {
      toast.error("There are some issues in Network");
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  });
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Filter filterData={filterData} />
      </div>
      <div>
        <div>{loading ? <Spinners /> : <cards courses={courses} />}</div>
      </div>
    </div>
  );
};

export default App;
