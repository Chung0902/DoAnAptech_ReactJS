import React from "react";

const AddCategories = () => {
  return (
    <div
      class="modal fade"
      id="adddanhmuc"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      data-backdrop="static"
      data-keyboard="false"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <div class="row">
              <div class="form-group  col-md-12">
                <span class="thong-tin-thanh-toan">
                  <h5>Thêm mới danh mục </h5>
                </span>
              </div>
              <div class="form-group col-md-12">
                <label class="control-label">Nhập tên danh mục mới</label>
                <input class="form-control" type="text" required />
              </div>
              <div class="form-group col-md-12">
                <label class="control-label">
                  Danh mục sản phẩm hiện đang có
                </label>
                <ul class="adulc">
                  <li>Son môi</li>
                  <li>Tonner</li>
                  <li>Kem chống nắng</li>
                  <li>Nước hoa</li>
                  <li>Kem dưỡng thể</li>
                  <li>Tẩy trang</li>
                </ul>
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

export default AddCategories;
