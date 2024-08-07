import AdminHeader from "./AdminHeader";
import AdminMenu from "./AdminMenu";
import { Link } from "react-router-dom";

export default function AdminAddPincode() {
    return (<div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
            <AdminMenu />
            <div className="layout-page">
                <AdminHeader title='Pincode Management' />
                <div className="content-wrapper">
                    <div className="container-xxl flex-grow-1 container-p-y">
                        <div className="card shadow">
                            <div className="card-header bg-primary p-3 d-flex justify-content-between">
                                <h4 className="text-white mb-0">Add New Pincode</h4>
                                <Link to="/admin-pincode" className="btn btn-light">Back</Link>
                            </div>
                            <div className="card-body">
                                <form action>
                                    <div className="mb-3 mt-3">
                                        <label htmlFor="title" className="form-label">City</label>
                                        <input id="title" type="text" className="form-control" required />
                                    </div>
                                    <div className="mb-3 mt-3">
                                        <label htmlFor="Area" className="form-label">Area</label>
                                        <input id="Area" type="text" className="form-control" required />
                                    </div>
                                    <div className="mb-3 mt-3">
                                        <label htmlFor="pincode" className="form-label">Pincode</label>
                                        <input id="pincode" type="text" className="form-control" required />
                                    </div>
                                    <div className="mb-3 mt-3">
                                        <label htmlFor="state" className="form-label">State</label>
                                        <input id="state" type="text" className="form-control" required />
                                    </div>

                                    <div className="d-flex justify-content-start">
                                        <label htmlFor className="form-label me-3 pt-1">Is Live?</label>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="islive" defaultChecked required id="yes" />
                                            <label className="form-check-label me-2" htmlFor="yes">Yes</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="islive" required id="no" />
                                            <label className="form-check-label" htmlFor="no">No</label>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <input type="submit" value="Save" className="btn btn-primary" />
                                        <input type="reset" value="Clear All" className="btn btn-dark ms-2" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="content-backdrop fade" />
                </div>
            </div>
        </div>
        <div className="layout-overlay layout-menu-toggle" />
    </div>
    );
}