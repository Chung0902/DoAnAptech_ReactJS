import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import axiosClient from "../../libraries/axiosClient";
import { useAuth } from "../../context/auth";

const OrderManagement = () => {
  const [listorders, setListorders] = useState([]);
  const [checkedItems, setCheckedItems] = useState({});
  const [auth, setAuth] = useAuth();
  const [status, setStatus] = useState("");

  const handleItemCheck = (event, orderID) => {
    const isChecked = event.target.checked;
    setCheckedItems({
      ...checkedItems,
      [orderID]: isChecked,
    });
  };

  const handleSelectAll = (event) => {
    const isChecked = event.target.checked;
    const newCheckedItems = {};

    listorders.forEach((order) => {
      newCheckedItems[order._id] = isChecked;
    });

    setCheckedItems(newCheckedItems);
  };

  const handleDeleteSelected = async () => {
    const selectedIds = Object.keys(checkedItems).filter(
      (itemId) => checkedItems[itemId]
    );

    try {
      await axiosClient.post("admin/orders/delete", { selectedIds });
      setCheckedItems({});
      setListorders(
        listorders.filter((order) => !selectedIds.includes(order.order._id))
      );
      toast.success("Đã xóa sản phẩm");
    } catch (error) {
      console.error(error);
      toast.error("Có lỗi xảy ra khi xóa sản phẩm");
    }
  };

  const updateCancel = async (orderId, employeeId, paymentType, customerId) => {
    try {
      const response = await axiosClient.patch(`admin/orders/${orderId}`, {
        status: "CANCELED",
        employeeId,
        paymentType,
        customerId,
      });
      setListorders((prevList) =>
        prevList.map((order) => {
          if (order.order._id === orderId) {
            return {
              ...order,
              order: {
                ...order.order,
                status: "CANCELED",
                employeeId,
                paymentType,
                customerId,
              },
            };
          }
          return order;
        })
      );
    } catch (error) {
      console.error(error);
    }
  };

  const updateOrder = async (orderId, employeeId, paymentType, customerId) => {
    try {
      const response = await axiosClient.patch(`admin/orders/${orderId}`, {
        status: "DELIVERING",
        employeeId,
        paymentType,
        customerId,
      });
      setListorders((prevList) =>
        prevList.map((order) => {
          if (order.order._id === orderId) {
            return {
              ...order,
              order: {
                ...order.order,
                status: "DELIVERING",
                employeeId,
                paymentType,
                customerId,
              },
            };
          }
          return order;
        })
      );
    } catch (error) {
      console.error(error);
    }
  };

  const getlistorders = async () => {
    try {
      const response = await axiosClient.get(
        `questions/listorders?status=${status}`
      );
      setListorders(response.payload);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getlistorders();
  }, [status]);

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
              <div className="tile-body">
                <table
                  className="table table-hover table-bordered"
                  id="sampleTable"
                >
                  <thead>
                    <tr>
                      <th>ID đơn hàng</th>
                      <th>Khách hàng</th>
                      <th>Sản phẩm</th>
                      <th>SL</th>
                      <th>Tổng cộng</th>
                      <th>PTTT</th>
                      <th>
                        <select
                          className="border-0 bg-secondary-subtle fw-semibold"
                          value={status}
                          onChange={(e) => setStatus(e.target.value)}
                        >
                          <option value="">Tình trạng</option>
                          <option value="COMPLETED">COMPLETED</option>
                          <option value="WAITING">WAITING</option>
                          <option value="CANCELED">CANCELED</option>
                          <option value="DELIVERING">DELIVERING</option>
                        </select>
                      </th>
                      <th>Tính_năng</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listorders &&
                      listorders.map((e) => (
                        <React.Fragment key={e.order._id}>
                          <tr>
                            <td rowSpan={e.orderDetails.length + 1}>
                              {e.order._id}
                            </td>
                            <td rowSpan={e.orderDetails.length + 1}>
                              {e.order.customer.firstName}{" "}
                              {e.order.customer.lastName}
                            </td>
                          </tr>
                          {e.orderDetails.map((orderDetail, index) => (
                            <tr key={index}>
                              <td>{orderDetail.productName}</td>
                              <td>{orderDetail.quantity}</td>
                              {index === 0 && (
                                <>
                                  <td
                                    className="totalor"
                                    rowSpan={e.orderDetails.length + 1}
                                  >
                                    {e.totalOrderPrice} đ
                                  </td>
                                  <td
                                    className="status_or"
                                    rowSpan={e.orderDetails.length + 1}
                                  >
                                    {e.order.paymentType}
                                  </td>
                                  <td
                                    className="status_or"
                                    rowSpan={e.orderDetails.length + 1}
                                  >
                                    {e.order.status}
                                  </td>
                                  <td rowSpan={e.orderDetails.length + 1}>
                                    <button
                                      className="btn btn-primary btn-sm edit btn-font"
                                      type="button"
                                      title="Duyệt"
                                      onClick={() =>
                                        updateOrder(
                                          e.order._id,
                                          auth.user._id,
                                          e.order.paymentType,
                                          e.order.customer._id
                                        )
                                      }
                                      disabled={
                                        e.order.status === "COMPLETED" ||
                                        e.order.status === "CANCELED" ||
                                        e.order.status === "DELIVERING"
                                      }
                                    >
                                      <i className="fas fa-edit icon"></i>
                                    </button>
                                    <button
                                      className="btn btn-cancel btn-sm edit btn-font"
                                      type="button"
                                      title="Từ chối"
                                      onClick={() =>
                                        updateCancel(
                                          e.order._id,
                                          auth.user._id,
                                          e.order.paymentType,
                                          e.order.customer._id
                                        )
                                      }
                                      disabled={
                                        e.order.status === "COMPLETED" ||
                                        e.order.status === "CANCELED"
                                      }
                                    >
                                      <i className="fas fa-edit icon"></i>
                                    </button>
                                    <button
                                      className="btn btn-cancel btn-sm edit btn-font"
                                      type="button"
                                      title="Duyệt hoàn thành"
                                      disabled={e.order.status === "DELIVERING"}
                                    >
                                      <i className="fas fa-edit icon"></i>
                                    </button>
                                  </td>
                                </>
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
