import AdminHeader from "./AdminHeader";
import AdminMenu from "./AdminMenu";
import { Link } from "react-router-dom";

export default function AdminPincode() {
    return (
        <div className="layout-wrapper layout-content-navbar">
            <div className="layout-container">
                    <AdminMenu />
                <div className="layout-page">
                    <AdminHeader title='Pincode Management'/>
                    <div className="content-wrapper">
                        <div className="container-xxl flex-grow-1 container-p-y">
                            <div className="card shadow">
                                <div className="card-header bg-primary p-3 d-flex justify-content-between">
                                    <h4 className="text-white mb-0">Pincode</h4>
                                    <Link to="/admin-add-pincode" className="btn btn-light">Add Pincode</Link>
                                </div>
                                <div className="card-body">
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th width="10%">id</th>
                                                        <th width="15%">City
                                                        </th>
                                                        <th width="10%">Area</th>
                                                        <th width="10%">Pincode</th>
                                                        <th width="15%">State</th>
                                                        <th width="20%">Is Live</th>
                                                        <th width="20%">Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Bhavnagar</td>
                                                        <td>-</td>
                                                        <td>364001</td>
                                                        <td>Gujarat</td>
                                                        <td>
                                                            Yes
                                                        </td>
                                                        <td>
                                                            <Link title="Edit" to="/admin-edit-pincode">
                                                                <i className="bx bx-edit bx-md" />
                                                            </Link>
                                                            <a href='#' title="delete">
                                                                <i className="bx bx-trash bx-md" />
                                                            </a>
                                                            <Link to="/admin-pincode-detail" title="Details">
                                                                <i className="bx bx-detail bx-md" />
                                                            </Link>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="content-backdrop fade" />
                    </div>
                </div>
            </div>
            <div className="layout-overlay layout-menu-toggle" />
        </div>

    )
}