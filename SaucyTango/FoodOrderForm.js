import React, { useState } from "react";

function FoodOrderForm() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [order, setOrder] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        alert(`Order successful!\n\nYour order was ${order}.\n\nPlease show your confirmation number for pickup.`)
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
            />

            <label htmlFor="phone">Phone: </label>
            <input
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.currentTarget.value)}
            />

            <label htmlFor="address">Address: </label>
            <input
                id="address"
                value={address}
                onChange={(e) => setAddress(e.currentTarget.value)}
            />

            <label htmlFor="order">Order: </label>
            <input
                id="order"
                value={order}
                onChange={(e) => setOrder(e.currentTarget.value)}
            />

            <button type="submit">Submit</button>
        </form>
    )
}

export default FoodOrderForm;