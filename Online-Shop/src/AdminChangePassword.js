import AdminHeader from "./AdminHeader";
import AdminMenu from "./AdminMenu";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import getBase, { getImgBase } from "./Api";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import showMessage, { ERR_MESSAGE } from "./messages";
import { withCookies, useCookies, Cookies } from 'react-cookie';
import VerifyLogin from "./VerifyLogin";

export default function AdminChangePassword()
{
  VerifyLogin();
  let [cookie, setCookie, removeCookie] = useCookies(['theeasylearn']);
  let [password,setPassword] = useState('');
  let [newpassword,setNewPassword] = useState('');
  let [confirmpassword,setConfirmPassword] = useState('');
  let navigate = useNavigate();

  let ChangePassword = function(e)
  {
    e.preventDefault();
    console.log(password , newpassword , confirmpassword);
    if(newpassword !== confirmpassword)
    {
      showMessage('Password Is Incorrect');
    }
    else
    {
      let apiAddress = getBase() + "admin_change_password.php";
      let form = new FormData();
      form.append("id" , cookie['userid']);
      form.append("password" , password);
      form.append("newpassword" , newpassword);
      // Use Axios
      axios({
        method:'post',
        url:apiAddress,
        responseType:'json',
        data:form,
      }).then((response) =>
      { 
        console.log(response.data);
        let error = response.data[0]['error'];
        if(error !== 'no')
            showMessage(error);
        else 
        {
            let success = response.data[1]['success'];
            let message = response.data[2]['message'];
            if(success === 'no')
            {
                showMessage(message);
            }
            else 
            {
                showMessage(message,'success');
                //After 2 Second Redirect Another Page. 
                setTimeout(() => {
                    navigate("/");
                },2000);
            }
        }
      }).catch((error) => {
          if(error.code === 'ERR_NETWORK')
            showMessage(ERR_MESSAGE)
      })

    }
  }

	return(
		<div className="layout-wrapper layout-content-navbar">
  <div className="layout-container">
    <ToastContainer />
    <AdminMenu />
    <div className="layout-page">
          <AdminHeader title='Settings' />
      <div className="content-wrapper">
        <div className="container-xxl flex-grow-1 container-p-y">
          <div className="card shadow">
            <div className="card-header bg-primary p-3 d-flex justify-content-between">
              <h4 className="text-white mb-0">Change Password</h4>
            </div>
            <div className="card-body">
            <form className="mt-3" onSubmit={ChangePassword}>
                <div className="form-floating mb-3">
                  <input type="password" className="form-control" id="currentPassword" placeholder="Current Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                  <label htmlFor="currentPassword">Current Password</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="password" className="form-control" id="newPassword" placeholder="New Password" required value={newpassword}
                        onChange={(e) => setNewPassword(e.target.value)} />
                  <label htmlFor="newPassword">New Password</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="password" className="form-control" id="confirmNewPassword" placeholder="Confirm New Password" required value={confirmpassword}
                        onChange={(e) => setConfirmPassword(e.target.value)} />
                  <label htmlFor="confirmNewPassword">Confirm New Password</label>
                </div>
                <div className="d-flex justify-content-end">
                  <button type="submit" className="btn btn-primary">Save changes</button>
                  <button type="reset" className="btn btn-dark ms-2">Clear All</button>
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
	)
}