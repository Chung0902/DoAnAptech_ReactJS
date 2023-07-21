import React from "react";
import {
  FaHospitalUser,
  FaBandcamp,
  FaFirstOrderAlt,
  FaUserAltSlash,
  FaRegMoneyBillAlt,
  FaUserCheck,
  FaTimesCircle,
  FaCalendarDay,
} from "react-icons/fa";

const RevenueManagement = () => {
  return (
    <main className="app-content">
      <div className="row">
        <div className="col-md-12">
          <div className="app-title">
            <ul className="app-breadcrumb breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">
                  <b>Báo cáo doanh thu </b>
                </a>
              </li>
            </ul>
            <div id="clock"></div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 col-lg-3">
          <div className="widget-small primary coloured-icon">
            <div className="iicon ">
              <i className="icon ">
                <FaHospitalUser />
              </i>
            </div>
            <div className="info">
              <h4>Tổng Nhân viên</h4>
              <p>
                <b>26 nhân viên</b>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-lg-3">
          <div className="widget-small info coloured-icon">
            <div className="iicon ">
              <i className="icon ">
                <FaBandcamp />
              </i>
            </div>
            <div className="info">
              <h4>Tổng sản phẩm</h4>
              <p>
                <b>8580 sản phẩm</b>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-lg-3">
          <div className="widget-small warning coloured-icon">
            <div className="iicon ">
              <i className="icon ">
                <FaFirstOrderAlt />
              </i>
            </div>

            <div className="info">
              <h4>Tổng đơn hàng</h4>
              <p>
                <b>457 đơn hàng</b>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-lg-3">
          <div className="widget-small danger coloured-icon">
            <div className="iicon ">
              <i className="icon ">
                <FaUserAltSlash />
              </i>
            </div>

            <div className="info">
              <h4>Bị cấm</h4>
              <p>
                <b>4 nhân viên</b>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 col-lg-3">
          <div className="widget-small primary coloured-icon">
            <div className="iicon ">
              <i className="icon ">
                <FaRegMoneyBillAlt />
              </i>
            </div>

            <div className="info">
              <h4>Tổng thu nhập</h4>
              <p>
                <b>104.890.000 đ</b>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-lg-3">
          <div className="widget-small info coloured-icon">
            <div className="iicon ">
              <i className="icon ">
                <FaUserCheck />
              </i>
            </div>

            <div className="info">
              <h4>Nhân viên mới</h4>
              <p>
                <b>3 nhân viên</b>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-lg-3">
          <div className="widget-small warning coloured-icon">
            <div className="iicon ">
              <i className="icon ">
                <FaTimesCircle />
              </i>
            </div>

            <div className="info">
              <h4>Hết hàng</h4>
              <p>
                <b>1 sản phẩm</b>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-lg-3">
          <div className="widget-small danger coloured-icon">
            <div className="iicon ">
              <i className="icon ">
                <FaCalendarDay />
              </i>
            </div>

            <div className="info">
              <h4>Đơn hàng hủy</h4>
              <p>
                <b>2 đơn hàng</b>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="tile">
            <div>
              <h3 className="tile-title">SẢN PHẨM BÁN CHẠY</h3>
            </div>
            <div className="tile-body">
              <table
                className="table table-hover table-bordered"
                id="sampleTable"
              >
                <thead>
                  <tr>
                    <th>Mã sản phẩm</th>
                    <th>Tên sản phẩm</th>
                    <th>Giá tiền</th>
                    <th>Danh mục</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>71309005</td>
                    <td>Bàn ăn gỗ Theresa</td>
                    <td>5.600.000 đ</td>
                    <td>Bàn ăn</td>
                  </tr>
                  <tr>
                    <td>62304003</td>
                    <td>Bàn ăn Vitali mặt đá</td>
                    <td>33.235.000 đ</td>
                    <td>Bàn ăn</td>
                  </tr>
                  <tr>
                    <td>72109004</td>
                    <td>Ghế làm việc Zuno</td>
                    <td>3.800.000 đ</td>
                    <td>Ghế gỗ</td>
                  </tr>
                  <tr>
                    <td>83826226</td>
                    <td>Tủ ly - tủ bát</td>
                    <td>2.450.000 đ</td>
                    <td>Tủ</td>
                  </tr>
                  <tr>
                    <td>71304041</td>
                    <td>Bàn ăn mở rộng Vegas</td>
                    <td>21.550.000 đ</td>
                    <td>Bàn thông minh</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="tile">
            <div>
              <h3 className="tile-title">TỔNG ĐƠN HÀNG</h3>
            </div>
            <div className="tile-body">
              <table
                className="table table-hover table-bordered"
                id="sampleTable"
              >
                <thead>
                  <tr>
                    <th>ID đơn hàng</th>
                    <th>Khách hàng</th>
                    <th>Đơn hàng</th>
                    <th>Số lượng</th>
                    <th>Tổng tiền</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>MD0837</td>
                    <td>Triệu Thanh Phú</td>
                    <td>Ghế làm việc Zuno, Bàn ăn gỗ Theresa</td>
                    <td>2 sản phẩm</td>
                    <td>9.400.000 đ</td>
                  </tr>
                  <tr>
                    <td>MĐ8265</td>
                    <td>Nguyễn Thị Ngọc Cẩm</td>
                    <td>Ghế ăn gỗ Lucy màu trắng</td>
                    <td>1 sản phẩm</td>
                    <td>3.800.000 đ</td>
                  </tr>
                  <tr>
                    <td>MT9835</td>
                    <td>Đặng Hoàng Phúc</td>
                    <td>
                      Giường ngủ Jimmy, Bàn ăn mở rộng cao cấp Dolas, Ghế làm
                      việc Zuno
                    </td>
                    <td>3 sản phẩm</td>
                    <td>40.650.000 đ</td>
                  </tr>
                  <tr>
                    <td>ER3835</td>
                    <td>Nguyễn Thị Mỹ Yến</td>
                    <td>Bàn ăn mở rộng Gepa</td>
                    <td>1 sản phẩm</td>
                    <td>16.770.000 đ</td>
                  </tr>
                  <tr>
                    <td>AL3947</td>
                    <td>Phạm Thị Ngọc</td>
                    <td>Bàn ăn Vitali mặt đá, Ghế ăn gỗ Lucy màu trắng</td>
                    <td>2 sản phẩm</td>
                    <td>19.770.000 đ</td>
                  </tr>
                  <tr>
                    <td>QY8723</td>
                    <td>Ngô Thái An</td>
                    <td>Giường ngủ Kara 1.6x2m</td>
                    <td>1 sản phẩm</td>
                    <td>14.500.000 đ</td>
                  </tr>
                  <tr>
                    <th colspan="4">Tổng cộng:</th>
                    <td>104.890.000 đ</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="tile">
            <div>
              <h3 className="tile-title">SẢN PHẨM ĐÃ HẾT</h3>
            </div>
            <div className="tile-body">
              <table
                className="table table-hover table-bordered"
                id="sampleTable"
              >
                <thead>
                  <tr>
                    <th>Mã sản phẩm</th>
                    <th>Tên sản phẩm</th>
                    <th>Ảnh</th>
                    <th>Số lượng</th>
                    <th>Tình trạng</th>
                    <th>Giá tiền</th>
                    <th>Danh mục</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>83826226</td>
                    <td>Tủ ly - tủ bát</td>
                    <td>
                      <img src="/img-sanpham/tu.jpg" alt="" width="100px;" />
                    </td>
                    <td>0</td>
                    <td>
                      <span className="badge bg-danger">Hết hàng</span>
                    </td>
                    <td>2.450.000 đ</td>
                    <td>Tủ</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="tile">
            <div>
              <h3 className="tile-title">NHÂN VIÊN MỚI</h3>
            </div>
            <div className="tile-body">
              <table
                className="table table-hover table-bordered"
                id="sampleTable"
              >
                <thead>
                  <tr>
                    <th>Họ và tên</th>
                    <th>Địa chỉ</th>
                    <th>Ngày sinh</th>
                    <th>Giới tính</th>
                    <th>SĐT</th>
                    <th>Chức vụ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Hồ Thị Thanh Ngân</td>
                    <td>155-157 Trần Quốc Thảo, Quận 3, Hồ Chí Minh </td>
                    <td>12/02/1999</td>
                    <td>Nữ</td>
                    <td>0926737168</td>
                    <td>Bán hàng</td>
                  </tr>
                  <tr>
                    <td>Trần Khả Ái</td>
                    <td>6 Nguyễn Lương Bằng, Tân Phú, Quận 7, Hồ Chí Minh</td>
                    <td>22/12/1999</td>
                    <td>Nữ</td>
                    <td>0931342432</td>
                    <td>Bán hàng</td>
                  </tr>
                  <tr>
                    <td>Nguyễn Đặng Trọng Nhân</td>
                    <td>59C Nguyễn Đình Chiểu, Quận 3, Hồ Chí Minh </td>
                    <td>23/07/1996</td>
                    <td>Nam</td>
                    <td>0846881155</td>
                    <td>Dịch vụ</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="tile">
            <h3 className="tile-title">DỮ LIỆU HÀNG THÁNG</h3>
            <div className="embed-responsive embed-responsive-16by9">
              <canvas
                className="embed-responsive-item"
                id="lineChartDemo"
              ></canvas>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="tile">
            <h3 className="tile-title">THỐNG KÊ DOANH SỐ</h3>
            <div className="embed-responsive embed-responsive-16by9">
              <canvas
                className="embed-responsive-item"
                id="barChartDemo"
              ></canvas>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RevenueManagement;