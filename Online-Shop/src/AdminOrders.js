import AdminHeader from "./AdminHeader";
import AdminMenu from "./AdminMenu";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import getBase, {getImgBase} from "./Api";
import VerifyLogin from "./VerifyLogin";
export default function AdminOrders()
{
  VerifyLogin();
  let [orders, setOrder] = useState([]);
  let fetchOrder = function() {
    if(orders.length === 0)
      {
        let apiAddress = getBase() + "orders.php";
        axios({
          method: 'get',
          responseType: 'json',
          url: apiAddress
        }).then((response) => {
          console.log(response);
          let error = response.data[0]['error'];
          console.log(error);
          if(error !== 'no') {
            alert(error);
          }
          else
          {
            let total = response.data[1]['total'];
            if(total === 0)
              alert("Order Empty");
            else
            {
              response.data.splice(0,2);
              setOrder(response.data);
            }
          }
        }).catch((error) => {
          console.log(error);

          if(error['code'] === 'ERR_NETWORK')
            alert("Network Is Not Found");
        });
      }
  }
  useEffect(() => fetchOrder())
	return(
		<div className="layout-wrapper layout-content-navbar">
  <div className="layout-container">
      <AdminMenu />
    <div className="layout-page">
          <AdminHeader title='Order management' />
      <div className="content-wrapper">
        <div className="container-xxl flex-grow-1 container-p-y">
          <div className="card shadow">
            <div className="card-header bg-primary p-3 d-flex justify-content-between">
              <h4 className="text-white mb-0">Recent Orders</h4>
            </div>
            <div className="card-body pt-3">
              <div className="table-responsive">
                <table className="table table-striped table-bordered">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Date</th>
                      <th>Amount</th>
                      <th>Order Status</th>
                      <th>Delivery Address</th>
                      <th width="5%" />
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((item) => {
                      return(<tr>
                        <td>{item['id']}</td>
                        <td>{item['billdate']}</td>
                        <td>{item['amount']}</td>
                        <td>{item['orderstatus']}</td>
                        <td>
                          {item['fullname']}<br />
                          {item['city']} {item['pincode']}
                        </td>
                        <td>
                          <Link to="/admin-orders-detail" title="order detail">
                            <i className="bx bxs-detail bx-md" />
                          </Link>
                        </td>
                      </tr>)
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
