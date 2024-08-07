import AdminHeader from "./AdminHeader";
import AdminMenu from "./AdminMenu";
import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
import getBase, { getImgBase } from "./Api";
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import showMessage, { ERR_MESSAGE } from "./messages";
import VerifyLogin from "./VerifyLogin";
import { withCookies } from "react-cookie";

export default function AdminEditCategory()
{
  VerifyLogin();
  let { categoryid } = useParams();
  let [categories, setCategories] = useState([]);
  let [category, setCategory] = useState('');
  let [title, setTitle] = useState('');
  let [photo, setPhoto] = useState(null);
  let [oldPhoto, setOldPhoto] = useState('');
  let [isLive, setIsLive] = useState(false);
  let [isFetched, setIsFetched] = useState(false);
  let navigate = useNavigate();

  let fetchSingleCategory = function () {
    if(isFetched === false) {
      let apiAddress = getBase() + "category.php?categoryid=" + categoryid;
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
            showMessage('No Category Found');
          else
          {
            setTitle(response.data[2]['title']);
            setOldPhoto(response.data[2]['photo']);
            setIsLive(response.data[2]['islive']);
            setCategory(response.data[2]['categoryid']);
            setIsFetched(true);
          }
        }
      })
      .catch((error) => {
        console.log(error);
        if(error['code'] === 'ERR_NETWORK')
          showMessage(ERR_MESSAGE);
      });
    }
  }

  let fetchCategories = function() {
    if(categories.length === 0) {
      let apiAddress = getBase() + "category.php";

      axios({
        method: 'get',
        responseType: 'json',
        url: apiAddress,
      }).then((response) => {
        console.log(response.data);

        let error = response.data[0]['error'];
        if(error !== 'no')
          showMessage(error);
        else
        {
          if(response.data[1]['total'] === 0)
            showMessage('No Category Found');
          else
          {
            // First Two Elements Remove From Array
            response.data.splice(0, 2);
            setCategories(response.data);
          }
        }
      }).catch((error) => {
        if(error.code === 'ERR_NETWORK')
          showMessage(ERR_MESSAGE);
      });
    }
  }

  useEffect(() => {
    fetchCategories();
    fetchSingleCategory();
  });

  let updateCategory = function(e) {
    e.preventDefault();
    console.log(id, title, photo, isLive);
    let apiAddress = getBase() + "update_category.php";
    let form = new FormData();
    form.append("categoryid", category);
    form.append("name", title);
    form.append("photo", photo);
    form.append("islive", isLive);
    console.log(form);

    axios({
      method: 'post',
      responseType: 'json',
      url: apiAddress,
      data: form
    }).then((response) => {
      console.log(response.data);

      let error = response.data[0]['error'];
      if(error != 'no')
        showMessage(error);
      else {
        let success = response.data[1]['success'];
        let message = response.data[2]['message'];
        if(success === 'no')
          showMessage(message);
        else {
          showMessage(message, 'success');
          setTimeout(() => {
            navigate("/admin-category");
          },2000);
        }
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
          <AdminHeader title='Category Management' />
      <div className="content-wrapper">
        <div className="container-xxl flex-grow-1 container-p-y">
          <div className="card shadow">
            <div className="card-header bg-primary p-3 d-flex justify-content-between">
              <h4 className="text-white mb-0">Edit category</h4>
              <Link to="/admin-category" className="btn btn-light">Back</Link>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-9">
                  <form onSubmit={updateCategory}>
                    <div className="mb-3 mt-3">
                      <label htmlFor="title" className="form-label">Title</label>
                      <input id="title" type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="photo" className="form-label">Select Photo</label>
                      <input type="file" id="photo" className="form-control" accept="image/*" onChange={(e) => setPhoto(e.target.files[0])} required />
                    </div>
                    <label htmlFor className="form-label">is Live?</label>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="islive" id="liveNo" value="0" onChange={(e) => setIsLive('0')} checked={isLive ==='0'} required />
                      <label className="form-check-label" htmlFor="liveNo">No</label>
                    </div>
                    <div className="form-check">
                    <input className="form-check-input" type="radio" name="islive" id="liveYes" value="1" onChange={(e) => setIsLive('1')} checked={isLive ==='1'} required />
                    <label className="form-check-label" htmlFor="liveYes">Yes</label>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="btn btn-primary">Update</button>
                      <button className="btn btn-dark ms-2">Clear</button>
                    </div>
                  </form>
                </div>
                <div className="col-lg-3 pt-3">
                  <b>Existing photo</b>
                      <img src={getImgBase() + "category/" + oldPhoto} alt="Existing category" className="img-fluid" />
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