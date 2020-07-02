import React, { Component } from "react";
import Paganation from "./../Pagination/index";
export default class TableAdmin extends Component {
  render() {
    return (
      <section>
        <div className="row-mb-5">
          <div className="col-xl-10 col-lg-9 col-md-8 ml-auto">
            {/* align-items-center */}
            <div className="row align-items-center">
              <div className="col-xl-6 col-12 mb-4 mb-xl-0">
                <h3 className="text-muted text-center mb-3">Staff Salery</h3>
                <table className="table table-striped bg-light text-center">
                  <thead>
                    <tr className="text-muted">
                      <th>#</th>
                      <th>Name</th>
                      <th>Salary</th>
                      <th>Date</th>
                      <th>Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="text-muted">
                      <th>1</th>
                      <td>John</td>
                      <td>$2000</td>
                      <td>25/6/2020</td>
                      <td>
                        <button type="button" className="btn btn-info btm-sm">
                          Message
                        </button>
                      </td>
                    </tr>
                    <tr className="text-muted">
                      <th>2</th>
                      <td>Bob</td>
                      <td>$2000</td>
                      <td>25/6/2020</td>
                      <td>
                        <button type="button" className="btn btn-info btm-sm">
                          Message
                        </button>
                      </td>
                    </tr>
                    <tr className="text-muted">
                      <th>3</th>
                      <td>Ann</td>
                      <td>$2000</td>
                      <td>25/6/2020</td>
                      <td>
                        <button type="button" className="btn btn-info btm-sm">
                          Message
                        </button>
                      </td>
                    </tr>
                    <tr className="text-muted">
                      <th>4</th>
                      <td>Mary</td>
                      <td>$2000</td>
                      <td>25/6/2020</td>
                      <td>
                        <button type="button" className="btn btn-info btm-sm">
                          Message
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                {/* paginate */}
                <Paganation />
                {/* end paginate */}
              </div>
              <div className="col-xl-6 col-12">
                {" "}
                <h3 className="text-muted text-center mb-3">Recent Payments</h3>
                <table className="table text-center table-light table-hover">
                  <thead>
                    <tr className="text-muted">
                      <th>#</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {" "}
                    <tr className="text-muted">
                      <th>1</th>
                      <td>Monica</td>
                      <td>$2000</td>
                      <td>25/6/2020</td>
                      <td>
                        <span className="badge badge-success w-75 py-2">
                          Approved
                        </span>
                      </td>
                    </tr>
                    <tr className="text-muted">
                      <th>2</th>
                      <td>Nick</td>
                      <td>$2000</td>
                      <td>25/6/2020</td>
                      <td>
                        <span className="badge badge-success w-75 py-2">
                          Approved
                        </span>
                      </td>
                    </tr>
                    <tr className="text-muted">
                      <th>3</th>
                      <td>Alex</td>
                      <td>$2000</td>
                      <td>25/6/2020</td>
                      <td>
                        <span className="badge badge-danger w-75 py-2">
                          Pendding
                        </span>
                      </td>
                    </tr>
                    <tr className="text-muted">
                      <th>4</th>
                      <td>Jane</td>
                      <td>$2000</td>
                      <td>25/6/2020</td>
                      <td>
                        <span className="badge badge-danger w-75 py-2">
                          Pendding
                        </span>
                      </td>
                    </tr>
                    <tr className="text-muted">
                      <th>5</th>
                      <td>Micheal</td>
                      <td>$2000</td>
                      <td>25/6/2020</td>
                      <td>
                        <span className="badge badge-success w-75 py-2">
                          Approved
                        </span>
                      </td>
                    </tr>
                    <tr className="text-muted">
                      <th>6</th>
                      <td>Kate</td>
                      <td>$2000</td>
                      <td>25/6/2020</td>
                      <td>
                        <span className="badge badge-danger w-75 py-2">
                          Pendding
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <Paganation />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
