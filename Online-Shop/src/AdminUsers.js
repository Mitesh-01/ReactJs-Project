import AdminHeader from "./AdminHeader";
import AdminMenu from "./AdminMenu";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import getBase, { getImgBase } from './Api';
import { withCookies, useCookies } from 'react-cookie';
import VerifyLogin from "./VerifyLogin";

export default function AdminUsers()
{
  VerifyLogin();
  let [users, setUser] = useState([]);
  let fetchUser = function() {
    if(users.length === 0)
      {
        let apiAddress = getBase() + "users.php";
        axios({
          mathod: 'get',
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
              alert("No User Found");
            else
            {
              response.data.splice(0,2);
              setUser(response.data);
            }
          }
        }).catch((error) => {
          console.log(error);

          if(error['code'] === 'ERR_NETWORK')
            alert('Network Not Found');
        });
      }
  }

  useEffect(() => fetchUser())
	return(
		<div className="layout-wrapper layout-content-navbar">
  <div className="layout-container">
    <AdminMenu />
    <div className="layout-page">
      <AdminHeader title='User management' />
      <div className="content-wrapper">
        <div className="container-xxl flex-grow-1 container-p-y">
          <div className="card shadow">
            <div className="card-header bg-primary p-3 d-flex justify-content-between">
              <h4 className="text-white mb-0">Existing Users</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="mt-2 table table-sm table-bordered table-striped">
                  <thead>
                    <tr>
                      <th>id</th>
                      <th>Email</th>
                      <th>Mobile</th>
                      <th>History</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((item) => {
                      return(<tr>
                        <td>{item['id']}</td>
                        <td>{item['email']}</td>
                        <td>{item['mobile']}</td>
                        <td>
                          <Link to="/admin-orders" title="view shoping history">
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