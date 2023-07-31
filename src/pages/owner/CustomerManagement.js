import React, { useEffect, useState } from 'react'
import UpdateCustomer from './customer/UpdateCustomer';
import { NavLink } from 'react-router-dom';
import axiosClient from '../../libraries/axiosClient';

const CustomerManagement = () => {

  const [customers, setCustomer] = useState([]);

  const getAllCustomer = async () => {
    try {
      const response = await axiosClient.get('admin/customers');
      setCustomer(response.payload);
      
    } catch (error) {
      console.error(error);
    }
  };

    useEffect(() =>{
      getAllCustomer();
    },[]);
      // Hàm biến đổi định dạng ngày sinh
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString().slice(0);
    return `${day}/${month}/${year}`;
  };
  return (
    <main className="app-content">
      <div className="app-title">
        <ul className="app-breadcrumb breadcrumb side">
          <li className="breadcrumb-item active">
            <a href="#">
              <b>Danh sách khách hàng</b>
            </a>
          </li>
        </ul>
        <div id="clock"></div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="tile">
            <div className="tile-body">
              <div className="row element-button">
                {/* <div className="col-sm-3">
                  <NavLink
                    to="/main/customermanagement/addcustomer"
                    className="active1"
                  >
                    <a
                      className="btn btn-add btn-sm"
                      href="form-add-nhan-vien.html"
                      title="Thêm"
                    >
                      <i className="fas fa-plus"></i>
                      Tạo mới khách hàng
                    </a>
                  </NavLink>
                </div> */}
                <div className="col-sm-2">
                  <a
                    className="btn btn-delete btn-sm"
                    type="button"
                    title="Xóa"
                    onclick="myFunction(this)"
                  >
                    <i className="fas fa-trash-alt"></i> Xóa tất cả{" "}
                  </a>
                </div>
              </div>
              <table
                className="table table-hover table-bordered js-copytextarea"
                cellpadding="0"
                cellspacing="0"
                border="0"
                id="sampleTable"
              >
                <thead>
                  <tr>
                    <th width="10">
                      <input type="checkbox" id="all" />
                    </th>
                    <th>ID khách hàng</th>
                    <th width="150">Họ và tên</th>
                    <th width="20">Ảnh đại diện</th>
                    <th width="300">Địa chỉ</th>
                    <th>Ngày sinh</th>
                    <th>Giới tính</th>
                    <th>SĐT</th>
                    <th width="100">Tính năng</th>
                  </tr>
                </thead>
                <tbody>
                  {customers && customers.map((c) =>(
                    <tr key={c._id}>
                      <td width="10">
                        <input type="checkbox" name="check1" value="1" />
                      </td>
                      <td>{c._id}</td>
                      <td>{c.firstName} {c.lastName}</td>
                      <td>
                        <img
                          className="img-card-person"
                          src="/img-anhthe/1.jpg"
                          alt=""
                        />
                      </td>
                      <td>{c.address}</td>
                      <td>{formatDate(c.birthday)}</td>
                      <td>Nữ</td>
                      <td>{c.phoneNumber}</td>
                    
                      <td className="table-td-center">
                        <button
                          className="btn btn-primary btn-sm trash"
                          type="button"
                          title="Xóa"
                          onclick="myFunction(this)"
                        >
                          <i className="fas fa-trash-alt"></i>
                        </button>               
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            data-bs-whatever="@mdo"
                          >
                            <i className="fas fa-edit"></i>
                          </button>
                          <UpdateCustomer/>
                  
                      </td>
                    </tr>
                    ))}
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default CustomerManagement