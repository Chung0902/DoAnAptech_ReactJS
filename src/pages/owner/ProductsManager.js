import React from "react";
import { NavLink } from "react-router-dom";
import UpdateProduct from "./products/UpdateProduct";

const ProductsManager = () => {
  return (
    <main className="app-content">
      <div className="app-title">
        <ul className="app-breadcrumb breadcrumb side">
          <li className="breadcrumb-item active">
            <a href="#">
              <b>Danh sách sản phẩm</b>
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
                    to="/main/productsmanager/addproducts"
                    className="active1"
                  >
                    <a
                      className="btn btn-add btn-sm"
                      href="form-add-san-pham.html"
                      title="Thêm"
                    >
                      <i className="fas fa-plus"></i>
                      Tạo mới sản phẩm
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
                className="table table-hover table-bordered"
                id="sampleTable"
              >
                <thead>
                  <tr>
                    <th width="10">
                      <input type="checkbox" id="all" />
                    </th>
                    <th>Mã sản phẩm</th>
                    <th>Tên sản phẩm</th>
                    <th>Ảnh</th>
                    <th>Số lượng</th>
                    <th>Tình trạng</th>
                    <th>Giá tiền</th>
                    <th>Danh mục</th>
                    <th>Chức năng</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td width="10">
                      <input type="checkbox" name="check1" value="1" />
                    </td>
                    <td>71309005</td>
                    <td>Bàn ăn gỗ Theresa</td>
                    <td>
                      <img
                        src="/img-sanpham/theresa.jpg"
                        alt=""
                        width="100px;"
                      />
                    </td>
                    <td>40</td>
                    <td>
                      <span className="badge bg-success">Còn hàng</span>
                    </td>
                    <td>5.600.000 đ</td>
                    <td>Bàn ăn</td>
                    <td>
                      <button
                        className="btn btn-primary btn-sm trash"
                        type="button"
                        title="Xóa"
                        onclick="myFunction(this)"
                      >
                        <i className="fas fa-trash-alt"></i>
                      </button>
                      <button
                        className="btn btn-primary btn-sm edit"
                        type="button"
                        title="Sửa"
                        id="show-emp"
                        data-bs-toggle="modal"
                        data-bs-target="#ModalUP"
                      >
                        <i className="fas fa-edit"></i>
                        <UpdateProduct/>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td width="10">
                      <input type="checkbox" name="check1" value="1" />
                    </td>
                    <td>61304005</td>
                    <td>Bàn ăn Reno mặt đá</td>
                    <td>
                      <img src="/img-sanpham/reno.jpg" alt="" width="100px;" />
                    </td>
                    <td>70</td>
                    <td>
                      <span className="badge bg-success">Còn hàng</span>
                    </td>
                    <td>24.200.000 đ</td>
                    <td>Bàn ăn</td>
                    <td>
                      <button
                        className="btn btn-primary btn-sm trash"
                        type="button"
                        title="Xóa"
                        onclick="myFunction(this)"
                      >
                        <i className="fas fa-trash-alt"></i>
                      </button>
                      <button
                        className="btn btn-primary btn-sm edit"
                        type="button"
                        title="Sửa"
                        id="show-emp"
                        data-bs-toggle="modal"
                        data-bs-target="#ModalUP"
                      >
                        <i className="fas fa-edit"></i>
                        <UpdateProduct/>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td width="10">
                      <input type="checkbox" name="check1" value="1" />
                    </td>
                    <td>62304003</td>
                    <td>Bàn ăn Vitali mặt đá</td>
                    <td>
                      <img src="/img-sanpham/matda.jpg" alt="" width="100px;" />
                    </td>
                    <td>40</td>
                    <td>
                      <span className="badge bg-success">Còn hàng</span>
                    </td>
                    <td>33.235.000 đ</td>
                    <td>Bàn ăn</td>
                    <td>
                      <button
                        className="btn btn-primary btn-sm trash"
                        type="button"
                        title="Xóa"
                        onclick="myFunction(this)"
                      >
                        <i className="fas fa-trash-alt"></i>
                      </button>
                      <button
                        className="btn btn-primary btn-sm edit"
                        type="button"
                        title="Sửa"
                        id="show-emp"
                        data-bs-toggle="modal"
                        data-bs-target="#ModalUP"
                      >
                        <i className="fas fa-edit"></i>
                        <UpdateProduct/>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td width="10">
                      <input type="checkbox" name="check1" value="1" />
                    </td>
                    <td>72638003</td>
                    <td>Ghế ăn gỗ Theresa</td>
                    <td>
                      <img
                        src="/img-sanpham/ghethera.jpg"
                        alt=""
                        width="100px;"
                      />
                    </td>
                    <td>50</td>
                    <td>
                      <span className="badge bg-success">Còn hàng</span>
                    </td>
                    <td>950.000 đ</td>
                    <td>Ghế gỗ</td>
                    <td>
                      <button
                        className="btn btn-primary btn-sm trash"
                        type="button"
                        title="Xóa"
                        onclick="myFunction(this)"
                      >
                        <i className="fas fa-trash-alt"></i>
                      </button>
                      <button
                        className="btn btn-primary btn-sm edit"
                        type="button"
                        title="Sửa"
                        id="show-emp"
                        data-bs-toggle="modal"
                        data-bs-target="#ModalUP"
                      >
                        <i className="fas fa-edit"></i>
                        <UpdateProduct/>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td width="10">
                      <input type="checkbox" name="check1" value="1" />
                    </td>
                    <td>72109004</td>
                    <td>Ghế làm việc Zuno</td>
                    <td>
                      <img src="/img-sanpham/zuno.jpg" alt="" width="100px;" />
                    </td>
                    <td>50</td>
                    <td>
                      <span className="badge bg-success">Còn hàng</span>
                    </td>
                    <td>3.800.000 đ</td>
                    <td>Ghế gỗ</td>
                    <td>
                      <button
                        className="btn btn-primary btn-sm trash"
                        type="button"
                        title="Xóa"
                        onclick="myFunction(this)"
                      >
                        <i className="fas fa-trash-alt"></i>
                      </button>
                      <button
                        className="btn btn-primary btn-sm edit"
                        type="button"
                        title="Sửa"
                        id="show-emp"
                        data-bs-toggle="modal"
                        data-bs-target="#ModalUP"
                      >
                        <i className="fas fa-edit"></i>
                        <UpdateProduct/>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td width="10">
                      <input type="checkbox" name="check1" value="1" />
                    </td>
                    <td>82716001</td>
                    <td>Ghế ăn Vitali</td>
                    <td>
                      <img src="/img-sanpham/vita.jpg" alt="" width="100px;" />
                    </td>
                    <td>55</td>
                    <td>
                      <span className="badge bg-success">Còn hàng</span>
                    </td>
                    <td>4.600.000 đ</td>
                    <td>Ghế gỗ</td>
                    <td>
                      <button
                        className="btn btn-primary btn-sm trash"
                        type="button"
                        title="Xóa"
                        onclick="myFunction(this)"
                      >
                        <i className="fas fa-trash-alt"></i>
                      </button>
                      <button
                        className="btn btn-primary btn-sm edit"
                        type="button"
                        title="Sửa"
                        id="show-emp"
                        data-bs-toggle="modal"
                        data-bs-target="#ModalUP"
                      >
                        <i className="fas fa-edit"></i>
                        <UpdateProduct/>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td width="10">
                      <input type="checkbox" name="check1" value="1" />
                    </td>
                    <td>72109001</td>
                    <td>Ghế ăn gỗ Lucy màu trắng</td>
                    <td>
                      <img src="/img-sanpham/lucy.jpg" alt="" width="100px;" />
                    </td>
                    <td>38</td>
                    <td>
                      <span className="badge bg-success">Còn hàng</span>
                    </td>
                    <td>1.100.000 đ</td>
                    <td>Ghế gỗ</td>
                    <td>
                      <button
                        className="btn btn-primary btn-sm trash"
                        type="button"
                        title="Xóa"
                        onclick="myFunction(this)"
                      >
                        <i className="fas fa-trash-alt"></i>
                      </button>
                      <button
                        className="btn btn-primary btn-sm edit"
                        type="button"
                        title="Sửa"
                        id="show-emp"
                        data-bs-toggle="modal"
                        data-bs-target="#ModalUP"
                      >
                        <i className="fas fa-edit"></i>
                        <UpdateProduct/>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td width="10">
                      <input type="checkbox" name="check1" value="1" />
                    </td>
                    <td>71304041</td>
                    <td>Bàn ăn mở rộng Vegas</td>
                    <td>
                      <img src="/img-sanpham/vegas.jpg" alt="" width="100px;" />
                    </td>
                    <td>80</td>
                    <td>
                      <span className="badge bg-success">Còn hàng</span>
                    </td>
                    <td>21.550.000 đ</td>
                    <td>Bàn thông minh</td>
                    <td>
                      <button
                        className="btn btn-primary btn-sm trash"
                        type="button"
                        title="Xóa"
                        onclick="myFunction(this)"
                      >
                        <i className="fas fa-trash-alt"></i>
                      </button>
                      <button
                        className="btn btn-primary btn-sm edit"
                        type="button"
                        title="Sửa"
                        id="show-emp"
                        data-bs-toggle="modal"
                        data-bs-target="#ModalUP"
                      >
                        <i className="fas fa-edit"></i>
                        <UpdateProduct/>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td width="10">
                      <input type="checkbox" name="check1" value="1" />
                    </td>
                    <td>71304037</td>
                    <td>Bàn ăn mở rộng Gepa</td>
                    <td>
                      <img src="/img-sanpham/banan.jpg" alt="" width="100px;" />
                    </td>
                    <td>80</td>
                    <td>
                      <span className="badge bg-success">Còn hàng</span>
                    </td>
                    <td>16.770.000 đ</td>
                    <td>Bàn thông minh</td>
                    <td>
                      <button
                        className="btn btn-primary btn-sm trash"
                        type="button"
                        title="Xóa"
                        onclick="myFunction(this)"
                      >
                        <i className="fas fa-trash-alt"></i>
                      </button>
                      <button
                        className="btn btn-primary btn-sm edit"
                        type="button"
                        title="Sửa"
                        id="show-emp"
                        data-bs-toggle="modal"
                        data-bs-target="#ModalUP"
                      >
                        <i className="fas fa-edit"></i>
                        <UpdateProduct/>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td width="10">
                      <input type="checkbox" name="check1" value="1" />
                    </td>
                    <td>71304032</td>
                    <td>Bàn ăn mặt gốm vân đá Cera</td>
                    <td>
                      <img src="/img-sanpham/cera.jpg" alt="" width="100px;" />
                    </td>
                    <td>46</td>
                    <td>
                      <span className="badge bg-success">Còn hàng</span>
                    </td>
                    <td>20.790.000 đ</td>
                    <td>Bàn thông minh</td>
                    <td>
                      <button
                        className="btn btn-primary btn-sm trash"
                        type="button"
                        title="Xóa"
                        onclick="myFunction(this)"
                      >
                        <i className="fas fa-trash-alt"></i>
                      </button>
                      <button
                        className="btn btn-primary btn-sm edit"
                        type="button"
                        title="Sửa"
                        id="show-emp"
                        data-bs-toggle="modal"
                        data-bs-target="#ModalUP"
                      >
                        <i className="fas fa-edit"></i>
                        <UpdateProduct/>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td width="10">
                      <input type="checkbox" name="check1" value="1" />
                    </td>
                    <td>71338008</td>
                    <td>Bàn ăn mở rộng cao cấp Dolas</td>
                    <td>
                      <img src="/img-sanpham/dolas.jpg" alt="" width="100px;" />
                    </td>
                    <td>66</td>
                    <td>
                      <span className="badge bg-success">Còn hàng</span>
                    </td>
                    <td>22.650.000 đ</td>
                    <td>Bàn thông minh</td>
                    <td>
                      <button
                        className="btn btn-primary btn-sm trash"
                        type="button"
                        title="Xóa"
                        onclick="myFunction(this)"
                      >
                        <i className="fas fa-trash-alt"></i>
                      </button>
                      <button
                        className="btn btn-primary btn-sm edit"
                        type="button"
                        title="Sửa"
                        id="show-emp"
                        data-bs-toggle="modal"
                        data-bs-target="#ModalUP"
                      >
                        <i className="fas fa-edit"></i>
                        <UpdateProduct/>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td width="10">
                      <input type="checkbox" name="check1" value="1" />
                    </td>
                    <td>83826226</td>
                    <td>Tủ ly - tủ bát</td>
                    <td>
                      <img src="/img-sanpham/tu.jpg" alt="" width="100px;" />
                    </td>
                    <td>0</td>
                    <td>
                      <span className="badge bg-danger">Hét hàng</span>
                    </td>
                    <td>2.450.000 đ</td>
                    <td>Tủ</td>
                    <td>
                      <button
                        className="btn btn-primary btn-sm trash"
                        type="button"
                        title="Xóa"
                        onclick="myFunction(this)"
                      >
                        <i className="fas fa-trash-alt"></i>
                      </button>
                      <button
                        className="btn btn-primary btn-sm edit"
                        type="button"
                        title="Sửa"
                        id="show-emp"
                        data-bs-toggle="modal"
                        data-bs-target="#ModalUP"
                      >
                        <i className="fas fa-edit"></i>
                        <UpdateProduct/>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td width="10">
                      <input type="checkbox" name="check1" value="1" />
                    </td>
                    <td>83252001</td>
                    <td>Giường ngủ Thomas</td>
                    <td>
                      <img
                        src="/img-sanpham/thomas.jpg"
                        alt=""
                        width="100px;"
                      />
                    </td>
                    <td>73</td>
                    <td>
                      <span className="badge bg-success">Còn hàng</span>
                    </td>
                    <td>12.950.000 đ</td>
                    <td>Giường người lớn</td>
                    <td>
                      <button
                        className="btn btn-primary btn-sm trash"
                        type="button"
                        title="Xóa"
                        onclick="myFunction(this)"
                      >
                        <i className="fas fa-trash-alt"></i>
                      </button>
                      <button
                        className="btn btn-primary btn-sm edit"
                        type="button"
                        title="Sửa"
                        id="show-emp"
                        data-bs-toggle="modal"
                        data-bs-target="#ModalUP"
                      >
                        <i className="fas fa-edit"></i>
                        <UpdateProduct/>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td width="10">
                      <input type="checkbox" name="check1" value="1" />
                    </td>
                    <td>83252002</td>
                    <td>Giường ngủ Jimmy</td>
                    <td>
                      <img src="/img-sanpham/jimmy.jpg" alt="" width="100px;" />
                    </td>
                    <td>60</td>
                    <td>
                      <span className="badge bg-success">Còn hàng</span>
                    </td>
                    <td>16.320.000 đ</td>
                    <td>Giường người lớn</td>
                    <td>
                      <button
                        className="btn btn-primary btn-sm trash"
                        type="button"
                        title="Xóa"
                        onclick="myFunction(this)"
                      >
                        <i className="fas fa-trash-alt"></i>
                      </button>
                      <button
                        className="btn btn-primary btn-sm edit"
                        type="button"
                        title="Sửa"
                        id="show-emp"
                        data-bs-toggle="modal"
                        data-bs-target="#ModalUP"
                      >
                        <i className="fas fa-edit"></i>
                        <UpdateProduct/>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td width="10">
                      <input type="checkbox" name="check1" value="1" />
                    </td>
                    <td>83216008</td>
                    <td>Giường ngủ Tara chân gỗ</td>
                    <td>
                      <img src="/img-sanpham/tare.jpg" alt="" width="100px;" />
                    </td>
                    <td>65</td>
                    <td>
                      <span className="badge bg-success">Còn hàng</span>
                    </td>
                    <td>19.600.000 đ</td>
                    <td>Giường người lớn</td>
                    <td>
                      <button
                        className="btn btn-primary btn-sm trash"
                        type="button"
                        title="Xóa"
                        onclick="myFunction(this)"
                      >
                        <i className="fas fa-trash-alt"></i>
                      </button>
                      <button
                        className="btn btn-primary btn-sm edit"
                        type="button"
                        title="Sửa"
                        id="show-emp"
                        data-bs-toggle="modal"
                        data-bs-target="#ModalUP"
                      >
                        <i className="fas fa-edit"></i>
                        <UpdateProduct/>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td width="10">
                      <input type="checkbox" name="check1" value="1" />
                    </td>
                    <td>83216006</td>
                    <td>Giường ngủ Kara 1.6x2m</td>
                    <td>
                      <img src="/img-sanpham/kara.jpg" alt="" width="100px;" />
                    </td>
                    <td>60</td>
                    <td>
                      <span className="badge bg-success">Còn hàng</span>
                    </td>
                    <td>14.500.000 đ</td>
                    <td>Giường người lớn</td>
                    <td>
                      <button
                        className="btn btn-primary btn-sm trash"
                        type="button"
                        title="Xóa"
                        onclick="myFunction(this)"
                      >
                        <i className="fas fa-trash-alt"></i>
                      </button>
                      <button
                        className="btn btn-primary btn-sm edit"
                        type="button"
                        title="Sửa"
                        id="show-emp"
                        data-bs-toggle="modal"
                        data-bs-target="#ModalUP"
                      >
                        <i className="fas fa-edit"></i>
                        <UpdateProduct/>
                      </button>
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
};

export default ProductsManager;