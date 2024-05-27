

import { useState } from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";

const UserModal = ({ open, toggle, cars, setCars }) => {
    const [form, setForm] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.values(form).some((value) => !value.trim())) {
            alert("Malumot kiritilmagan yoki bo'sh bo'lishi mumkin emas");
            return;
        }
        setCars([...cars, form]);
        e.target.reset();
        setForm({});
        toggle();
    };

    return (
        <Modal isOpen={open} toggle={toggle}>
            <ModalHeader>
                <h1 className="text-center font-monospace">Add user</h1>
            </ModalHeader>
            <ModalBody>
                <form id="form" onSubmit={handleSubmit}>
                    <input
                        onChange={handleChange}
                        type="text"
                        placeholder="Name"
                        name="name"
                        className="form-control my-2"
                    />
                    <input
                        onChange={handleChange}
                        type="text"
                        placeholder="Brand"
                        name="brand"
                        className="form-control my-2"
                    />
                    <input
                        onChange={handleChange}
                        type="text"
                        placeholder="Color"
                        name="color"
                        className="form-control my-2"
                    />
                    <input
                        onChange={handleChange}
                        type="number"
                        placeholder="Price"
                        name="price"
                        className="form-control my-2"
                    />
                    <input
                        onChange={handleChange}
                        type="date"
                        placeholder="Year"
                        name="year"
                        className="form-control my-2"
                    />
                </form>
            </ModalBody>
            <ModalFooter>
                <button className="btn btn-danger" onClick={toggle}>
                    Cancel
                </button>
                <button className="btn btn-success" type="submit" form="form">
                    Save
                </button>
            </ModalFooter>
        </Modal>
    );
};

export default UserModal;
