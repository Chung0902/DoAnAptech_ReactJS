import React, { useState } from "react";
import {useNavigate, useLocation} from 'react-router-dom';

// import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilLockLocked, cilUser } from "@coreui/icons";
import "../../styles/buttonlogin.css";
import axiosClient from "../../libraries/axiosClient";



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate("")
  const location = useLocation()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosClient.post('admin/employees/login', {
        email,
        password,
      });
      // if (response && response.data && response.data.success) {
      //   console.log(response.data.success)
      //   localStorage.setItem('autho', JSON.stringify(response.data));
      //   navigate(location.state?.from ||'/main');
      // } else {
      //   alert(response?.data?.message);
      // }
      // Save the access token and refresh token to local storage
      if (response.token && response.refreshToken) {
        window.localStorage.setItem('TOKEN', response.token);
        window.localStorage.setItem('REFRESH_TOKEN', response.refreshToken);
        navigate(location.state?.from ||'/main');
      }
    } catch (error) {
      console.error(error);
      alert('Something went wrong');
    }
  };

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">
                      Sign In to your account
                    </p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="Email" 
                        autoComplete="email" />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton type="submit" className="px-4 buttonlg">Login</CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <Link to="/forgot-password">
                          <CButton color="link" className="px-0">
                            Forgot password?
                          </CButton>
                        </Link>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard
                className="text-white bg-primary py-5"
                style={{ width: "44%" }}
              >
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      When logging into the system of a website or application,
                      the user will need to provide login information to
                      authenticate his/her identity and access the system's
                      features and services.
                    </p>
                    <Link to="/register">
                      <CButton
                        color="primary"
                        className="mt-3 "
                        active
                        tabIndex={-1}
                      >
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
