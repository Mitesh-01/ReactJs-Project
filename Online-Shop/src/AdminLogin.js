import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios';
import getBase, { getImgBase } from './Api';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import showMessage, { ERR_MESSAGE } from "./messages";
import {withCookies,useCookies} from 'react-cookie';

function AdminLogin() {
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let navigate = useNavigate();
  let [cookies, setCookie, removeCookie] = useCookies(['theeasylearn']);
  let Login = function (e) {
    e.preventDefault(); //required to stop refresh webpage
    console.log(email, password);
    let apiAddress = getBase() + "admin_login.php";
    let form = new FormData();
    form.append("email", email);
    form.append("password", password);

    axios({
      method: 'post',
      responseType: 'json',
      url: apiAddress,
      data: form
    }).then((response) => {
      console.log(response.data);
      let error = response.data[0]['error'];
      if (error !== 'no')
        showMessage(error);
      else {
        let success = response.data[1]['success'];
        let message = response.data[2]['message'];
        if (success === 'no') {
          showMessage(message);
        }
        else {
          showMessage(message, 'success');
          let userid = response.data[3]['id'];
          console.log(userid);
          setCookie('userid', userid);
          console.log('userid' , cookies['userid']);
          setTimeout( () => {
            navigate("/admin-dashboard");
          }, 2000);
        }
      }
    }).catch((error) => {
      if (error.code === 'ERR_NETWORK')
        showMessage(ERR_MESSAGE);

    })
  }
  return (
    <div className="container-xxl">
      <div className="row">
      <ToastContainer />
        <div className="col-md-6 col-sm-12 offset-md-3">
          <div className="authentication-wrapper authentication-basic container-p-y">
            <div className="authentication-inner">
              <div className="card">
                <div className="card-body">
                  <div className="app-brand justify-content-center">
                    <a href="#" className="app-brand-link gap-2">
                      <span className="app-brand-logo demo">
                        <img src="admin/assets/img/logo.png" />
                      </span>
                      <span className="app-brand-text demo text-body fw-bolder">Online shop</span>
                    </a>
                  </div>
                  <h4 className="my-4 text-center">Admin Login</h4>
                  <form id="formAuthentication" className="mb-3" method="POST"
                  onSubmit={Login}>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input type="text" className="form-control" id="email" name="email-username" placeholder="Enter your email or username" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3 form-password-toggle">
                      <div className="d-flex justify-content-between">
                        <label className="form-label" htmlFor="password">Password</label>
                        <Link to="/admin-forgot-password">
                          <small>Forgot Password?</small>
                        </Link>
                      </div>
                      <div className="input-group input-group-merge">
                        <input type="password" id="password" className="form-control" name="password" placeholder="Enter Your Password" required aria-describedby="password"
                        value={password} onChange={(e) => setPassword(e.target.value)} />
                      </div>
                    </div>
                    <div className="mb-3">
                      <button className="btn btn-primary d-grid w-100" type="submit">Sign in</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default withCookies(AdminLogin)
