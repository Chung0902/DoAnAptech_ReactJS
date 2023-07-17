import React from "react";

const AddSuppliers = () => {
  return (
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
                  <h5>Thêm mới nhà cung cấp</h5>
                </span>
              </div>
              <div class="form-group col-md-12">
                <label class="control-label">Nhập tên nhà cung cấp</label>
                <input class="form-control" type="text" required />
              </div>
            </div>
            <button class="btn btn-save" type="button">
              Lưu lại
            </button>
            <button
              type="button"
              className="btn btn-cancel"
              data-bs-dismiss="modal"
            >
              Hủy bỏ
            </button>
          </div>
          <div class="modal-footer"></div>
        </div>
      </div>
    </div>
  );
};

export default AddSuppliers;
