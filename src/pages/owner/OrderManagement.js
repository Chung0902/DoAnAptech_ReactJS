import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axiosClient from "../../libraries/axiosClient";
import BrowsOrder from "./orders/BrowsOrder";
import { useAuth } from "../../context/auth";
import { toBeEnabled } from "@testing-library/jest-dom/matchers";
import { toast } from "react-hot-toast";

const OrderManagement = () => {
  const [listorders, setListorders] = useState([]);
  const [checkedItems, setCheckedItems] = useState({});
  const [auth, setAuth] = useAuth();
  const [status,setStatus]= useState('')

  //xử lý chọn vào checkbox lấy id
  const handleItemCheck = (event, orderID) => {
    const isChecked = event.target.checked;
    setCheckedItems({
      ...checkedItems,
      [orderID]: isChecked,
    });
  };

  // xử lý nhấn chọn tất cả checkbox
  const handleSelectAll = (event) => {
    const isChecked = event.target.checked;
    const newCheckedItems = {};
  
    listorders.forEach((order) => {
      newCheckedItems[order._id] = isChecked;
    });
  
    setCheckedItems(newCheckedItems);
  };
  //click nút ẩn sẽ ẩn đi
  const handleDeleteSelected = async () => {
    const selectedIds = Object.keys(checkedItems).filter(
      (itemId) => checkedItems[itemId]
    );
  
    try {
      //await axiosClient.post(`admin/products/${selectedIds.join(',')}/delete`);
      await axiosClient.post('admin/orders/delete', {selectedIds});
      setCheckedItems({});
      setListorders(listorders.filter((order) => !selectedIds.includes(order.order._id)));
      toast.success("Đã xóa sản phẩm");
    } catch (error) {
      console.error(error);
      toast.error("Có lỗi xảy ra khi xóa sản phẩm");
    }
  };
   
   // Hàm gọi API để cập nhật trạng thái và mã nhân viên
   const updateCancel = async (orderId, employeeId, paymentType,customerId) => {
    try {
      const response = await axiosClient.patch(`admin/orders/${orderId}`, {
        status: "CANCELED",
        employeeId,
        paymentType,
        customerId
        
      });
      // Cập nhật lại danh sách đơn hàng sau khi cập nhật thành công
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
                customerId
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

  // Hàm gọi API để cập nhật trạng thái và mã nhân viên
  const updateOrder = async (orderId, employeeId, paymentType,customerId) => {
    try {
      const response = await axiosClient.patch(`admin/orders/${orderId}`, {
        status: "DELIVERING",
        employeeId,
        paymentType,
        customerId
        
      });
      // Cập nhật lại danh sách đơn hàng sau khi cập nhật thành công
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
                customerId
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
    //handleFilter();
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
                    onClick={handleDeleteSelected}
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
                        <input type="checkbox" id="all" onChange={handleSelectAll}/>
                      </th>
                      <th>ID đơn hàng</th>
                      <th>Khách hàng</th>
                      <th>Sản phẩm</th>
                      <th>Số lượng</th>
                      <th>Tổng tiền</th>
                      <th>Tổng cộng</th>
                      <th>
                        <select className="border-0 bg-secondary-subtle fw-semibold" value={status}
  onChange={(e) => setStatus(e.target.value)}>
                          <option value="">Tình trạng</option>
                          <option value="COMPLETED">COMPLETED</option>
                          <option value="WAITING">WAITING</option>
                          <option value="CANCELED">CANCELED</option>
                          <option value="DELIVERING">DELIVERING</option>
                        </select></th>
                      <th>Tính năng</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listorders &&
                      listorders.filter((e) => status === "" || e.order.status === status).map((e) => (
                        <React.Fragment key={e.order._id}>
                          {/* Hiển thị thông tin khách hàng cho mỗi đơn hàng */}
                          <tr>
                            <td rowSpan={e.orderDetails.length + 1}>
                              <input type="checkbox"  checked={checkedItems[e.order._id] || false}
  onChange={(event) => handleItemCheck(event,e.order._id)} />
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
                                    className="btn btn-primary btn-sm edit "
                                    type="button"
                                    title="Duyệt"
                                    onClick={() =>
                                      updateOrder(e.order._id, auth.user._id,e.order.paymentType,e.order.customer._id)
                                    }
                                    disabled={e.order.status === 'COMPLETED' || e.order.status === 'CANCELED' || e.order.status === 'DELIVERING'}
                                  >
                                    <i className="fas fa-edit"></i>
                                  </button>
                                  <button
                                    className="btn btn-cancel btn-sm edit "
                                    type="button"
                                    title="Từ chối"
                                    onClick={() =>
                                      updateCancel(e.order._id, auth.user._id,e.order.paymentType,e.order.customer._id)
                                    }
                                    disabled={e.order.status === 'COMPLETED' || e.order.status === 'CANCELED'}
                                  >
                                    <i className="fas fa-edit"></i>
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
