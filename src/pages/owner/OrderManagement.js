import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axiosClient from "../../libraries/axiosClient";
import BrowsOrder from "./orders/BrowsOrder";

const OrderManagement = () => {
  const [listorders, setListorders] = useState([]);

  //hiển thị danh sách đơn hàng
  const getlistorders = async () => {
    try {
      const response = await axiosClient.get("questions/listorders");
      setListorders(response.payload);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getlistorders();
  }, []);

  return (
    <main className="app-content">
      <div className="app-title">
        <ul className="app-breadcrumb breadcrumb side">
          <li className="breadcrumb-item active">
            <a href="#">
              <b>Danh sách đơn hàng</b>
            </a>
          </li>
        </ul>
        <div id="clock"></div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="tile">
            <div className="tile-body">
              <div className="row element-button">
                <div className="col-sm-2">
                  <a
                    className="btn btn-delete btn-sm"
                    type="button"
                    title="Xóa"
                    onclick="myFunction(this)"
                  >
                    <i className="fas fa-trash-alt"></i> Xóa tất cả{" "}
                  </a>
                </div>
              </div>
              <table
                className="table table-hover table-bordered"
                id="sampleTable"
              >
                <thead>
                  <tr>
                    <th width="10">
                      <input type="checkbox" id="all" />
                    </th>
                    <th>ID đơn hàng</th>
                    <th>Khách hàng</th>
                    <th>Đơn hàng</th>
                    <th>Số lượng</th>
                    <th>Tổng tiền</th>
                    <th>Tình trạng</th>
                    <th>Tính năng</th>
                  </tr>
                </thead>
                {listorders &&
                  listorders.map((e) => (
                    <tbody key={e.order._id}>
                      {e.orderDetails.map((orderDetail) => (
                        <tr key={orderDetail.productId}>
                          <td width="10">
                            <input type="checkbox" name="check1" value="1" />
                          </td>
                          <td>{orderDetail.productId}</td>
                          <td>
                            {e.order.customer.firstName}
                            {e.order.customer.lastName}
                          </td>
                          <td>{orderDetail.productName}</td>
                          <td>{orderDetail.quantity}</td>
                          <td>{orderDetail.totalOrderDetailPrice} đ</td>
                          <td>{e.order.status}</td>
                          <td>
                            <button
                              className="btn btn-primary btn-sm trash"
                              type="button"
                              title="Xóa"
                            >
                              <i className="fas fa-trash-alt"></i>{" "}
                            </button>
                            <button
                              className="btn btn-primary btn-sm edit"
                              type="button"
                              title="Duyệt"
                              id="show-emp"
                              data-bs-toggle="modal"
                              data-bs-target="#ModalUP"
                            >
                              <i className="fas fa-edit"></i>
                              <BrowsOrder />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OrderManagement;
