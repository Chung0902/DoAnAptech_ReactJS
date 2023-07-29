import React, {useState} from 'react'
import "../../../src/styles/main.css"
import { NavLink } from 'react-router-dom';
import UpdateEmployee from './employees/UpdateEmployee';
import axiosClient from '../../libraries/axiosClient';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useAuth } from '../../context/auth';


const EmployeeManager = () => {
  const [employees, setEmployees] = useState([]);
  const [firstName,setFirstName] = useState();
  const [birthday,setBirthday]= useState();
  const [address,setAddress] = useState();
  const [lastName,setLastName] = useState();
  const [phoneNumber,setPhoneNumber]= useState();
  const [email,setEmail] = useState();
  const [sex,setSex]= useState();
  const [role,setRole] = useState();
  const [question,setQuestion] = useState();
  const [password,setPassword] = useState ();
  const [visible,setVisible]= useState(false)
  const [selected,setSelected] = useState(null)
  const [updateFirstName, setUpdateFirstName] = useState();
  const [updateLastName, setUpdateLastName] = useState();
  const [updatePhoneNumber, setUpdatePhoneNumber] = useState();
  const [updateEmail, setUpdateEmail] = useState();
  const [updateAddress, setUpdateAddress] = useState();
  const [auth, setAuth] = useAuth();

  const handleRoleChange = (event) => {
    const selectedRole = event.target.value;
    let roleCode;

    if (selectedRole === 'Bán hàng') {
      roleCode = 0;
    } else if (selectedRole === 'Shipper') {
      roleCode = 2;
    } else if (selectedRole === 'Chủ shop') {
      roleCode = 1;
    }

    setRole(roleCode);
  };

  const getAllEmployees = async () => {
    try {
      const response = await axiosClient.get('admin/employees');
      setEmployees(response.payload);
      
    } catch (error) {
      console.error(error);
    }
  };

    useEffect(() =>{
      getAllEmployees();
    },[]);
    

    const handleUpdate = async (e) =>{
      e.preventDefault();
      try {
        const authToken = `Bearer ${auth.token}`; // Replace with your actual authentication token

        const config = {
          headers: {
            'Authorization': authToken,
          }
        };

          const response = await axiosClient.patch(`admin/employees/${selected._id}`, {firstName: updateFirstName,lastName: updateLastName,phoneNumber: updatePhoneNumber,email: updateEmail,address: updateAddress,role : role},config);
          if(response.success){
              toast.success(" is updated");
              setSelected(null);
              setUpdateFirstName("");
              setUpdateLastName("");
              setUpdateEmail("");
              setUpdateAddress("");
              setUpdatePhoneNumber("");
              setRole("")
              setEmployees(employees.map((employee) => {
                if (employee._id === selected._id) {
                  return { ...employee,firstName: updateFirstName,lastName: updateLastName,phoneNumber: updatePhoneNumber,email: updateEmail,address: updateAddress,role : role}; // Cập nhật tên của danh mục tương ứng
                }
                return employee;
              }));
          }
    
      } catch (error) {
        console.log(error.message);
          toast.error('Something went wrong')
      }
    };
    //Delete category
    const handleDelete = async (pId) =>{
      try {
        const authToken = `Bearer ${auth.token}`; // Replace with your actual authentication token

        const config = {
          headers: {
            'Authorization': authToken,
          }
        };

          const response = await axiosClient.delete(`admin/employees/${pId}`,config);
          if(response?.success){
              toast.success(`category is deleted`);
              setEmployees(employees.filter((employee) => employee._id !== pId)); // Loại bỏ danh mục đã được xóa khỏi danh sách
          }
          
      } catch (error) {
          toast.error('Something went wrong')
      }
  };
  return (
    <main className="app-content">
      <div className="app-title">
        <ul className="app-breadcrumb breadcrumb side">
          <li className="breadcrumb-item active">
            <a href="#">
              <b>Danh sách nhân viên</b>
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
                    to="/main/employeemanager/addemployee"
                    className="active1"
                  >
                    
                      <i className="fas fa-plus"></i>
                      Tạo mới nhân viên
                    
                  </NavLink>
                </div>
                <div className="col-sm-2">
                  <a
                    className="btn btn-delete btn-sm"
                  >
                    <i className="fas fa-trash-alt"></i> Xóa tất cả{" "}
                  </a>
                </div>
              </div>
              <table
                className="table table-hover table-bordered js-copytextarea"
                cellPadding="0"
                cellSpacing="0"
                border="0"
                id="sampleTable"
              >
                <thead>
                  <tr>
                    <th width="10">
                      <input type="checkbox" id="all" />
                    </th>
                    <th>ID nhân viên</th>
                    <th width="150">Họ và tên</th>
                    <th width="20">Ảnh thẻ</th>
                    <th width="300">Địa chỉ</th>
                    <th>Ngày sinh</th>
                    <th>Giới tính</th>
                    <th>SĐT</th>
                    <th>Chức vụ</th>
                    <th width="100">Tính năng</th>
                  </tr>
                </thead>
                <tbody>
                  {employees && employees.map((e) => e.role !== 1 ? (
                  <tr key={e._id}>
                    <td width="10">
                      <input type="checkbox" name="check1" value="1" />
                    </td>
                    <td>{e._id}</td>
                    <td>{e.firstName}{e.lastName}</td>
                    <td>
                      <img
                        className="img-card-person"
                        src="/img-anhthe/1.jpg"
                        alt=""
                      />
                    </td>
                    <td>{e.address}</td>
                    <td>{e.birthday}</td>
                    <td>{e.sex}</td>
                    <td>{e.phoneNumber}</td>
                    <td>{e.role === 0 ? 'Bán hàng' : 'Giao hàng'}</td>
                    <td className="table-td-center">
                      <button
                        className="btn btn-primary btn-sm trash"
                        type="button"
                        title="Xóa"
                        onClick={() => { handleDelete(e._id)}}
                      >
                        <i className="fas fa-trash-alt"></i>
                      </button>               
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          data-bs-whatever="@mdo"
                          onClick={() => {
                            setVisible(true) ;
                            setSelected(e);
                            setUpdateFirstName(e.firstName);
                            setUpdateLastName(e.lastName);
                            setUpdatePhoneNumber(e.phoneNumber);
                            setUpdateEmail(e.email);
                            setUpdateAddress(e.address);
                            setRole(e.role)
                            }}
                        >
                          <i className="fas fa-edit"></i>
                        </button>
                        <UpdateEmployee 
                        handleSubmit={handleUpdate} 
                        firstName={updateFirstName} 
                        lastName={updateLastName} 
                        phoneNumber={updatePhoneNumber} 
                        email={updateEmail} 
                        address={updateAddress} 
                        setEmail={setUpdateEmail} 
                        setLastName={setUpdateLastName} 
                        setPhoneNumber={setUpdatePhoneNumber} 
                        setFirstName={setUpdateFirstName}
                        setAddress={setUpdateAddress} 
                        handleRoleChange={handleRoleChange} />
                
                    </td>
                  </tr>) : (
                      ""
                  ))}
  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default EmployeeManager