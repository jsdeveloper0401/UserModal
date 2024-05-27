import { useState } from "react";
import UserModal from "../modal";
import "./cars.css";
import { NavLink } from "react-router-dom";

const Cars = () => {
    const [cars, setCars] = useState([
      {name:"BYD Song +", brand:"BYD",color:"Black",price:"$10000",year:"2020"}
    ]);
    const [modal, setModal] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const openModal = () => {
        setModal(true);
    };

    const filteredCars = cars.filter((car) =>
        Object.values(car).some((value) =>
            value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    return (
        <>
            <UserModal
                open={modal}
                toggle={() => setModal(false)}
                cars={cars}
                setCars={setCars}
            />
            <div className="container">
                <div className="row mt-3">
                    <div className="col-md-12">
                        <h1 className="text-center">Cars</h1>
                        <div className="row mb-3">
                            <div className="col-md-3">
                                <button
                                    className="btn btn-success"
                                    onClick={openModal}>
                                    Open modal
                                </button>
                            </div>
                            <div className="col-md-8">
                                <input
                                    value={searchTerm}
                                    onChange={(e) =>
                                        setSearchTerm(e.target.value)
                                    }
                                    type="text"
                                    placeholder="Search..."
                                    className="form-control"
                                />
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
                            {filteredCars.map(
                                (
                                    { name, brand, color, price, year },
                                    index
                                ) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{name}</td>
                                        <td>{brand}</td>
                                        <td>{color}</td>
                                        <td>{price}</td>
                                        <td>{year}</td>
                                        <td>
                                            <div className="d-flex gap-3">
                                                <button className="btn btn-warning">
                                                    <i className="fa-regular fa-pen-to-square"></i>
                                                </button>
                                                <button className="btn btn-danger">
                                                    <i className="fa-solid fa-trash"></i>
                                                </button>
                                                <NavLink to="/single-car"> <span className="btn btn-primary"><i className="fa-solid fa-circle-info"></i></span></NavLink>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Cars;
