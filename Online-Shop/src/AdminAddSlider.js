import AdminHeader from "./AdminHeader";
import AdminMenu from "./AdminMenu";
import { Link } from "react-router-dom";

export default function AdminAddSlider() {
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
                                    <h4 className="text-white mb-0">Add New Slider</h4>
                                    <Link to="/admin-slider" className="btn btn-light">Back</Link>
                                </div>
                                <div className="card-body">
                                    <div className="card-body">
                                        <form>
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <label htmlFor="title" className="form-label">Title</label>
                                                    <input type="text" className="form-control" id="title" required />
                                                </div>
                                                <div className="col-md-4">
                                                    <label htmlFor="startdate" className="form-label">
                                                        Start Date
                                                    </label>
                                                    <input type="date" className="form-control" id="startdate" required />
                                                </div>
                                                <div className="col-md-4">
                                                    <label htmlFor="enddate" className="form-label">
                                                        End Date
                                                    </label>
                                                    <input type="date" className="form-control" id="enddate" required />
                                                </div>
                                                <div className="col-md-4 mt-3">
                                                    <label htmlFor="productid" className="form-label">Product ID</label>
                                                    <input type="number" className="form-control" id="productid" required />
                                                </div>
                                                <div className="col-md-4 mt-3">
                                                    <label htmlFor="photo" className="form-label">Photo</label>
                                                    <input type="file" className="form-control" id="photo" accept="image/*" required />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 text-end">
                                                    <button type="submit" className="btn btn-primary">Save</button>
                                                    <button type="reset" className="btn btn-dark ms-2">Clear all</button>
                                                </div>
                                            </div>
                                        </form>
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