import AdminHeader from "./AdminHeader";
import AdminMenu from "./AdminMenu";
import { Link } from "react-router-dom";

export default function AdminSlider() {
    return (
        <div className="layout-wrapper layout-content-navbar">
            <div className="layout-container">
                    <AdminMenu />
                <div className="layout-page">
                    <AdminHeader title='Slider Management'/>
                    <div className="content-wrapper">
                        <div className="container-xxl flex-grow-1 container-p-y">
                            <div className="card shadow">
                                <div className="card-header bg-primary p-3 d-flex justify-content-between">
                                    <h4 className="text-white mb-0">Slider</h4>
                                    <Link to="/admin-add-slider" className="btn btn-light">Add Slider</Link>
                                </div>
                                <div className="card-body">
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th width="10%">id</th>
                                                        <th width="15%">Title
                                                        </th>
                                                        <th width="10%">Start Date</th>
                                                        <th width="10%">End Date</th>
                                                        <th width="15%">Product Id</th>
                                                        <th width="20%">Photo</th>
                                                        <th width="20%">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>IPhone 15</td>
                                                        <td>16-06-2024</td>
                                                        <td>01-07-2024</td>
                                                        <td>101</td>
                                                        <td>
                                                            <a className="example-image-link" href="https://m.media-amazon.com/images/I/71d7rfSl0wL._AC_UF1000,1000_QL80_.jpg" data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
                                                                <img src="https://m.media-amazon.com/images/I/71d7rfSl0wL._AC_UF150,150_QL80_.jpg" className="img-fluid example-image" />
                                                            </a>
                                                        </td>
                                                        <td>
                                                            <Link title="edit" to="/admin-edit-slider">
                                                                <i className="bx bx-edit bx-md" />
                                                            </Link>
                                                            <a href='#' title="delete">
                                                                <i className="bx bx-trash bx-md" />
                                                            </a>
                                                            <Link to="/admin-slider-detail" title="Details">
                                                                <i className="bx bx-detail bx-md" />
                                                            </Link>
                                                            <a href='#' title="Search Slider">
                                                                <i className="bx bx-search bx-md" />
                                                            </a>
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