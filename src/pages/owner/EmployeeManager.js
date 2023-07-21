import React, {useState} from 'react'
import "../../../src/styles/main.css"
import { NavLink } from 'react-router-dom';
import UpdateEmployee from './employees/UpdateEmployee';
import axiosClient from '../../libraries/axiosClient';
import { useEffect } from 'react';


const EmployeeManager = () => {
  const [employees, setEmployees] = useState([]);

  const getAllEmployees = async () => {
    try {
      const response = await axiosClient.get('admin/employees');
      const data = response.data;
      
      if (data) {
        setEmployees(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

    useEffect(() =>{
      getAllEmployees();
    },[]);

  return (
    <main className="app-content">
      <div className="app-title">
        <ul className="app-breadcrumb breadcrumb side">
          <li className="breadcrumb-item active">
            <a href="#">
              <b>Danh sách nhân viên</b>
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
                <div className="col-sm-2">
                  <NavLink
                    to="/main/employeemanager/addemployee"
                    className="active1"
                  >
                    
                      <i className="fas fa-plus"></i>
                      Tạo mới nhân viên
                    
                  </NavLink>
                </div>
                <div className="col-sm-2">
                  <a
                    className="btn btn-delete btn-sm"
                  >
                    <i className="fas fa-trash-alt"></i> Xóa tất cả{" "}
                  </a>
                </div>
              </div>
              <table
                className="table table-hover table-bordered js-copytextarea"
                cellPadding="0"
                cellSpacing="0"
                border="0"
                id="sampleTable"
              >
                <thead>
                  <tr>
                    <th width="10">
                      <input type="checkbox" id="all" />
                    </th>
                    <th>ID nhân viên</th>
                    <th width="150">Họ và tên</th>
                    <th width="20">Ảnh thẻ</th>
                    <th width="300">Địa chỉ</th>
                    <th>Ngày sinh</th>
                    <th>Giới tính</th>
                    <th>SĐT</th>
                    <th>Chức vụ</th>
                    <th width="100">Tính năng</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.length > 0 ? employees.map((e) =>(
                  <tr key={e._id}>
                    <td width="10">
                      <input type="checkbox" name="check1" value="1" />
                    </td>
                    <td>{e._id}</td>
                    <td>{e.lastName}</td>
                    <td>
                      <img
                        className="img-card-person"
                        src="/img-anhthe/1.jpg"
                        alt=""
                      />
                    </td>
                    <td>{e.address}</td>
                    <td>{e.birthday}</td>
                    <td>Nữ</td>
                    <td>{e.phoneNumber}</td>
                    <td>Bán hàng</td>
                    <td className="table-td-center">
                      <button
                        className="btn btn-primary btn-sm trash"
                        type="button"
                        title="Xóa"
                        onClick="myFunction(this)"
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
                        <UpdateEmployee/>
                
                    </td>
                  </tr>)): <tr><td colSpan="10">Không có dữ liệu</td></tr>}
  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default EmployeeManager