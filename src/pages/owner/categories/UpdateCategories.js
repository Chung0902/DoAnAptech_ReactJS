import React from 'react'

const UpdateCategories = () => {
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
                <h5>Cập nhật danh mục sản phẩm</h5>
              </span>
            </div>
            <div className="form-group col-md-12">
              <label className="control-label">Nhập tên danh mục sản phẩm</label>
              <input className="form-control" type="text" required placeholder='Sửa rửa mặt'/>
            </div>
          </div>
          <button className="btn btn-save" type="button">
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
        <div className="modal-footer"></div>
      </div>
    </div>
  </div>
  )
}

export default UpdateCategories