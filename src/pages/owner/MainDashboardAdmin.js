import React, { useEffect, useState } from "react";
import axiosClient from "../../libraries/axiosClient";
import "../../../src/styles/main.css";
import {
  FaHouseUser,
  FaDatabase,
  FaShoppingBag,
  FaBandcamp,
} from "react-icons/fa";
import BarChart from "./dashboard/BarChart";
import PolarAreaChart from "./dashboard/PolarAreaChart";

const MainDashboardAdmin = () => {
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalorder, setTotalorder] = useState(0);
  const [totalcustomer, setTotalcustomer] = useState(0);
  const [outstock, setOutstock] = useState(0);
  const [employees, setEmployees] = useState([]);

  //tổng sản phẩm
  const getGrossProduct = async () => {
    try {
      const response = await axiosClient.get("questions/grossproduct");
      if (response && response.payload) {
        // Lấy độ dài của mảng sản phẩm để tính tổng số sản phẩm
        const totalProducts = response.payload.length;
        setTotalProducts(totalProducts);
      }
    } catch (error) {
      console.error(error);
    }
  };

   //tổng đơn hàng
   const getTotalOrder = async () => {
    try {
      const response = await axiosClient.get("questions/totalorder");
      if (response && response.payload) {
        const totalorder = response.payload.length;
        setTotalorder(totalorder);
      }
    } catch (error) {
      console.error(error);
    }
  };

    //tổng khách hàng
    const getTotalcustomer = async () => {
      try {
        const response = await axiosClient.get("questions/totalcustomer");
        if (response && response.payload) {
          const totalcustomer = response.payload.length;
          setTotalcustomer(totalcustomer);
        }
      } catch (error) {
        console.error(error);
      }
    };

     //tổng sản phẩm sắp hết hàng
  const getOutStock = async () => {
    try {
      const response = await axiosClient.get("questions/outstock1");
      if (response && response.totalOutstock !== undefined) {
        const outstock = parseFloat(response.totalOutstock);
        setOutstock(outstock);
      }
    } catch (error) {
      console.error(error);
    }
  };

   //hiển thị danh sách nhân viên mới
   const getNewEmployees = async () => {
    try {
      const response = await axiosClient.get("questions/countNewEmployees");
      setEmployees(response.newEmployees);
    } catch (error) {
      console.error(error);
    }
  };


  useEffect(() => {
    getGrossProduct();
    getTotalOrder();
    getTotalcustomer();
    getOutStock();
    getNewEmployees();
  }, []);
  
  return (
    <main className="app-content">
      <div className="row">
        <div className="col-md-12">
          <div className="app-title">
            <ul className="app-breadcrumb breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">
                  <b>Bảng điều khiển</b>
                </a>
              </li>
            </ul>
            <div id="clock"></div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-lg-6">
          <div className="row">
            <div className="col-md-6">
              <div className="widget-small primary coloured-icon">
                <div className="iicon">
                  <i className="icon">
                    <FaHouseUser />
                  </i>
                </div>
                <div className="info">
                  <h4>Tổng khách hàng</h4>
                  <p>
                    <b>{totalcustomer} khách hàng</b>
                  </p>
                  <p className="info-tong">Tổng số khách hàng được quản lý.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="widget-small info coloured-icon">
                <div className="iicon">
                  <i className="icon">
                    <FaDatabase />
                  </i>
                </div>
                <div className="info">
                  <h4>Tổng sản phẩm</h4>
                  <p>
                    <b>{totalProducts} sản phẩm</b>
                  </p>
                  <p className="info-tong">Tổng số sản phẩm được quản lý.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="widget-small warning coloured-icon">
                <div className="iicon">
                  <i className="icon">
                    <FaShoppingBag />
                  </i>
                </div>
                <div className="info">
                  <h4>Tổng đơn hàng</h4>
                  <p>
                    <b>{totalorder} đơn hàng</b>
                  </p>
                  <p className="info-tong">
                    Tổng số hóa đơn bán hàng trong tháng.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="widget-small danger coloured-icon">
                <div className="iicon">
                  <i className="icon">
                    <FaBandcamp />
                  </i>
                </div>
                <div className="info">
                  <h4>Sắp hết hàng</h4>
                  <p>
                    <b>{outstock} sản phẩm</b>
                  </p>
                  <p className="info-tong">
                    Số sản phẩm cảnh báo hết cần nhập thêm.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="tile">
                <h3 className="tile-title">Tình trạng đơn hàng</h3>
                <div>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>ID đơn hàng</th>
                        <th>Tên khách hàng</th>
                        <th>Tổng tiền</th>
                        <th>Trạng thái</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>AL3947</td>
                        <td>Phạm Thị Ngọc</td>
                        <td>19.770.000 đ</td>
                        <td>
                          <span className="badge bg-info">Chờ xử lý</span>
                        </td>
                      </tr>
                      <tr>
                        <td>ER3835</td>
                        <td>Nguyễn Thị Mỹ Yến</td>
                        <td>16.770.000 đ</td>
                        <td>
                          <span className="badge bg-warning">
                            Đang vận chuyển
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>MD0837</td>
                        <td>Triệu Thanh Phú</td>
                        <td>9.400.000 đ</td>
                        <td>
                          <span className="badge bg-success">
                            Đã hoàn thành
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>MT9835</td>
                        <td>Đặng Hoàng Phúc </td>
                        <td>40.650.000 đ</td>
                        <td>
                          <span className="badge bg-danger">Đã hủy </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="tile">
                <h3 className="tile-title">Khách hàng mới</h3>
                <div>
                  <table className="table table-bordered">
                  <thead>
                  <tr>
                    <th>Họ và tên</th>
                    <th>Địa chỉ</th>
                    <th>SĐT</th>
                  </tr>
                </thead>
                <tbody>
                  {employees &&
                    employees.map((e) => (
                      <tr key={e._id}>
                        <td>
                          {e.firstName }
                          {e.lastName }
                        </td>
                        <td>{e.address} </td>
                        <td>{e.phoneNumber}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 col-lg-6">
          <div className="row">
            <div className="col-md-12">
              <div className="tile">
                <h3 className="tile-title">Dữ liệu 5 tháng đầu vào</h3>
                <div className="embed-responsive embed-responsive-16by9">
                  <PolarAreaChart />
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="tile">
                <h3 className="tile-title">Thống kê 7 tháng doanh thu</h3>
                <div className="embed-responsive embed-responsive-16by9">
                  <BarChart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainDashboardAdmin;
