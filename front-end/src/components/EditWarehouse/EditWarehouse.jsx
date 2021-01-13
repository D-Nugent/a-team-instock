import React from 'react';
// import axios from 'axios';



class EditWarehouse extends React.Component {

    render() {
        return (
            <div className="card">
                <div>
                    <img src="" alt="" />
                    <h1>Edit Warehouse</h1>
                </div>
                <form action="">
                    <section>
                        <h2>Warehouse Details</h2>
                        <div className="">
                            <label className="" htmlFor="name">
                                <h3 className="">Warehouse Name</h3>
                            </label>
                            <input
                                className=""
                                Name="name"
                                placeholder="Warehouse Name"
                            />
                        </div>
                        <div className="">
                            <label className="" htmlFor="address">
                                <h3 className="">Street Address</h3>
                            </label>
                            <input
                                className=""
                                Name="address"
                                placeholder="Street Address"
                            />
                        </div>
                        <div className="">
                            <label className="" htmlFor="city">
                                <h3 className="">City</h3>
                            </label>
                            <input
                                className=""
                                Name="city"
                                placeholder="City"
                            />
                        </div>
                        <div className="">
                            <label className="" htmlFor="country">
                                <h3 className="">Country</h3>
                            </label>
                            <input
                                className=""
                                Name="country"
                                placeholder="Country"
                            />
                        </div>
                    </section>
                    <section>
                        <h2>Contact Details</h2>
                        <div className="">
                            <label className="" htmlFor="contact">
                                <h3 className="">Contact Name</h3>
                            </label>
                            <input
                                className=""
                                Name="contact"
                                placeholder="Contact Name"
                            />
                        </div>
                        <div className="">
                            <label className="" htmlFor="position">
                                <h3 className="">Position</h3>
                            </label>
                            <input
                                className=""
                                Name="position"
                                placeholder="Position"
                            />
                        </div>
                        <div className="">
                            <label className="" htmlFor="phone">
                                <h3 className="">Phone Number</h3>
                            </label>
                            <input
                                className=""
                                Name="phone"
                                placeholder="Phone Number"
                            />
                        </div>
                        <div className="">
                            <label className="" htmlFor="email">
                                <h3 className="">Email</h3>
                            </label>
                            <input
                                className=""
                                Name="email"
                                placeholder="Email"
                            />
                        </div>
                    </section>
                    <section>
                        <button className="">Cancel</button>
                        <input
                            type="submit"
                            className=""
                            value="Save"
                        />
                    </section>
                </form>
            </div>
        )
    }
}

export default EditWarehouse
