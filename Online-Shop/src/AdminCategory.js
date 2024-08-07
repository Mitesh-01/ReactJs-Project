import AdminHeader from "./AdminHeader";
import AdminMenu from "./AdminMenu";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';
import getBase, {getImgBase} from "./Api";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import showMessage, { ERR_MESSAGE } from "./messages";
import { useNavigate } from "react-router-dom";
import VerifyLogin from "./VerifyLogin";

export default function AdminCategory()
{
  let [categories, setCategory] = useState([]);
  VerifyLogin();
  useEffect(() => {
    if(categories.length === 0)
      {
      let apiAddress = getBase() + "category.php";

      fetch(apiAddress)
      .then((response) => response.json())
      .then((data) => {
        console.log(data); //Display Json
        let error = data[0]['error'];
        console.log(error);
        if(error !== 'no')
          showMessage(error);
        else {
          let total = data[1]['total'];
          if(total === 0)
            showMessage('No Category Found');
          else {
            data.splice(0, 2);

            setCategory(data);
          }
        }
      })
      .catch((error) => {
        if(error.toString().indexOf('NetworkError') >= 0 )
          showMessage(ERR_MESSAGE);
      });
      }
  });

  let deleteCategory = function (categoryid) {
    let apiAddress = getBase() + `delete_category.php?id=${categoryid}`;
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
        let temp = categories.filter((item) => {
          if(item['id'] != categoryid)
            return item
        });
        setCategory(temp);
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
        <AdminHeader title='Category Management'/>
      <div className="content-wrapper">
        <div className="container-xxl flex-grow-1 container-p-y">
          <div className="card shadow">
            <div className="card-header bg-primary p-3 d-flex justify-content-between">
              <h4 className="text-white mb-0">Categories</h4>
              <Link to="/admin-add-category" className="btn btn-light">Add New Category</Link>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th width="10%">id</th>
                      <th width="30%">Title</th>
                      <th width="25%">Photo</th>
                      <th width="10%">Is Live</th>
                      <th width="25%">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categories.map((item) => {
                      return(
                        <tr>
                      <td>{item['id']}</td>
                      <td>{item['title']}</td>
                      <td>
                        <a className="example-image-link" href={getImgBase() + "category/" + item['photo']}data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
                          <img src={getImgBase() + "category/" + item['photo']} className="img-fluid example-image" />
                        </a>
                      </td>
                      <td>{(item['islive'] === '1' ? 'yes' : 'no')}</td>
                      <td>
                        <Link title="edit" className="btn btn-primary" to={"/admin-edit-category/" + item['id']}>Edit</Link>
                        <Link title='delete' onClick={() => deleteCategory(item['id'])} className="btn btn-dark ms-2">Delete</Link>
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
	);
}
