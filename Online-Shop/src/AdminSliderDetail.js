import AdminHeader from "./AdminHeader";
import AdminMenu from "./AdminMenu";
import { Link } from "react-router-dom";

export default function AdminSliderDetail() {
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
                                    <h4 className="text-white mb-0">Slider Details</h4>
                                    <Link to="/admin-slider" className="btn btn-light">Back</Link>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-4 mt-3">
                                            <div className="card shadow">
                                                <div className="card-header">
                                                    <div id="carouselExampleInterval" className="carousel slide carousel-fade" data-bs-ride="carousel">
                                                        <div className="carousel-inner">
                                                            <div className="carousel-item active" data-bs-interval={2000}>
                                                                <img src="admin/assets/img/productImage/IphoneOne.jpg" className="d-block w-100" alt="..." />
                                                            </div>
                                                            <div className="carousel-item" data-bs-interval={2000}>
                                                                <img src="admin/assets/img/productImage/IphoneTwo.jpg" className="d-block w-100" alt="..." />
                                                            </div>
                                                            <div className="carousel-item" data-bs-interval={2000}>
                                                                <img src="admin/assets/img/productImage/IphoneThree.jpg" className="d-block w-100" alt="..." />
                                                            </div>
                                                        </div>
                                                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                                                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                                                            <span className="visually-hidden">Previous</span>
                                                        </button>
                                                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                                                            <span className="carousel-control-next-icon" aria-hidden="true" />
                                                            <span className="visually-hidden">Next</span>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="card-body">
                                                    <p className="card-text">
                                                        ID : 1 <br />
                                                        Title : IPhone 15 <br />
                                                        Start Date : 18 June 2024 <br />
                                                        End Date : 01 July 2024 <br />
                                                        Product ID : 101 <br />
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4 mt-3">
                                            <div className="card shadow">
                                                <div className="card-header">
                                                    <div id="carouselExampleIntervalTwo" className="carousel slide carousel-fade" data-bs-ride="carousel">
                                                        <div className="carousel-inner">
                                                            <div className="carousel-item active" data-bs-interval={3000}>
                                                                <img src="admin/assets/img/productImage/IpadOne.jpg" className="d-block w-100" alt="..." />
                                                            </div>
                                                            <div className="carousel-item" data-bs-interval={3000}>
                                                                <img src="admin/assets/img/productImage/IpadTwo.jpg" className="d-block w-100" alt="..." />
                                                            </div>
                                                            <div className="carousel-item" data-bs-interval={3000}>
                                                                <img src="admin/assets/img/productImage/IpadThree.jpg" className="d-block w-100" alt="..." />
                                                            </div>
                                                        </div>
                                                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIntervalTwo" data-bs-slide="prev">
                                                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                                                            <span className="visually-hidden">Previous</span>
                                                        </button>
                                                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIntervalTwo" data-bs-slide="next">
                                                            <span className="carousel-control-next-icon" aria-hidden="true" />
                                                            <span className="visually-hidden">Next</span>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="card-body">
                                                    <p className="card-text">
                                                        ID : 2 <br />
                                                        Title : IPad <br />
                                                        Start Date : 18 June 2024 <br />
                                                        End Date : 10 July 2024 <br />
                                                        Product ID : 102 <br />
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4 mt-3">
                                            <div className="card shadow">
                                                <div className="card-header">
                                                    <div id="carouselExampleIntervalThree" className="carousel slide carousel-fade" data-bs-ride="carousel">
                                                        <div className="carousel-inner">
                                                            <div className="carousel-item active" data-bs-interval={3000}>
                                                                <img src="admin/assets/img/productImage/MacbookOne.jpg" className="d-block w-100" alt="..." />
                                                            </div>
                                                            <div className="carousel-item" data-bs-interval={3000}>
                                                                <img src="admin/assets/img/productImage/MacbookTwo.jpg" className="d-block w-100" alt="..." />
                                                            </div>
                                                            <div className="carousel-item" data-bs-interval={3000}>
                                                                <img src="admin/assets/img/productImage/MacbookThree.jpg" className="d-block w-100" alt="..." />
                                                            </div>
                                                        </div>
                                                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIntervalThree" data-bs-slide="prev">
                                                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                                                            <span className="visually-hidden">Previous</span>
                                                        </button>
                                                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIntervalThree" data-bs-slide="next">
                                                            <span className="carousel-control-next-icon" aria-hidden="true" />
                                                            <span className="visually-hidden">Next</span>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="card-body">
                                                    <p className="card-text">
                                                        ID : 3 <br />
                                                        Title : Macbook Pro<br />
                                                        Start Date : 18 June 2024 <br />
                                                        End Date : 01 July 2024 <br />
                                                        Product ID : 103 <br />
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div title="Prev" className="col-12 d-flex justify-content-center mt-4">
                                        <div className="btn btn-dark"><i className="bx bx-chevron-left scaleX-n1-rtl bx-sm" /></div>

                                        <div title="Next" className="btn btn-dark ms-4"><i className="bx bx-chevron-right scaleX-n1-rtl bx-sm" /></div>
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