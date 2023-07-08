import React from 'react'
import { Outlet,Link } from 'react-router-dom';

const Header = () => {
  return (
      <div>
        <input type="checkbox" id="nav-toggle" />
        <div className="slidebar">
          <div className="slidebar-brand">
            <h3>
              <span className="lab la-accusoft icon-logo" />{" "}
              <b className="logo">Management System</b>{" "}
            </h3>
          </div>
          <div className="slidebar-menu">
            <ul>
              <li>
                <a href="#" className="active1">
                  <span className="las la-igloo icon-logo" />
                  <span>Dashboard</span>
                </a>
              </li>
              <li className="menu">
                <b>INFORMATION</b>
              </li>
              <li>
                <a href="/TotalEaring.html">
                  <span className="las la-user" />
                  <span>Total Earning</span>
                </a>
              </li>
              <li>
                <a href="/VacationDays.html">
                  <span className="far fa-calendar-alt" />
                  <span>Vacation Days</span>
                </a>
              </li>
              <li>
                <a href="/BenefitsPaid.html">
                  <span className="fas fa-credit-card" />
                  <span>Benefits Paid</span>
                </a>
              </li>
              <li className="menu">
                <b>NOTIFICATION</b>
              </li>
              <li>
                <a href="/HiringAnniversary.html">
                  <span className="fas fa-align-left" />
                  <span>Hiring Anniversary</span>
                </a>
              </li>
              <li>
                <a href="/AccumulatedVacation.html">
                  <span className="fas fa-route" />
                  <span>Accumulated Vacation</span>
                </a>
              </li>
              <li>
                <a href="/ChangeBenefitsPlan.html">
                  <span className="fas fa-trophy" />
                  <span>Change Benefits Plan</span>
                </a>
              </li>
              <li style={{ borderBottom: ".3rem solid black" }}>
                <a href="/Birthday.html">
                  <span className="fas fa-birthday-cake" />
                  <span>Birthday</span>
                </a>
              </li>
              <li>
                <a href="./Login.html">
                  <span className="fas fa-sign-out-alt" />
                  <span>Log out</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="main-content">
          <header>
            <h2>
              {/* edit nav-toggle */}
              <label htmlFor="nav-toggle">
                <span className="las la-bars nav" />
              </label>{" "}
              Dashboard
            </h2>
            <div className="user-wrapper">
              <div className="btn-group">
                <button type="button" className="btn btn-info dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  Admin
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Profile</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="/login">Logout</Link></li>
                </ul>
              </div>
            </div>
          </header>
          <main>
            <Outlet/>
          </main>
        </div>
      </div>

  );
}

export default Header