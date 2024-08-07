import { Link } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import AdminMenu from "./AdminMenu";
import VerifyLogin from "./VerifyLogin";
import { useNavigate } from "react-router-dom";
import getBase, { getImgBase } from "./Api";
import axios from 'axios';
import { useEffect, useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import showMessage, { ERR_MESSAGE } from "./messages";

export default function AdminAddProduct() 
{
    let [category, setCategory] = useState('');
    let [categories, setCategories] = useState([]);
    let [title, setTitle] = useState('');
    let [photo, setPhoto] = useState(null);
    let [price, setPrice] = useState(0);
    let [stock, setStock] = useState(0);
    let [weight, setWeight] = useState(0);
    let [size, setSize] = useState('');
    let [isLive, setIsLive] = useState(false);
    let [detail, setDetail] = useState('');
    let navigate = useNavigate();
    VerifyLogin();

    let fetchCategories = function() {
        if(categories.length === 0) {
            let apiAddress = getBase() + "category.php";
            axios({
                method : 'get',
                responseType : 'json',
                url : apiAddress,
            }).then((response) => {
                console.log(response.data);
                let error = response.data[0]['error'];
                if(error !== 'no')
                    showMessage(error);
                else {
                    if(response.data[1]['total'] === 0)
                        showMessage('Not Product Found');
                    else {
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

    let addProduct = function(e) {
        e.preventDefault();
        console.log(title, photo, price, stock, weight, size, isLive, detail, category);
        let apiAddress = getBase() + "insert_product.php";
        let form = new FormData();
        form.append("name", title);
        form.append("price", price);
        form.append("photo", photo);
        form.append("stock", stock);
        form.append("weight", weight);
        form.append("size", size);
        form.append("islive", isLive);
        form.append("detail", detail);
        form.append("categoryid",category);
        console.log(form);

        axios({
            method:'post',
            url:apiAddress,
            responseType:'json',
            data:form
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
                        navigate("/admin-product");
                    },2000);
                }
            }
        }).catch((error) => {
            if(error.code === 'ERR_NETWORK')
                showMessage(ERR_MESSAGE);
        })
    }

    useEffect(() => fetchCategories());
    
    return (<div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
                <ToastContainer />
                <AdminMenu />
            <div className="layout-page">
                <AdminHeader title='Product Management' />
                <div className="content-wrapper">
                    <div className="container-xxl flex-grow-1 container-p-y">
                        <div className="card shadow">
                            <div className="card-header bg-primary p-3 d-flex justify-content-between">
                                <h4 className="text-white mb-0">Add New Product</h4>
                                <Link to="/admin-product" className="btn btn-light">Back</Link>
                            </div>
                            <div className="card-body">
                                <form method="post" onSubmit={addProduct}>
                                    <div className="row mb-3 mt-3">
                                        <div className="col-md-4">
                                            <label htmlFor="category" className="form-label">Category</label>
                                            <select id="category" className="form-select" required onChange={(e) => setCategory(e.target.value)}>
                                                <option value=''>Select Category</option>
                                                {categories.map((item) => {
                                                    return(<option value={item['id']}>{item['title']}</option>)
                                                })}
                                            </select>
                                        </div>
                                        <div className="col-md-4">
                                            <label htmlFor="title" className="form-label">Title</label>
                                            <input type="text" className="form-control" id="title" required value={title} onChange={(e) => setTitle(e.target.value)} />
                                        </div>
                                        <div className="col-md-4">
                                            <label htmlFor="photo" className="form-label">Photo</label>
                                            <input type="file" className="form-control" id="photo" accept="image/*" required onChange={(e) => setPhoto(e.target.files[0])} />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-md-3">
                                            <label htmlFor="price" className="form-label">Price</label>
                                            <input type="number" className="form-control" id="price" required value={price} onChange={(e) => setPrice(e.target.value)} />
                                        </div>
                                        <div className="col-md-3">
                                            <label htmlFor="stock" className="form-label">Stock</label>
                                            <input type="number" className="form-control" id="stock" required value={stock} onChange={(e) => setStock(e.target.value)} />
                                        </div>
                                        <div className="col-md-3">
                                            <label htmlFor="weight" className="form-label">Weight</label>
                                            <input type="text" className="form-control" id="weight" required value={weight} onChange={(e) => setWeight(e.target.value)} />
                                        </div>
                                        <div className="col-md-3">
                                            <label htmlFor="size" className="form-label">Size</label>
                                            <input type="text" className="form-control" id="size" required value={size} onChange={(e) => setSize(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-md-3">
                                            <label className="form-label">Is Live</label>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="islive" id="liveYes" value="1" onChange={(e) => setIsLive('1')} required />
                                                <label className="form-check-label" htmlFor="liveYes">Yes</label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="islive" id="liveNo" value="0" onChange={(e) => setIsLive('0')} required />
                                                <label className="form-check-label" htmlFor="liveNo">No</label>
                                            </div>
                                        </div>
                                        <div className="col-md-9">
                                            <label htmlFor="detail" className="form-label">Detail</label>
                                            <textarea className="form-control" id="detail" rows={3} required onChange={(e) => setDetail(e.target.value)}>{detail}</textarea>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-12 text-end">
                                            <button type="submit" className="btn btn-primary">Add</button>
                                            <button type="reset" className="btn btn-dark ms-2">Clear</button>
                                        </div>
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