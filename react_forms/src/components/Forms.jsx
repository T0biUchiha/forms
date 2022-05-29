import React, { useEffect, useState } from "react";
import Table from "./Table";
import styles from "./forms.module.css";

const getData = () => {
  const data = JSON.parse(localStorage.getItem("userInfo"));

  if (data) {
    console.log("data", data);
    return data;
  } else {
    return [];
  }
};

const Forms = () => {
  const [submit, setSubmit] = useState(getData());
  // console.log('submit:', submit)
  const [form, setForm] = useState({
    name: "",
    address: "",
    salary: "",
    age: "",
    selectedDept: "",
    Mstatus: false,
    id: Date.now(),
    profile: ""
  });

  const onChange = (e) => {
    let { checked, type, name, value, files } = e.target;
    console.log(checked, type, name, value);
    // same like
    // let name = e.target.name;
    // let value = e.target.value;

    if (type === "checkbox") {
      setForm({
        ...form,
        [name]: checked,
      });
    } else if (type === "file") {
      setForm({
        ...form,
        [name]: files,
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };

  const HandleFormSubmit = (e) => {
    e.preventDefault();
    console.log(form);

    setSubmit([...submit, form]);
  };

  useEffect(() => {
    localStorage.setItem("userInfo", JSON.stringify(submit));
  }, [submit]);

  //   execution process
  //1. useState
  //2. complete the function scope execution
  //3. updating state
  //4. return
  //5. useEffect

  return (
    <div className={styles.container}>
      <div className={styles.formDiv}>
        <h1>Employee Details</h1>
        <form onSubmit={HandleFormSubmit}>
          <div className={styles.flexDiv}>
            <label htmlFor="">Name:</label>
            <input
              type="text"
              name="name"
              value={form.name}
              placeholder="Enter Name..."
              onChange={onChange}
            />
          </div>
          <div className={styles.flexDiv}>
            <label htmlFor="">Age:</label>
            <input
              type="text"
              name="age"
              value={form.age}
              placeholder="Enter age..."
              onChange={onChange}
            />
          </div>
          <div className={styles.flexDiv}>
            <label htmlFor="">Address:</label>
            <input
              type="text"
              name="address"
              value={form.address}
              placeholder="Enter address..."
              onChange={onChange}
            />
          </div>
          <div className={styles.flexDiv}>
            <label htmlFor="">Department:</label>
            <select
              name="selectedDept"
              value={form.selectedDept}
              onChange={onChange}
            >
              {form.selectedDept || <option value=""></option>}
              <option value="Operations Department">
                Operations Department
              </option>
              <option value="Curriculum Department">
                Curriculum Department
              </option>
              <option value="Student Department">Student Department</option>
              <option value="NBFC Department">NBFC Department</option>
              <option value="BootCamps Department">BootCamps Department</option>
            </select>
          </div>
          <div className={styles.flexDiv}>
            <label htmlFor="">Salary:</label>
            <input
              type="text"
              name="salary"
              checked={form.salary}
              onChange={onChange}
            />
          </div>
          <div className={styles.flexDiv}>
            <label htmlFor="">Marital Status:</label>
            <div className={styles.Mstatus}>
              <div>
                <label htmlFor="">Married</label>
                <input
                  type="radio"
                  name="Mstatus"
                  value="Married"
                  onChange={onChange}
                />
              </div>
              <div>
                <label htmlFor="">Unmarried</label>
                <input
                  type="radio"
                  name="Mstatus"
                  value="Unmarried"
                  onChange={onChange}
                />
              </div>
            </div>
          </div>
          <div className={styles.flexDiv}>
            <label htmlFor="">Upload Profile:</label>
            <input
              type="file"
              name="profile"
              files={form.profile}
              onChange={onChange}
            />
          </div>
          <div className={styles.Submitbtn}>
            <input type="submit" />
          </div>
        </form>
      </div>

        {submit.length < 1 ? (
      <div className={styles.tableDiv}>
          No data to show here
        </div>
        ) : (
          <div className={styles.tableBox}>
            <table>
              <thead>
                <tr>
                  <th>Profile Photo</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Department</th>
                  <th>Salary</th>
                  <th>Marital Status</th>
                  <th>Address</th>
                </tr>
              </thead>
              <tbody>
                <Table submit={submit} />
              </tbody>
            </table>
          </div>
        )}
      </div>
  );
};

export default Forms;
