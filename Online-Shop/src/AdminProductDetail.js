import { Link } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import AdminMenu from "./AdminMenu";
import VerifyLogin from "./VerifyLogin";
import axios from "axios";
import getBase, { getImgBase } from "./Api";
import { useEffect, useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import showMessage, { ERR_MESSAGE } from "./messages";
import { useParams } from "react-router-dom";

export default function AdminProductDetail()
{
  VerifyLogin();
  var { productid } = useParams();
  let [ products , setProduct ] = useState([]); // State Array
  console.log(productid);

  let fetchSingleProduct = function () {
    if (products.length === 0) {
      let apiAddress = getBase() + "product.php?productid=" + productid;
      axios.get(apiAddress, {
        responseType: 'json'
      })
      .then((response) => {
        let error = response.data[0]['error'];
        console.log(error);
        if(error !== 'no') {
          showMessage(error);
        }
        else
        {
          let total = response.data[1]['total'];
          if(total === 0)
            showMessage('No Products Found');
          else
          {
            setProduct(response.data[2]);
          }
        }
      })
      .catch((error) => {
        console.log(error);
        if(error['code'] === 'ERR_NETWORK')
          showMessage(ERR_MESSAGE);
      })
      .finally(function () {
        console.log('We Are Here' , products);
      });

    }
  }
  useEffect(() => fetchSingleProduct())
  
	return(
		<div>
  <div className="layout-wrapper layout-content-navbar">
    <div className="layout-container">
      <AdminMenu />
      <div className="layout-page">
          <AdminHeader title='Product management' />
        <div className="content-wrapper">
          <div className="container-xxl flex-grow-1 container-p-y">
            <div className="card shadow">
              <div className="card-header bg-primary p-3 d-flex justify-content-between">
                <h4 className="text-white mb-0">IPhone - 15</h4>
                <Link to="/admin-product" className="btn btn-light">Back</Link>
              </div>
              <div className="card-body">
                <div className="row mt-2">
                  <div className="col-lg-5">
                    <img src={getImgBase() + "product/" + products['photo']} className="img-fluid shadow img-thumbnail" />
                    <hr />
                    <div className="d-flex justify-content-around">
                      <Link title="edit" to="/admin-edit-product">
                        <i className="bx bx-edit bx-md" />
                      </Link>
                      <a href='#' title="delete">
                        <i className="bx bx-trash bx-md" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <table className="table">
                      <tbody><tr>
                          <td className="fw-bold">id</td>
                          <td>{products['id']}</td>
                        </tr>
                        <tr>
                          <td className="fw-bold">Category</td>
                          <td>{products['categorytitle']}</td>
                        </tr>
                        <tr>
                          <td className="fw-bold">Price</td>
                          <td>{products['price']}</td>
                        </tr>
                        <tr>
                          <td className="fw-bold">Quantity</td>
                          <td>{products['stock']}</td>
                        </tr>
                        <tr>
                          <td className="fw-bold">Weight</td>
                          <td>{products['weight']}</td>
                        </tr>
                        <tr>
                          <td className="fw-bold">Size</td>
                          <td>{products['size']}</td>
                        </tr>
                        <tr>
                          <td className="fw-bold">is Live</td>
                          <td>{(products['islive'] === '1' ? "yes":"no")}</td>
                        </tr>
                        <tr>
                          <td className="fw-bold">Detail</td>
                          <td>{products['detail']}</td>
                        </tr>
                      </tbody></table>
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
</div>
	)
}