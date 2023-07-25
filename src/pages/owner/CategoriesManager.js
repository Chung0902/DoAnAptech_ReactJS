import React, { useEffect, useState } from "react";
import UpdateCategories from "./categories/UpdateCategories";
import axiosClient from "../../libraries/axiosClient";
import { toast } from "react-hot-toast";

const CategoriesManager = () => {
  const [categories,setCategories]= useState();
  
  const [name,setName] = useState("")
  const [visible,setVisible]= useState(false)
  const [selected,setSelected] = useState(null)
  const [updateName,setUpdateName] = useState("")
  //handle Form
  const handleSubmit = async (e) =>{
    e.preventDefault();
    try {
      const { response } = await axiosClient.post("admin/categories", { name });
      if (response?.payload) {
        toast.success(response.message);
        setName(response.payload);
        getAllCategories();
      } 
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in input form");
    }
  };


  const getAllCategories = async () => {
    try {
      const response = await axiosClient.get('admin/categories');
      setCategories(response.payload);
      
    } catch (error) {
      console.error(error);
    }
  };

    useEffect(() =>{
      getAllCategories();
    },[]);
//update category
const handleUpdate = async (e) =>{
  e.preventDefault();
  try {
      const {data} = await axiosClient.patch(`admin/categories/${selected._id}`, {name: updateName});
      if(data.success){
          toast.success(`${updateName} is updated`);
          setSelected(null);
          setUpdateName("");
          getAllCategories();
      }

  } catch (error) {
      toast.error('Something went wrong')
  }
};


    //Delete category
    const handleDelete = async (pId) =>{
      try {
          const {response} = await axiosClient.delete(`admin/categories/${pId}`);
          if(response.success){
              toast.success(`category is deleted`);
              getAllCategories();
          }
          
      } catch (error) {
          toast.error('Something went wrong')
      }
  };
  return (
    <div className="maincate">
      <div className="col-md-9">
        <h3>Quản lý danh mục sản phẩm</h3>
        <div className="p-3 w-50">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Nhập danh mục mới"
                value = {name}
                onChange={(e)=> setName(e.target.value)} 
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
              {categories && categories.map((c)=> (
              <tr key={c._id}>
                <td>{c.name}</td>
                <td>
                  <button
                    className="btn btn-primary ms-2"
                    type="button"
                    title="Cập nhật"
                    id="show-emp"
                    data-bs-toggle="modal"
                    data-bs-target="#ModalUP"
                    onClick={() => {
                      setVisible(true) ;
                      setUpdateName(c.name);
                      setSelected(c)
                      }}
                  >
                    Edit
                  </button><UpdateCategories setVisible={setVisible} value={updateName}  setValue={setUpdateName} handleSubmit={handleUpdate} />
                  {/* <button className="btn btn-primary ms-2">Edit</button> */}
                  <button className="btn btn-delete btn-dele" 
                  onClick={() => { handleDelete(c._id)}}>Delete</button>
                </td>
              </tr>))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CategoriesManager;
