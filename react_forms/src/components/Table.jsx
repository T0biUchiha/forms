import React from "react";

// let data = JSON.parse(localStorage.getItem("userInfo")) || [];
// console.log("data:", data);
const Table = ({submit} ) => {
  console.log("submit",submit);
  return submit.map(data =>  (
    <tr key={data.id}>
      <td><img src="http://thispix.com/wp-content/uploads/2015/06/Edit-9898-1-300x300.jpg" alt="No Photo"/></td>
      <td>{data.name}</td>
      <td>{data.age}</td>
      <td>{data.selectedDept}</td>
      <td>{data.salary}</td>
      <td>{data.Mstatus}</td>
      <td>{data.address}</td>
    </tr>
  ));
};

export default Table;
