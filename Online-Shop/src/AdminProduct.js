import AdminHeader from "./AdminHeader";
import AdminMenu from "./AdminMenu";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import getBase, { getImgBase } from './Api';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import showMessage, { ERR_MESSAGE } from "./messages";
import VerifyLogin from "./VerifyLogin";

export default function AdminProduct()
{
  VerifyLogin();
  let [products, setProduct] = useState([]);
  let fetchProduct = function() {
    if(products.length === 0)
      {
        let apiAddress = getBase() + "product.php";
        axios({
          method: 'get',
          responseType: 'json',
          url: apiAddress
        }).then((response) => {
          console.log(response);
          let error = response.data[0]['error'];
          console.log(error);
          if(error !== 'no') {
            showMessage(error);
          }
          else {
            let total = response.data[1]['total'];
            if(total === 0)
              showMessage('No Product Found');
            else
            {
              response.data.splice(0,2);
              setProduct(response.data);
            }
          }
        }).catch((error) => {
          console.log(error);
          if(error['code'] === 'ERR_NETWORK')
            showMessage(ERR_MESSAGE);
        });
      }
  }

  useEffect(() => fetchProduct())
  let deleteProduct  = function (productid) {
      let apiAddress = getBase() + `delete_product.php?id=${productid}`;
      console.log(apiAddress);

      axios({
        method: 'get',
        responseType: 'json',
        url: apiAddress
      }).then((response) => {
        let error = response.data[0]['error'];
        if(error != 'no')
          showMessage(error);
        else
        {
          let temp = products.filter((item) => {
            if(item['id'] != productid)
              return item
          });
          setProduct(temp);
          showMessage(response.data[1]['message'], 'success');
        }
      }).catch((error) => {
        if(error.code === 'ERR_NETWORK')
          showMessage(ERR_MESSAGE);
      })
  }
	return(
<div className="layout-wrapper layout-content-navbar">
  <div className="layout-container">
      <ToastContainer />
      <AdminMenu />
    <div className="layout-page">
          <AdminHeader title='Product Management' />
      <div className="content-wrapper">
        <div className="container-xxl flex-grow-1 container-p-y">
          <div className="card shadow">
            <div className="card-header bg-primary p-3 d-flex justify-content-between">
              <h4 className="text-white mb-0">Product</h4>
              <Link to="/admin-add-product" className="btn btn-light">Add New Product</Link>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th width="10%">id</th>
                      <th width="20%">Title /
                        Category
                      </th>
                      <th width="20%">Photo</th>
                      <th width="15%">price</th>
                      <th width="15%">Is Live</th>
                      <th width="20%">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                  {products.map((item) => {
                    return(
                      <tr>
                        <td>{item['id']}</td>
                        <td>{item['title']} / {item['categorytitle']}</td>
                        <td>
                          <a className="example-image-link" href={getImgBase() + "product/" + item['photo']} data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
                            <img src={getImgBase() + "product/" + item['photo']} className="img-fluid example-image" />
                          </a>
                        </td>
                        <td>{item['price']}</td>
                        <td>{(item['islive'] === '1') ? 'yes' : 'no'}</td>
                        <td>

                          <Link title="edit" to={"/admin-edit-product/" + item['id']}>
                            <i className="bx bx-edit bx-md" />
                          </Link>
                          <Link title="delete" onClick={() => deleteProduct(item['id'])}>
                            <i className="bx bx-trash bx-md" />
                          </Link>
                          <Link to={"/admin-product-detail/" + item['id']} title>
                            <i className="bx bxs-detail bx-md" />
                          </Link>
                        </td>
                      </tr>
                    )
                  })}
                  </tbody>
                </table>
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