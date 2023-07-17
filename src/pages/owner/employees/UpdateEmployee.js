import React from "react";

const UpdateEmployee = () => {
  return (
    <div>
       <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">

        <div class="modal-body">
          <div class="row">
            <div class="form-group  col-md-12">
              <span class="thong-tin-thanh-toan">
                <h5>Chỉnh sửa thông tin nhân viên cơ bản</h5>
              </span>
            </div>
          </div>
          <div class="row">
            <div class="form-group col-md-6">
              <label class="control-label">ID nhân viên</label>
              <input class="form-control" type="text" required value="#CD2187" disabled/>
            </div>
            <div class="form-group col-md-6">
              <label class="control-label">Họ và tên</label>
              <input class="form-control" type="text" required value="Võ Trường"/>
            </div>
            <div class="form-group  col-md-6">
              <label class="control-label">Số điện thoại</label>
              <input class="form-control" type="number" required value="09267312388"/>
            </div>
            <div class="form-group col-md-6">
              <label class="control-label">Địa chỉ email</label>
              <input class="form-control" type="text" required value="truong.vd2000@gmail.com"/>
            </div>
            <div class="form-group col-md-6">
              <label class="control-label">Ngày sinh</label>
              <input class="form-control" type="date" value="15/03/2000"/>
            </div>
            <div class="form-group  col-md-6">
              <label for="exampleSelect1" class="control-label">Chức vụ</label>
              <select class="form-control" id="exampleSelect1">
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
          </div>
        </div>
        <div className="modal-footer">
            <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
            >
            Hủy
            </button>
            <button type="button" className="btn btn-primary">
            Cập nhật
            </button>
        </div>
      </div>
    </div>
  </div>
     </div>
  );
};

export default UpdateEmployee;
