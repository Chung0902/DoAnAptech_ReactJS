import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {
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
                <b>Product Management</b>
              </li>
              <li>
                <a href="/TotalEaring.html">
                  <span className="fa-solid fa-lines-leaning" />
                  <span>Create Categories</span>
                </a>
              </li>
              <li>
                <a href="/VacationDays.html">
                <span className="fa-solid fa-file-circle-plus" />

                  <span>Create Products</span>
                </a>
              </li>
              <li>
                <a href="/BenefitsPaid.html">
                  <span className="fa-solid fa-gears" />
                  <span>Products</span>
                </a>
              </li>
              <li className="menu">
                <b>NOTIFICATION</b>
              </li>
              <li>
                <a href="/HiringAnniversary.html">
                  <span className="fa-solid fa-users" />
                  <span>Customers</span>
                </a>
              </li>
              <li>
                <a href="/AccumulatedVacation.html">
                  <span className="fa-solid fa-address-book" />
                  <span>Employees</span>
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

  );
}

export default Header