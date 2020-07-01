import React, { Component } from "react";
import "./../Progress/styles.scss";
export default class Progress extends Component {
  render() {
    return (
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-10 col-lg-9 col-md-8 ml-auto">
              <div className="row mb-4 align-items-center">
                <div className="col-xl-6 col-12 mb-4 mb-xl-0">
                  <div className="bg-dark text-white p-4 rounded">
                    <h4 className="mb-5">Conversion Rates</h4>
                    <h6 className="mb-3">Google Chrome</h6>
                    <div classname="progress mb-4" style={{ height: 20 }}>
                      <div
                        className="progress-bar progress-bar-striped font-weight-bold"
                        style={{ width: 91 + "%" }}
                      >
                        91%
                      </div>
                    </div>
                    <h6 className="mb-3">Mozilla Firefox</h6>
                    <div classname="progress mb-4" style={{ height: 20 }}>
                      <div
                        className="progress-bar progress-bar-striped font-weight-bold bg-success"
                        style={{ width: 82 + "%" }}
                      >
                        82%
                      </div>
                    </div>
                    <h6 className="mb-3">Safari</h6>
                    <div classname="progress mb-4" style={{ height: 20 }}>
                      <div
                        className="progress-bar progress-bar-striped font-weight-bold bg-danger"
                        style={{ width: 67 + "%" }}
                      >
                        67%
                      </div>
                    </div>
                    <h6 className="mb-3">IE</h6>
                    <div classname="progress mb-4" style={{ height: 20 }}>
                      <div
                        className="progress-bar progress-bar-striped font-weight-bold bg-info"
                        style={{ width: 10 + "%" }}
                      >
                        10%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-12">
                  <h4 className="text-muted p-3 mb-3">Tasks:</h4>
                  <div className="container-fluid bg-white">
                    <div className="row py-3 mb-4 task-border align-items-center">
                      <div className="col-1">
                        <input type="checkbox" checked />
                      </div>
                      <div className="col-sm-9 col-8">
                        Lorem ipsum dolor sit met consecterus adispingcing elit.
                      </div>
                      <div className="col-1">
                        <a
                          href="#"
                          data-toggle="tooltip"
                          title="edit"
                          data-html="true"
                          data-placement="top"
                        >
                          <i className="fa fa-edit fa-lg text-success mr-2"></i>{" "}
                        </a>
                      </div>
                      <div className="col-1">
                        <a
                          href="#"
                          data-toggle="tooltip"
                          title="delete"
                          data-html="true"
                          data-placement="top"
                        >
                          <i className="fa fa-trash fa-lg text-danger mr-2"></i>{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* 2 */}
                  <div className="container-fluid bg-white">
                    <div className="row py-3 mb-4 task-border align-items-center">
                      <div className="col-1">
                        <input type="checkbox" checked />
                      </div>
                      <div className="col-sm-9 col-8">
                        Lorem ipsum dolor sit met consecterus adispingcing elit.
                      </div>
                      <div className="col-1">
                        <a
                          href="#"
                          data-toggle="tooltip"
                          title="edit"
                          data-html="true"
                          data-placement="top"
                        >
                          <i className="fa fa-edit fa-lg text-success mr-2"></i>{" "}
                        </a>
                      </div>
                      <div className="col-1">
                        <a
                          href="#"
                          data-toggle="tooltip"
                          title="delete"
                          data-html="true"
                          data-placement="top"
                        >
                          <i className="fa fa-trash fa-lg text-danger mr-2"></i>{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* end2 */}
                  {
                    /* 3 */
                    <div className="container-fluid bg-white">
                      <div className="row py-3 mb-4 task-border align-items-center">
                        <div className="col-1">
                          <input type="checkbox" checked />
                        </div>
                        <div className="col-sm-9 col-8">
                          Lorem ipsum dolor sit met consecterus adispingcing
                          elit.
                        </div>
                        <div className="col-1">
                          <a
                            href="#"
                            data-toggle="tooltip"
                            title="edit"
                            data-html="true"
                            data-placement="top"
                          >
                            <i className="fa fa-edit fa-lg text-success mr-2"></i>{" "}
                          </a>
                        </div>
                        <div className="col-1">
                          <a
                            href="#"
                            data-toggle="tooltip"
                            title="delete"
                            data-html="true"
                            data-placement="top"
                          >
                            <i className="fa fa-trash fa-lg text-danger mr-2"></i>{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  }
                  {/* end3 */}
                  {/* 4 */}
                  <div className="container-fluid bg-white">
                    <div className="row py-3 mb-4 task-border align-items-center">
                      <div className="col-1">
                        <input type="checkbox" checked />
                      </div>
                      <div className="col-sm-9 col-8">
                        Lorem ipsum dolor sit met consecterus adispingcing elit.
                      </div>
                      <div className="col-1">
                        <a
                          href="#"
                          data-toggle="tooltip"
                          title="edit"
                          data-html="true"
                          data-placement="top"
                        >
                          <i className="fa fa-edit fa-lg text-success mr-2"></i>{" "}
                        </a>
                      </div>
                      <div className="col-1">
                        <a
                          href="#"
                          data-toggle="tooltip"
                          title="delete"
                          data-html="true"
                          data-placement="top"
                        >
                          <i className="fa fa-trash fa-lg text-danger mr-2"></i>{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* end4 */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
