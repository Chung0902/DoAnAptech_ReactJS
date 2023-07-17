import React from "react";
import AddSuppliers from "./AddSuppliers";
import AddCategories from "../categories/AddCategories";
import AddStatus from "./AddStatus";

const AddProduct = () => {
  return (
    <main className="app-content">
      <div className="app-title">
        <ul className="app-breadcrumb breadcrumb">
          <li className="breadcrumb-item">Danh sách sản phẩm</li>
          <li className="breadcrumb-item">
            <a href="#">Thêm sản phẩm</a>
          </li>
        </ul>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="tile">
            <h3 className="tile-title">Tạo mới sản phẩm</h3>
            <div className="tile-body">
              <div className="row element-button">
                <div className="col-sm-3">
                  <button
                    type="button"
                    className="btn btn-add btn-sm"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    data-bs-whatever="@mdo"
                  >
                    <i className="fas fa-folder-plus"></i> Thêm nhà cung cấp
                  </button>
                  <AddSuppliers />
                </div>
                <div className="col-sm-3">
                  <button
                    type="button"
                    className="btn btn-add btn-sm"
                    data-bs-toggle="modal"
                    data-bs-target="#adddanhmuc"
                  >
                    <i className="fas fa-folder-plus"></i> Thêm danh mục
                  </button>
                  <AddCategories />
                </div>
                <div className="col-sm-2">
                  <button
                    type="button"
                    className="btn btn-add btn-sm"
                    data-bs-toggle="modal"
                    data-bs-target="#addtinhtrang"
                  >
                    <i className="fas fa-folder-plus"></i> Thêm trạng thái
                  </button>
                  <AddStatus/>
                </div>
              </div>
              <form className="row">
                <div className="form-group col-md-3">
                  <label className="control-label">Mã sản phẩm </label>
                  <input
                    className="form-control"
                    type="number"
                    placeholder=""
                  />
                </div>
                <div className="form-group col-md-3">
                  <label className="control-label">Tên sản phẩm</label>
                  <input className="form-control" type="text" />
                </div>

                <div className="form-group  col-md-3">
                  <label className="control-label">Số lượng</label>
                  <input className="form-control" type="number" />
                </div>
                <div className="form-group col-md-3 ">
                  <label for="exampleSelect1" className="control-label">
                    Trạng thái
                  </label>
                  <select className="form-control" id="exampleSelect1">
                    <option>-- Chọn tình trạng --</option>
                    <option>Còn hàng</option>
                    <option>Hết hàng</option>
                  </select>
                </div>
                <div className="form-group col-md-3">
                  <label for="exampleSelect1" className="control-label">
                    Danh mục
                  </label>
                  <select className="form-control" id="exampleSelect1">
                    <option>-- Chọn danh mục --</option>
                    <option>Bàn ăn</option>
                    <option>Bàn thông minh</option>
                    <option>Tủ</option>
                    <option>Ghế gỗ</option>
                    <option>Ghế sắt</option>
                    <option>Giường người lớn</option>
                    <option>Giường trẻ em</option>
                    <option>Bàn trang điểm</option>
                    <option>Giá đỡ</option>
                  </select>
                </div>
                <div className="form-group col-md-3 ">
                  <label for="exampleSelect1" className="control-label">
                    Nhà cung cấp
                  </label>
                  <select className="form-control" id="exampleSelect1">
                    <option>-- Chọn nhà cung cấp --</option>
                    <option>Phong vũ</option>
                    <option>Thế giới di động</option>
                    <option>FPT</option>
                    <option>Võ Trường</option>
                  </select>
                </div>
                <div className="form-group col-md-3">
                  <label className="control-label">Giá bán</label>
                  <input className="form-control" type="text" />
                </div>
                <div className="form-group col-md-3">
                  <label className="control-label">Giá vốn</label>
                  <input className="form-control" type="text" />
                </div>
                <div className="form-group col-md-12">
                  <label className="control-label">Mô tả sản phẩm</label>
                  <textarea
                    className="form-control"
                    name="mota"
                    id="mota"
                  ></textarea>
                </div>
                <div className="form-group col-md-12">
                  <label className="control-label">Ảnh sản phẩm</label>
                  <div id="myfileupload">
                    <input
                      type="file"
                      id="uploadfile"
                      name="ImageUpload"
                      onchange="readURL(this);"
                    />
                  </div>
                </div>
              </form>
            </div>
            <button className="btn btn-save" type="button">
              Lưu lại
            </button>
            <a className="btn btn-cancel" href="table-data-product.html">
              Hủy bỏ
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AddProduct;
