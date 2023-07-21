import React from "react";

const ProfileManager = () => {
  return (
    <main className="app-content">
      <div className="row">
        <div className="col-md-12">
          <div className="tile">
            <h3 className="tile-title">Thông tin cá nhân</h3>
            <div className="tile-body">
              <form className="row">
                <div className="form-group col-md-4">
                  <label className="control-label">ID nhân viên</label>
                  <input className="form-control" type="text" />
                </div>
                <div className="form-group col-md-4">
                  <label className="control-label">Họ và tên</label>
                  <input className="form-control" type="text" required />
                </div>
                <div className="form-group col-md-4">
                  <label className="control-label">Địa chỉ email</label>
                  <input className="form-control" type="text" required />
                </div>
                <div className="form-group col-md-4">
                  <label className="control-label">Địa chỉ thường trú</label>
                  <input className="form-control" type="text" required />
                </div>
                <div className="form-group  col-md-4">
                  <label className="control-label">Số điện thoại</label>
                  <input className="form-control" type="number" required />
                </div>
                <div className="form-group col-md-4">
                  <label className="control-label">Ngày sinh</label>
                  <input className="form-control" type="date" />
                </div>
                <div className="form-group  col-md-3">
                  <label className="control-label">Nơi sinh</label>
                  <input className="form-control" type="text" required />
                </div>
                <div className="form-group col-md-3">
                  <label className="control-label">Số CMND</label>
                  <input className="form-control" type="number" required />
                </div>
                <div className="form-group col-md-3">
                  <label className="control-label">Ngày cấp</label>
                  <input className="form-control" type="date" required />
                </div>
                <div className="form-group col-md-3">
                  <label className="control-label">Nơi cấp</label>
                  <input className="form-control" type="text" required />
                </div>
                <div className="form-group col-md-3">
                  <label className="control-label">Giới tính</label>
                  <select className="form-control" id="exampleSelect2" required>
                    <option>-- Chọn giới tính --</option>
                    <option>Nam</option>
                    <option>Nữ</option>
                  </select>
                </div>
              </form>

              <div className="form-group  col-md-3">
                <label for="exampleSelect1" className="control-label">
                  Chức vụ
                </label>
                <select className="form-control" id="exampleSelect1">
                  <option>-- Chọn chức vụ --</option>
                  <option>Bán hàng</option>
                  <option>Tư vấn</option>
                  <option>Dịch vụ</option>
                  <option>Thu Ngân</option>
                  <option>Quản kho</option>
                  <option>Bảo trì</option>
                  <option>Kiểm hàng</option>
                  <option>Bảo vệ</option>
                  <option>Tạp vụ</option>
                </select>
              </div>

              <div className="form-group col-md-12">
                <label className="control-label">Ảnh 3x4 nhân viên</label>
                <div id="myfileupload">
                  <input
                    type="file"
                    id="uploadfile"
                    name="ImageUpload"
                    onchange="readURL(this);"
                  />
                </div>
              </div>
            </div>
            <button className="btn btn-save" type="button">
              Lưu lại
            </button>
            <a className="btn btn-cancel" href="/doc/table-data-table.html">
              Hủy bỏ
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfileManager;
