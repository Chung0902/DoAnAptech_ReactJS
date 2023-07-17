import React from 'react';

const UpdateEmployee = () => {

  return (
    <div>
      <button className="btn btn-primary btn-sm edit" type="button" title="Sửa" >
        <i className="fas fa-edit"></i>
      </button>
        <div className="modal fade" id="ModalUP" tabIndex="-1" role="dialog" aria-hidden="true" data-backdrop="static" data-keyboard="false">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <div className="row">
                  <div className="form-group col-md-12">
                    <span className="thong-tin-thanh-toan">
                      <h5>Chỉnh sửa thông tin nhân viên cơ bản</h5>
                    </span>
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-6">
                    <label className="control-label">ID nhân viên</label>
                    <input className="form-control" type="text" required value="#CD2187" disabled />
                  </div>
                  <div className="form-group col-md-6">
                    <label className="control-label">Họ và tên</label>
                    <input className="form-control" type="text" required value="Võ Trường" />
                  </div>
                  <div className="form-group col-md-6">
                    <label className="control-label">Số điện thoại</label>
                    <input className="form-control" type="number" required value="09267312388" />
                  </div>
                  <div className="form-group col-md-6">
                    <label className="control-label">Địa chỉ email</label>
                    <input className="form-control" type="text" required value="truong.vd2000@gmail.com" />
                  </div>
                  <div className="form-group col-md-6">
                    <label className="control-label">Ngày sinh</label>
                    <input className="form-control" type="date" value="15/03/2000" />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="exampleSelect1" className="control-label">Chức vụ</label>
                    <select className="form-control" id="exampleSelect1">
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
                <button className="btn btn-save" type="button">Lưu lại</button>
                <button className="btn btn-cancel" type="button" >Hủy bỏ</button>
              </div>
              <div className="modal-footer">
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default UpdateEmployee;