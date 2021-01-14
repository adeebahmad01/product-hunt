import { Switch } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Profile = () => {
  const { activeUser } = useAuth();
  return (
    <div className="py-5">
      <div className="container emp-profile mt-5">
      <form method="post">
        <div className="row">
          <div className="col-md-4">
            <div className="profile-img">
              <div className="bg-light rounded-circle d-flex justify-content-center align-items-center display-2 border shadow" style={{width: `200px`,height: `200px`}}> {activeUser.firstname[0]} </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="profile-head">
              <h3>{activeUser.firstname} {activeUser.lastname}</h3>
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                  <Link to="/profile" className="nav-link active">About</Link>
                </li>
              </ul>
            </div>
            <div className="w-100"></div>
            <div className="tab-content profile-tab" id="myTabContent">
              <div className="tab-pane fade show active" id="home">
                <div className="row">
                  <div className="col-md-6">
                    <label>First Name</label>
                  </div>
                  <div className="col-md-6">
                    <p>{activeUser.firstname}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Last Name</label>
                  </div>
                  <div className="col-md-6">
                    <p>{activeUser.lastname}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Email</label>
                  </div>
                  <div className="col-md-6">
                    <p>{activeUser.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Profile;