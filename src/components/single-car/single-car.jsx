import React, { useState, useEffect } from "react";

const SingleCar = () => {
    const [carData, setCarData] = useState(null);

    useEffect(() => {
        const fetchCarData = async () => {
            try {
                const response = await fetch(
                    "https://fakestoreapi.com/products"
                );
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await response.json();
                setCarData(data);
            } catch (error) {
                console.error("Error fetching car data:", error);
            }
        };

        fetchCarData();
    }, []);

    if (!carData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container">
          <h1 className="text-center m-3">Single-cars</h1>
            <div className="row mt-5">
                {carData.map((car, index) => (
                    <div key={index} className="col-md-4 mb-3">
                        <div className="card">
                            <img
                                src={car.image}
                                alt={car.title}
                                className="card-img-top"
                            />
                            <div className="card-body">
                                <h5 className="card-title">{car.title}</h5>
                                <p className="card-text">{car.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SingleCar;
