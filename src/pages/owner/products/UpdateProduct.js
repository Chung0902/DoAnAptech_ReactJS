import React from "react";

const UpdateProduct = () => {
  return (
    <div
      className="modal fade"
      id="ModalUP"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
      data-backdrop="static"
      data-keyboard="false"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-body">
            <div className="row">
              <div className="form-group  col-md-12">
                <span className="thong-tin-thanh-toan">
                  <h5>Chỉnh sửa thông tin sản phẩm cơ bản</h5>
                </span>
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                <label className="control-label">Mã sản phẩm </label>
                <input className="form-control" type="number" value="71309005" />
              </div>
              <div className="form-group col-md-6">
                <label className="control-label">Tên sản phẩm</label>
                <input
                  className="form-control"
                  type="text"
                  required
                  value="Bàn ăn gỗ Theresa"
                />
              </div>
              <div className="form-group  col-md-6">
                <label className="control-label">Số lượng</label>
                <input className="form-control" type="number" required value="20" />
              </div>
              <div className="form-group col-md-6 ">
                <label for="exampleSelect1" className="control-label">
                  Tình trạng sản phẩm
                </label>
                <select className="form-control" id="exampleSelect1">
                  <option>Còn hàng</option>
                  <option>Hết hàng</option>
                  <option>Đang nhập hàng</option>
                </select>
              </div>
              <div className="form-group col-md-6">
                <label className="control-label">Giá bán</label>
                <input className="form-control" type="text" value="5.600.000" />
              </div>
              <div className="form-group col-md-6">
                <label for="exampleSelect1" className="control-label">
                  Danh mục
                </label>
                <select className="form-control" id="exampleSelect1">
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
            </div>

            <button className="btn btn-save" type="button">
              Lưu lại
            </button>
            <a className="btn btn-cancel" data-dismiss="modal" href="#">
              Hủy bỏ
            </a>
          </div>
          <div className="modal-footer"></div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
