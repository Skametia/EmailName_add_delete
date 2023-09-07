import React, { useState } from "react";
import Header from "./Header";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
// import Field from "./Field";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data, { name, email }]);
    setName("");
    setEmail("");
  };

  const removeItem = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };
  return (
    <div className="App">
      <Header />
      <div className="form">
        <Stack spacing={2} direction="row">
          <TextField
            id="outlined-basic"
            label="Enter Name"
            variant="outlined"
            onChange={(event) => setName(event.target.value)}
            value={name}
          />
          <TextField
            id="outlined-basic"
            label="Enter Email"
            variant="outlined"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
          <Button
            onClick={addData}
            variant="contained"
            className="btn"
            color="success"
          >
            <AddIcon />
          </Button>
        </Stack>
      </div>

      {/*  displayed data   */}
      <div className="data">
        <div className="data_val">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
      </div>

      {data.map((element, index) => {
        return (
          <div key={index} className="data_val">
            <h4>{element.name}</h4>
            <h4>{element.email}</h4>
            <Stack spacing={1} direction="row">
              <Button onClick={removeItem} variant="contained" color="error">
                <DeleteIcon />
              </Button>
            </Stack>
          </div>
        );
      })}
    </div>
  );
}
export default App;
