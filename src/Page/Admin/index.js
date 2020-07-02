import React, { Component } from "react";
import "./../../scss/indexAdmin.scss";
import TableAdmin from "./../../Components/TableAdmin/tableAdmin";
import Progress from "./../../Components/Progress/index";
export default class HomeAdmin extends Component {
  render() {
    return (
      <>
        <section>
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-10 col-lg-9 col-md-8 ml-auto pt-5 mt-3 mb-5">
                {/* them pt-5 mt-3 mb-3 vao  */}
                <div className="row pt-md-5 mt-md-3 mb-5">
                  <div className="col-xl-3 col-sm-6 p-2">
                    <div className="card card-common">
                      <div className="card-body">
                        <div className="d-flex justify-content-between">
                          <i className="fa fa-shopping-cart fa-3x text-warning"></i>
                          <div className="text-right text-secondary">
                            <h5>Sales</h5>
                            <h3>$135,000</h3>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer text-secondary">
                        <i className="fa fa-sync mr-3"></i>
                        <span>Update Now</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 p-2">
                    {" "}
                    <div className="card card-common">
                      <div className="card-body">
                        <div className="d-flex justify-content-between">
                          <i className="fa fa-money fa-3x text-success"></i>
                          <div className="text-right text-secondary">
                            <h5>Sales</h5>
                            <h3>$39,000</h3>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer text-secondary">
                        <i className="fa fa-sync mr-3"></i>
                        <span>Update Now</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 p-2">
                    {" "}
                    <div className="card card-common">
                      <div className="card-body">
                        <div className="d-flex justify-content-between">
                          <i className="fa fa-user fa-3x text-info"></i>
                          <div className="text-right text-secondary">
                            <h5>User</h5>
                            <h3>15,000</h3>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer text-secondary">
                        <i className="fa fa-sync mr-3"></i>
                        <span>Update Now</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 p-2">
                    {" "}
                    <div className="card card-common">
                      <div className="card-body">
                        <div className="d-flex justify-content-between">
                          <i class="fa fa-user fa-3x text-danger"></i>
                          <div className="text-right text-secondary">
                            <h5>Visitors</h5>
                            <h3>45,000</h3>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer text-secondary">
                        <i className="fa fa-sync mr-3"></i>
                        <span>Update Now</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <TableAdmin />
        <Progress />
      </>
    );
  }
}
