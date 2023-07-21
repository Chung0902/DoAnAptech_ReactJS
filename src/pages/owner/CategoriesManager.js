import React from "react";
import UpdateCategories from "./categories/UpdateCategories";

const CategoriesManager = () => {
  return (
    <div className="maincate">
      <div className="col-md-9">
        <h3>Quản lý danh mục sản phẩm</h3>
        <div className="p-3 w-50">
          <form>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Nhập danh mục mới"
                value=""
              />
            </div>
            <button type="submit" className="btn btn-primary btn-submit">
              Submit
            </button>
          </form>
        </div>
        <div className="w-75">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sữa rửa mặt</td>
                <td>
                  <button
                    className="btn btn-primary ms-2"
                    type="button"
                    title="Cập nhật"
                    id="show-emp"
                    data-bs-toggle="modal"
                    data-bs-target="#ModalUP"
                  >
                    Edit
                    <UpdateCategories />
                  </button>
                  {/* <button className="btn btn-primary ms-2">Edit</button> */}
                  <button className="btn btn-delete btn-dele">Delete</button>
                </td>
              </tr>
              <tr>
                <td>Tẩy trang</td>
                <td>
                  <button
                    className="btn btn-primary ms-2"
                    type="button"
                    title="Cập nhật"
                    id="show-emp"
                    data-bs-toggle="modal"
                    data-bs-target="#ModalUP"
                  >
                    Edit
                    <UpdateCategories />
                  </button>
                  <button className="btn btn-delete btn-dele ">Delete</button>
                </td>
              </tr>
              <tr>
                <td>Toner</td>
                <td>
                  <button
                    className="btn btn-primary ms-2"
                    type="button"
                    title="Cập nhật"
                    id="show-emp"
                    data-bs-toggle="modal"
                    data-bs-target="#ModalUP"
                  >
                    Edit
                    <UpdateCategories />
                  </button>
                  <button className="btn btn-delete btn-dele ">Delete</button>
                </td>
              </tr>
              <tr>
                <td>Kem chống nắng</td>
                <td>
                  <button
                    className="btn btn-primary ms-2"
                    type="button"
                    title="Cập nhật"
                    id="show-emp"
                    data-bs-toggle="modal"
                    data-bs-target="#ModalUP"
                  >
                    Edit
                    <UpdateCategories />
                  </button>
                  <button className="btn btn-delete btn-dele ">Delete</button>
                </td>
              </tr>
              <tr>
                <td>Kem dưỡng</td>
                <td>
                  <button
                    className="btn btn-primary ms-2"
                    type="button"
                    title="Cập nhật"
                    id="show-emp"
                    data-bs-toggle="modal"
                    data-bs-target="#ModalUP"
                  >
                    Edit
                    <UpdateCategories />
                  </button>
                  <button className="btn btn-delete btn-dele ">Delete</button>
                </td>
              </tr>
              <tr>
                <td>Son</td>
                <td>
                  <button
                    className="btn btn-primary ms-2"
                    type="button"
                    title="Cập nhật"
                    id="show-emp"
                    data-bs-toggle="modal"
                    data-bs-target="#ModalUP"
                  >
                    Edit
                    <UpdateCategories />
                  </button>
                  <button className="btn btn-delete btn-dele">Delete</button>
                </td>
              </tr>
              <tr>
                <td>Dưỡng thể</td>
                <td>
                  <button
                    className="btn btn-primary ms-2"
                    type="button"
                    title="Cập nhật"
                    id="show-emp"
                    data-bs-toggle="modal"
                    data-bs-target="#ModalUP"
                  >
                    Edit
                    <UpdateCategories />
                  </button>
                  <button className="btn btn-delete btn-dele">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CategoriesManager;
