import AdminHeader from "./AdminHeader";
import AdminMenu from "./AdminMenu";
import { Link } from "react-router-dom";
import VerifyLogin from "./VerifyLogin";
import { useNavigate } from "react-router-dom";
import getBase, { getImgBase } from "./Api";
import axios from 'axios';
import { useEffect, useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import showMessage, { ERR_MESSAGE } from "./messages";
import { withCookies } from "react-cookie";

export default function AdminAddCategory()
{
    let [categories, setCategory] = useState([]);
    let [title, setTitle] = useState('');
    let [photo, setPhoto] = useState(null);
    let [isLive, setIsLive] = useState(false);
    let navigate = useNavigate();
    VerifyLogin();

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
                else{
                    if(response.data[1]['total'] === 0)
                        showMessage('No Categories Found');
                    else {
                        response.data.splice(0, 2);
                        setCategory(response.data);
                    }
                }
            }).catch((error) => {
                if(error.code === 'ERR_NETWORK')
                    showMessage(ERR_MESSAGE);
            });
        }
    }

    useEffect(() => fetchCategories());

    let addCategory = function(e) {
        e.preventDefault();
        console.log(title, photo, isLive);

        let apiAddress = getBase() + "insert_category.php";
        let form = new FormData();
        form.append("title" , title);
        form.append("photo", photo);
        form.append("islive", isLive);
        axios({
            method: 'post',
            url: apiAddress,
            responseType: 'json',
            data: form
        }).then((response) => {
            console.log(response.data);
            let error = response.data[0]['error'];
            if(error != 'no')
                showMessage(error);
            else
            {
                let success = response.data[1]['success'];
                let message = response.data[2]['message'];
                if(success === 'no')
                    showMessage(message);
                else
                {
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

    return (<div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
            <AdminMenu />
            <div className="layout-page">
                    <AdminHeader title='Category Management' />
                <div className="content-wrapper">
                    <div className="container-xxl flex-grow-1 container-p-y">
                        <div className="card shadow">
                            <div className="card-header bg-primary p-3 d-flex justify-content-between">
                                <h4 className="text-white mb-0">Add new category</h4>
                                <Link to="/admin-category" className="btn btn-light">Back</Link>
                            </div>
                            <div className="card-body">
                                <form method="post" onSubmit={addCategory}>
                                    <div className="mb-3 mt-3">
                                        <label htmlFor="title" className="form-label">Title</label>
                                        <input id="title" type="text" className="form-control" required value={title} onChange={(e) => setTitle(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="photo" className="form-label">Select Photo</label>
                                        <input type="file" id="photo" accept="image/*" className="form-control" required onChange={(e) => setPhoto(e.target.files[0])} />
                                    </div>
                                    <label htmlFor className="form-label">is Live?</label>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="islive" id="liveYes" value="1" required onChange={(e) => setIsLive('1')} />
                                        <label className="form-check-label" htmlFor="liveYes">Yes</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="islive" id="liveNo" value="0" required onChange={(e) => setIsLive('0')} />
                                        <label className="form-check-label" htmlFor="liveNo">No</label>
                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <input type="submit" value="Add" className="btn btn-primary" />&nbsp;
                                        <input type="reset" value="Clear all" className="btn btn-dark" />
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
);
}