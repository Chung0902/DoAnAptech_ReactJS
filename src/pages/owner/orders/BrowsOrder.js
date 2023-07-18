import React from "react";

const BrowsOrder = () => {
  return (
    <div
      class="modal fade"
      id="ModalUP"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
      data-backdrop="static"
      data-keyboard="false"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <div class="row">
              <div class="form-group  col-md-12">
                <span class="thong-tin-thanh-toan">
                  <h5>Duyệt đơn hàng</h5>
                </span>
              </div>
            </div>
            <div class="row">
              <div class="form-group col-md-6">
                <label class="control-label">Mã đơn hàng </label>
                <p>1283920</p>
              </div>
              <div class="form-group col-md-6">
                <label class="control-label">Tên khách hàng</label>
                <p>Nguyễn Thị Chung</p>
              </div>
              <div class="form-group col-md-6">
                <label class="control-label">Đơn hàng</label>
                <p>Son 3CE</p>
              </div>
              <div class="form-group col-md-6">
                <label class="control-label">Số lượng</label>
                <p>2</p>
              </div>
              <div class="form-group col-md-6">
                <label class="control-label">Tổng tiền</label>
                <p>500000 đ</p>
              </div>
              <div class="form-group col-md-6">
                <label class="control-label">Tình trạng</label>
                <p>Đang chờ duyệt</p>
              </div>
            </div>

            <button class="btn btn-save" type="button">
              Duyệt đơn hàng
            </button>
            <button class="btn btn-save" type="button">
              Từ chối duyệt đơn hàng
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Hủy
            </button>
          </div>
          <div class="modal-footer"></div>
        </div>
      </div>
    </div>
  );
};

export default BrowsOrder;
