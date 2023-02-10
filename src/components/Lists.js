import React, { useState } from "react";
import {
  Table,
  Card,
  CardBody,
  CardHeader,
  Button,
  InputGroup,
  Input,
} from "reactstrap";

import "../App.css";

const Lists = (props) => {
  const [inventory, setInventory] = useState([
    { name: "ECG machine", quantity: 5 },
    { name: "Ultrasound", quantity: 2 },
    { name: "Patient monitor", quantity: 7 },
  ]);
  const [quantity, setQuantity] = useState(0);
  const [item, setItem] = useState({ name: "" });
  const handleChange = (e) => {
    e.preventDefault();
    setItem({ ...item, name: e.target.value });
  };
  const handleAdd = (e) => {
    //console.log(item);
    setInventory([...inventory, item]);
    setItem({ name: "" });
  };

  function handleRemoveItem(index) {
    const newInventory = [...inventory];
    newInventory.splice(index, 1);
    setInventory(newInventory);
  }
  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (newQuantity >= 0) {
      setQuantity(newQuantity);
    }
  };

  const handleClearAll = () => {
    setInventory([]);
  };

  return (
    <div>
      <h2 className="App-header">Edit List</h2>
      <div className="d-flex justify-content-center">
        <Card className="w-50">
          <CardBody>
            <div className="edit_table">
              <h6>Item Name *</h6>
            </div>
            <InputGroup>
              <Input
                className="input"
                type="text"
                value={item.name}
                onChange={handleChange}
              ></Input>{" "}
              &nbsp; &nbsp; &nbsp;&nbsp;
              <h6>Quantity * </h6>
              <Input
                className="input"
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
              ></Input>
              <Button type="submit" color="primary" onClick={() => handleAdd()}>
                Add
              </Button>
            </InputGroup>

            <label className="label">To get started,add 1 or more items </label>
            <br />
            <CardHeader>
              <h2 className="text">Inventory List</h2>
            </CardHeader>
            <Table>
              <tbody>
                {inventory.map((item, index) => (
                  <tr key={index}>
                    <td className="column1">{item.name}</td>
                    <td className="column2">
                      <button
                        className="delete-btn"
                        onClick={() => handleRemoveItem(index)}
                      >
                        &times;
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <div style={{ textAlign: "right" }}>
              <Button
                className="float-right"
                outline
                color="secondary"
                onClick={() => handleClearAll()}
              >
                Clear All
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export { Lists };
