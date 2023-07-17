import React from "react";

const UpdateCustomer = () => {
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
                    <h5>Chỉnh sửa thông tin khách hàng cơ bản</h5>
                  </span>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6">
                  <label class="control-label">ID khách hàng</label>
                  <input
                    class="form-control"
                    type="text"
                    required
                    value="#CD2187"
                    disabled
                  />
                </div>
                <div class="form-group col-md-6">
                  <label class="control-label">Họ và tên</label>
                  <input
                    class="form-control"
                    type="text"
                    required
                    value="Nguyễn Thị Chung"
                  />
                </div>
                <div class="form-group  col-md-6">
                  <label class="control-label">Số điện thoại</label>
                  <input
                    class="form-control"
                    type="number"
                    required
                    value="09267312388"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label class="control-label">Địa chỉ email</label>
                  <input
                    class="form-control"
                    type="text"
                    required
                    value="chung@gmail.com"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label class="control-label">Ngày sinh</label>
                  <input class="form-control" type="date" value="13/09/2002" />
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

export default UpdateCustomer;
