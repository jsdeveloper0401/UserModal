import { useState } from "react";
import UserModal from "../modal";
import "./cars.css";

const Cars = () => {
  const [cars, setCars] = useState([]);
  const [modal,setModal]=useState(false)
  const openModal = () => {
    console.log("open");
    setModal(true)
  };

  return (
    <>
    <UserModal open={modal} toggle={()=>setModal(false)}/>
    <div className="container">
      <div className="row mt-3">
        <div className="col-md-12">
          <h1 className="text-center">Cars</h1>
          <div className="row mb-3">
            <div className="col-md-3">
              <button className="btn btn-success" onClick={openModal}>Add User</button>
            </div>
            <div className="col-md-8">
              <input type="text" placeholder="Search..." className="form-control"/>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <table className="table table-bordered table-hover table-striped my-3 bg-info border-color-info">
          <thead>
            <tr>
              <th>T/R</th>
              <th>Name</th>
              <th>Brand</th>
              <th>Color</th>
              <th>Price</th>
              <th>Year</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cars.map(({ name, brand, color, price, year }, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{name}</td>
                <td>{brand}</td>
                <td>{color}</td>
                <td>{price}</td>
                <td>{year}</td>
                <td>
                  <div className="d-flex g-2">
                    <button className="btn btn-info">
                      <i className="fa-regular fa-pen-to-square"></i>
                    </button>
                    <button className="btn btn-danger">
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default Cars;
