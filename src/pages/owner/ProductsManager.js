import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import UpdateProduct from "./products/UpdateProduct";
import axiosClient from "../../libraries/axiosClient";

const ProductsManager = () => {
  const [products,setProducts] = useState();
  
  const getAllProducts = async () => {
    try {
      const response = await axiosClient.get('questions/grossprcate');
      setProducts(response.payload);
      
    } catch (error) {
      console.error(error);
    }
  };

    useEffect(() =>{
      getAllProducts();
    },[]);

  return (
    <main className="app-content">
      <div className="app-title">
        <ul className="app-breadcrumb breadcrumb side">
          <li className="breadcrumb-item active">
            <a href="#">
              <b>Danh sách sản phẩm</b>
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
                  <NavLink
                    to="/main/productsmanager/addproducts"
                    className="active1"
                  >
                    <a
                      className="btn btn-add btn-sm"
                      href="form-add-san-pham.html"
                      title="Thêm"
                    >
                      <i className="fas fa-plus"></i>
                      Tạo mới sản phẩm
                    </a>
                  </NavLink>
                </div>
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
                    <th>Mã sản phẩm</th>
                    <th>Tên sản phẩm</th>
                    <th>Ảnh</th>
                    <th>Số lượng</th>
                    <th>Tình trạng</th>
                    <th>Giá tiền</th>
                    <th>Danh mục</th>
                    <th>Chức năng</th>
                  </tr>
                </thead>
                <tbody>
                  {products && products.map((p)=>(
                  <tr key={p._id}>
                    <td width="10">
                      <input type="checkbox" name="check1" value="1" />
                    </td>
                    <td>{p._id}</td>
                    <td>{p.name}</td>
                    <td>
                      <img
                        src={p.photo}
                        alt=""
                        width="100px;"
                        height={"100px"}
                      />
                    </td>
                    <td>{p.stock}</td>
                    <td>
                      <span className="badge bg-success">{p.stock > 0 ? 'Còn hàng ': 'Hết hàng'}</span>
                    </td>
                    <td>{p.price} đ</td>
                    <td>{p.category}</td>
                    <td>
                      <button
                        className="btn btn-primary btn-sm trash"
                        type="button"
                        title="Xóa"
                        onclick="myFunction(this)"
                      >
                        <i className="fas fa-trash-alt"></i>
                      </button>
                      <button
                        className="btn btn-primary btn-sm edit"
                        type="button"
                        title="Sửa"
                        id="show-emp"
                        data-bs-toggle="modal"
                        data-bs-target="#ModalUP"
                      >
                        <i className="fas fa-edit"></i>
                        <UpdateProduct/>
                      </button>
                    </td>
                  </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductsManager;
