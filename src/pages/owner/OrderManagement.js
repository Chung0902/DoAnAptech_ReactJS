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
              <div className="tile-body">
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
                    <th>Sản phẩm</th>
                    <th>Số lượng</th>
                    <th>Tổng tiền</th>
                    <th>Tổng cộng</th>
                    <th>Tình trạng</th>
                    <th>Tính năng</th>
                  </tr>
                </thead>
                <tbody>
                  {listorders &&
                    listorders.map((e) => (
                      <React.Fragment key={e.order._id}>
                        {/* Hiển thị thông tin khách hàng cho mỗi đơn hàng */}
                        <tr>
                          <td rowSpan={e.orderDetails.length + 1}>
                            <input type="checkbox" name="check1" value="1" />
                          </td>
                          <td rowSpan={e.orderDetails.length + 1}>
                            {e.order._id}
                          </td>
                          <td rowSpan={e.orderDetails.length + 1}>
                            {e.order.customer.firstName}{" "}
                            {e.order.customer.lastName}
                          </td>
                        </tr>
                        {/* Hiển thị thông tin sản phẩm cho mỗi đơn hàng */}
                        {e.orderDetails.map((orderDetail) => (
                          <tr key={orderDetail.productId}>
                            <td>{orderDetail.productName}</td>
                            <td>{orderDetail.quantity}</td>
                            <td>{e.totalamountdiscount} đ</td>
                            {e.orderDetails.indexOf(orderDetail) === 0 && (
                              <td
                                className="totalor"
                                rowSpan={e.orderDetails.length + 1}
                              >
                                {e.totalOrderPrice} đ
                              </td>
                            )}
                            {e.orderDetails.indexOf(orderDetail) === 0 && (
                              <td
                                className="status_or"
                                rowSpan={e.orderDetails.length + 1}
                              >
                                {e.order.status}
                              </td>
                            )}
                            {e.orderDetails.indexOf(orderDetail) === 0 && (
                              <td rowSpan={e.orderDetails.length + 1}>
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
                            )}
                          </tr>
                        ))}
                      </React.Fragment>
                    ))}
                </tbody>
              </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OrderManagement;
