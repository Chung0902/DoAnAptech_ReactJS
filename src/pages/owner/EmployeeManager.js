import React, {useState} from 'react'
import "../../../src/styles/main.css"
import { NavLink } from 'react-router-dom';
import UpdateEmployee from './employees/UpdateEmployee';


const EmployeeManager = () => {

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
                    <a
                      className="btn btn-add btn-sm"
                      href="form-add-nhan-vien.html"
                      title="Thêm"
                    >
                      <i className="fas fa-plus"></i>
                      Tạo mới nhân viên
                    </a>
                  </NavLink>
                </div>
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
                  <tr>
                    <td width="10">
                      <input type="checkbox" name="check1" value="1" />
                    </td>
                    <td>#CD12837</td>
                    <td>Hồ Thị Thanh Ngân</td>
                    <td>
                      <img
                        className="img-card-person"
                        src="/img-anhthe/1.jpg"
                        alt=""
                      />
                    </td>
                    <td>155-157 Trần Quốc Thảo, Quận 3, Hồ Chí Minh </td>
                    <td>12/02/1999</td>
                    <td>Nữ</td>
                    <td>0926737168</td>
                    <td>Bán hàng</td>
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
                        <UpdateEmployee/>
                
                    </td>
                  </tr>
                  <tr>
                    <td width="10">
                      <input type="checkbox" name="check2" value="2" />
                    </td>
                    <td>#SX22837</td>
                    <td>Trần Khả Ái</td>
                    <td>
                      <img
                        className="img-card-person"
                        src="/img-anhthe/2.jpg"
                        alt=""
                      />
                    </td>
                    <td>6 Nguyễn Lương Bằng, Tân Phú, Quận 7, Hồ Chí Minh</td>
                    <td>22/12/1999</td>
                    <td>Nữ</td>
                    <td>0931342432</td>
                    <td>Bán hàng</td>
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
                        <UpdateEmployee/>
                
                    </td>
                  </tr>
                  <tr>
                    <td width="10">
                      <input type="checkbox" name="check3" value="3" />
                    </td>
                    <td>#LO2871</td>
                    <td>Phạm Thu Cúc</td>
                    <td>
                      <img
                        className="img-card-person"
                        src="/img-anhthe/3.jpg"
                        alt=""
                      />
                    </td>
                    <td>Số 3 Hòa Bình, Phường 3, Quận 11, Hồ Chí Minh </td>
                    <td>02/06/1998</td>
                    <td>Nữ</td>
                    <td>0931491997</td>
                    <td>Thu ngân</td>
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
                        <UpdateEmployee/>
                
                    </td>
                  </tr>
                  <tr>
                    <td width="10">
                      <input type="checkbox" />
                    </td>
                    <td>#SR28746</td>
                    <td>Trần Anh Khoa</td>
                    <td>
                      <img
                        className="img-card-person"
                        src="/img-anhthe/4.jpg"
                        alt=""
                      />
                    </td>
                    <td>
                      19 Đường Nguyễn Hữu Thọ, Tân Hưng, Quận 7, Hồ Chí Minh{" "}
                    </td>
                    <td>18/02/1995</td>
                    <td>Nam</td>
                    <td>0916706633</td>
                    <td>Tư vấn</td>
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
                        <UpdateEmployee/>
                
                    </td>
                  </tr>
                  <tr>
                    <td width="10">
                      <input type="checkbox" />
                    </td>
                    <td>#KJS276</td>
                    <td>Nguyễn Thành Nhân</td>
                    <td>
                      <img
                        className="img-card-person"
                        src="/img-anhthe/5.jpg"
                        alt=""
                      />
                    </td>
                    <td>Số 13, Tân Thuận Đông, Quận 7, Hồ Chí Minh </td>
                    <td>10/03/1996</td>
                    <td>Nam</td>
                    <td>0971038066</td>
                    <td>Bảo trì</td>
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
                        <UpdateEmployee/>
                
                    </td>
                  </tr>
                  <tr>
                    <td width="10">
                      <input type="checkbox" />
                    </td>
                    <td>#BS76228</td>
                    <td>Nguyễn Đặng Trọng Nhân</td>
                    <td>
                      <img
                        className="img-card-person"
                        src="/img-anhthe/6.jpg"
                        alt=""
                      />
                    </td>
                    <td>59C Nguyễn Đình Chiểu, Quận 3, Hồ Chí Minh </td>
                    <td>23/07/1996</td>
                    <td>Nam</td>
                    <td>0846881155</td>
                    <td>Dịch vụ</td>
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
                        <UpdateEmployee/>
                
                    </td>
                  </tr>
                  <tr>
                    <td width="10">
                      <input type="checkbox" />
                    </td>
                    <td>#YUI21376</td>
                    <td>Nguyễn Thị Mai</td>
                    <td>
                      <img
                        className="img-card-person"
                        src="/img-anhthe/4.jpg"
                        alt=""
                      />
                    </td>
                    <td>Đường Số 3, Tân Tạo A, Bình Tân, Hồ Chí Minh</td>
                    <td>09/12/2000</td>
                    <td>Nữ </td>
                    <td>0836333037</td>
                    <td>Tư vấn</td>
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
                        <UpdateEmployee/>
                
                    </td>
                  </tr>
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