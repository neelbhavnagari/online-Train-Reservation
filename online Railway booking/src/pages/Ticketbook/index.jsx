import { useState } from "react";
import "./crud.css";

function Crud() {
  const [data, setData] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [id, setId] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const [gender, setGender] = useState("");
  const handleEdit = (id) => {
    setIsUpdate(true);
    const item = data.find((item) => item.id === id);
    if (item !== undefined) {
      setId(id);
      setFirstName(item.firstName);
      setLastName(item.lastName);
      setAge(item.age);
      setGender(item.gender);
    }
  };

  const handleClear = () => {
    setId("");
    setFirstName("");
    setLastName("");
    setAge("");
    setGender("");
    setIsUpdate(false);
  };

  const handleSave = () => {
    if (firstName && lastName && age && gender) {
      const newItem = {
        id: data.length + 1,
        firstName,
        lastName,
        age,
        gender,
      };
      setData([...data, newItem]);
      handleClear();
    } else {
      alert("Please fill all fields");
    }
  };

  const handleUpdate = () => {
    if (firstName && lastName && age && gender) {
      const updatedData = data.map((item) =>
        item.id === id ? { ...item, firstName, lastName, age, gender } : item
      );
      setData(updatedData);
      handleClear();
    } else {
      alert("Please fill all fields");
    }
  };

  const handleDelete = (id) => {
    if (id > 0) {
      if (window.confirm("Are You sure for Delete?")) {
        const dt = data.filter((item) => item.id !== id);
        setData(dt);
      }
    }
  };

  return (
    <div className="container">
      <h1 className="title">Passenger Details</h1>
      <div className="form-container">
        <div className="form-group">
          <label>First Name :</label>
          <input
            type="text"
            placeholder="Enter your first name"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            placeholder="Enter your last name"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
        </div>
        <div className="form-group">
          <label>Age:</label>
          <input
            type="number"
            placeholder="Enter your age"
            onChange={(e) => setAge(e.target.value)}
            value={age}
          />
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <div>
            <label>
              <input
                type="radio"
                value="Male"
                checked={gender === "Male"}
                onChange={(e) => setGender(e.target.value)}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                value="Female"
                checked={gender === "Female"}
                onChange={(e) => setGender(e.target.value)}
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                value="Other"
                checked={gender === "Other"}
                onChange={(e) => setGender(e.target.value)}
              />
              Other
            </label>
          </div>
        </div>
        <div className="button-group">
          {!isUpdate ? (
            <button className="save" onClick={handleSave}>
              Save
            </button>
          ) : (
            <button className="update" onClick={handleUpdate}>
              Update
            </button>
          )}
          <button className="clear" onClick={handleClear}>
            Clear
          </button>
        </div>
      </div>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>No</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.age}</td>
                <td>{item.gender}</td>
                <td>
                  <button onClick={() => handleEdit(item.id)}>Edit</button>
                  <button onClick={() => handleDelete(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Crud;
