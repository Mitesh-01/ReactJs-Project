import AdminHeader from "./AdminHeader";
import AdminMenu from "./AdminMenu";
import { Link } from "react-router-dom";
import VerifyLogin from "./VerifyLogin";
import { withCookies, useCookies } from 'react-cookie';

export default function AdminOrdersDetail()
{
  VerifyLogin();
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
              <h4 className="text-white mb-0">Bill No : 100</h4>
              <div className="m-0 p-0">
              <Link to="/admin-print-bill" className="btn btn-light">Print</Link>
              <Link to="/admin-orders" className="btn btn-light ms-2">Back</Link>
              </div>
            </div>
            <div className="card-body pt-1">
              <div className="table-responsive">
                <table className="table table-striped table-bordered table-sm">
                  <tbody>
                    <tr>
                      <td width="25%">id</td>
                      <td width="25%" />
                      <td width="25%">Customer id</td>
                      <td width="25%" />
                    </tr>
                    <tr>
                      <td width="25%">Date</td>
                      <td width="25%" />
                      <td width="25%">Name</td>
                      <td width="25%" />
                    </tr>
                    <tr>
                      <td width="25%">Status</td>
                      <td width="25%">
                        Currently :- Dispatched
                        <form action>
                          <select className="form-select">
                            <option value={1}>confirm</option>
                            <option value={2}>Dispatched</option>
                            <option value={3}>Delivered</option>
                            <option value={4}>Returned</option>
                          </select>
                        </form>
                      </td>
                      <td width="25%">Address</td>
                      <td width="25%" />
                    </tr>
                    <tr>
                      <td width="25%">Amount</td>
                      <td width="25%" />
                      <td width="25%">City Pincode</td>
                      <td width="25%" />
                    </tr>
                    <tr>
                      <td width="25%">Payment Status</td>
                      <td width="25%" />
                      <td width="25%">Remarks</td>
                      <td width="25%" />
                    </tr>
                  </tbody>
                </table>
              </div>
              <b>Order Detail</b>
              <div className="table-responsive">
                <table className="table table-striped table-bordered table-sm">
                  <thead>
                    <tr>
                      <th>Sr</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>IPhone</td>
                      <td>125000</td>
                      <td>2</td>
                      <td>250000</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th colSpan={4}>Total</th>
                      <th>250000</th>
                    </tr>
                  </tfoot>
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