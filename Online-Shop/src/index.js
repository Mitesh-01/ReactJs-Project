import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminAddCategory from '../src/Online-Shop/AdminAddCategory';
import AdminCategory from '../src/Online-Shop/AdminCategory';
import AdminEditCategory from '../src/Online-Shop/AdminEditCategory';

import AdminProduct from '../src/Online-Shop/AdminProduct';
import AdminAddProduct from '../src/Online-Shop/AdminAddProduct';
import AdminEditProduct from '../src/Online-Shop/AdminEditProduct';
import AdminProductDetail from '../src/Online-Shop//AdminProductDetail';
import AdminOrders from '../src/Online-Shop//AdminOrders';
import AdminOrdersDetail from '../src/Online-Shop/AdminOrdersDetail';

import AdminSlider from '../src/Online-Shop/AdminSlider';
import AdminAddSlider from '../src/Online-Shop/AdminAddSlider';
import AdminEditSlider from '../src/Online-Shop/AdminEditSlider';
import AdminSliderDetail from './Online-Shop/AdminSliderDetail';

import AdminPincode from './Online-Shop/AdminPincode';
import AdminAddPincode from './Online-Shop/AdminAddPincode';
import AdminEditPincode from './Online-Shop/AdminEditPincode';
import AdminPincodeDetail from './Online-Shop/AdminPincodeDetail';

import AdminChangePassword from '../src/Online-Shop/AdminChangePassword';
import AdminDashboard from '../src/Online-Shop/AdminDashboard';
import AdminUsers from '../src/Online-Shop/AdminUsers';
import AdminForgotPassword from '../src/Online-Shop/AdminForgotPassword';
import AdminLogin from '../src/Online-Shop/AdminLogin';
import PrintBill from '../src/Online-Shop/PrintBill';

import NoPageFound from '../src/Online-Shop/NoPageFound';
import Logout from '../src/Online-Shop/Logout';

function MyRouter()
{
    return (<BrowserRouter>
        <Routes>
            <Route index path='/' element={<AdminLogin />} />
            <Route path='/admin-forgot-password' element={<AdminForgotPassword />} />
            <Route path='/admin-change-password' element={<AdminChangePassword />} />
            <Route path='/admin-users' element={<AdminUsers />} />
            <Route path='/admin-dashboard' element={<AdminDashboard />} />
            <Route path='/admin-product' element={<AdminProduct />} />
            <Route path='/admin-add-product' element={<AdminAddProduct />} />
            <Route path='/admin-edit-product/:productid' element={<AdminEditProduct />} />
            <Route path='/admin-product-detail/:productid' element={<AdminProductDetail />} />
            <Route path='/admin-category' element={<AdminCategory />} />
            <Route path='/admin-add-category' element={<AdminAddCategory />} />
            <Route path='/admin-edit-category/:categoryid' element={<AdminEditCategory />} />
            <Route path='/admin-slider' element={<AdminSlider />} />
            <Route path='/admin-add-slider' element={<AdminAddSlider />} />
            <Route path='/admin-edit-slider' element={<AdminEditSlider />} />
            <Route path='/admin-slider-detail' element={<AdminSliderDetail />} />
            <Route path='/admin-orders' element={<AdminOrders />} />
            <Route path='/admin-pincode' element={<AdminPincode />} />
            <Route path='/admin-add-pincode' element={<AdminAddPincode />} />
            <Route path='/admin-edit-pincode' element={<AdminEditPincode />} />
            <Route path='/admin-pincode-detail' element={<AdminPincodeDetail />} />
            <Route path='/admin-orders-detail' element={<AdminOrdersDetail />} />
            <Route path='/admin-print-bill' element={<PrintBill />} />
            <Route path='/admin-logout' element={<Logout />} />
            <Route path='*' element={<NoPageFound />} />
        </Routes>
    </BrowserRouter>)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyRouter />);
