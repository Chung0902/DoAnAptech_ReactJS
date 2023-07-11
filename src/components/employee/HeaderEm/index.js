import React from 'react'
import { NavLink } from 'react-router-dom'

const HeaderEm = () => {
  return (
    <div>
           <div className="slidebar-brand">
            <h3>
              <span className="lab la-accusoft icon-logo" />{" "}
              <b className="logo">Management System</b>{" "}
            </h3>
          </div>
          <div className="slidebar-menu">
            <ul>
              <li>
                <NavLink to="/main/amindashboard" className="active1">
                  <span className="las la-igloo icon-logo" />
                  <span>Dashboard</span>
                </NavLink>
              </li>
              <li className="menu">
                <b>Account</b>
              </li>
              <li>
                <a href="/AccumulatedVacation.html">
                  <span className="fa-solid fa-address-book" />
                  <span>Profile</span>
                </a>
              </li>
              <li className="menu">
                <b>Manager</b>
              </li>
              <li>
                <a href="/HiringAnniversary.html">
                  <span className="fa-solid fa-users" />
                  <span>Customers</span>
                </a>
              </li>
              <li>
                <a href="/ChangeBenefitsPlan.html">
                  <span className="fa-solid fa-truck-field-un" />
                  <span>Oders</span>
                </a>
              </li>     
            </ul>
          </div>
    </div>
  )
}

export default HeaderEm