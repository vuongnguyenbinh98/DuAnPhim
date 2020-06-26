import React, { Component } from "react";
import "./styled.scss";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <div className="container col-sm-12 Footer p-4">
        <div className="row">
          <div className="col-sm-3 content">
            <p className="title">TIX</p>
            <Link href="#" className="title2" to="">
              FAQ
            </Link>
            <br></br>
            <Link href="" className="title2" to="">
              Brand Guidelines
            </Link>
          </div>
          <div className="col-sm-3 content content2 ">
            <ul>
              <li className="title2 text-white">Thỏa thuận</li>
              <li className="title2">Chính sách bảo mật</li>
            </ul>
          </div>
          <div className="col-sm-3 content">
            <p className="title">Đối tác</p>
            <div className="doi_tac">
              {/* Dong 1 */}
              <div className="row logo">
                <div className="col-md-3 col-sm-12">
                  <a href="#">
                    <img src="https://tix.vn/app/assets/img/icons/cgv.png" />
                  </a>
                </div>
                <div className="col-md-3 col-sm-12">
                  <a href="#">
                    <img src="https://tix.vn/app/assets/img/icons/VIETTINBANK.png" />
                  </a>
                </div>
                <div className="col-md-3 col-sm-12">
                  <a href="#">
                    <img src="https://tix.vn/app/assets/img/icons/cinestar.png" />
                  </a>
                </div>
                <div className="col-md-3 col-sm-12">
                  <a href="#">
                    <img src="https://tix.vn/app/assets/img/icons/galaxycine.png" />
                  </a>
                </div>
              </div>
              {/* Dòng 2  */}
              <div className="row logo">
                <div className="col-md-3">
                  <a href="#">
                    <img src="https://tix.vn/app/assets/img/icons/123go.png" />
                  </a>
                </div>
                <div className="col-md-3">
                  <a href="#">
                    <img src="https://tix.vn/app/assets/img/icons/AGRIBANK.png" />
                  </a>
                </div>
                <div className="col-md-3">
                  <a href="#">
                    <img src="https://tix.vn/app/assets/img/icons/IVB.png" />
                  </a>
                </div>
                <div className="col-md-3">
                  <a href="#">
                    <img src="https://tix.vn/app/assets/img/icons/STARLIGHT.png" />
                  </a>
                </div>
              </div>
              {/* dong 3  */}
              <div className="row logo">
                <div className="col-md-3 col-sm-12">
                  <a href="#">
                    <img src="https://tix.vn/app/assets/img/icons/TOUCH.png" />
                  </a>
                </div>
                <div className="col-md-3 col-sm-12">
                  <a href="#">
                    <img src="https://tix.vn/app/assets/img/icons/VCB.png" />
                  </a>
                </div>
                <div className="col-md-3 col-sm-12">
                  <a href="#">
                    <img src="https://tix.vn/app/assets/img/icons/VIETTINBANK.png" />
                  </a>
                </div>
                <div className="col-md-3 col-sm-12">
                  <a href="#">
                    <img src="https://tix.vn/app/assets/img/icons/bhd.png" />
                  </a>
                </div>
              </div>
              {/* Dong4 */}
              <div className="row logo">
                <div className="col-md-3 col-sm-12">
                  <a href="#">
                    <img src="https://tix.vn/app/assets/img/icons/bt.jpg" />
                  </a>
                </div>
                <div className="col-md-3 col-sm-12">
                  <a href="#">
                    <img src="https://tix.vn/app/assets/img/icons/dcine.png" />
                  </a>
                </div>
                <div className="col-md-3 col-sm-12">
                  <a href="#">
                    <img src="https://tix.vn/app/assets/img/icons/dongdacinema.png" />
                  </a>
                </div>
                <div className="col-md-3 col-sm-12">
                  <a href="#">
                    <img src="https://tix.vn/app/assets/img/icons/megags.png" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3 content">
            <p className="title">Social</p>
            <div className="social">
              <div className="row fb">
                <div className="col-md-2">
                  <a href="#">
                    <img src="https://tix.vn/app/assets/img/icons/facebook-logo.png" />
                  </a>
                </div>
                <div className="col-md-2">
                  <a href="#">
                    <img src="https://tix.vn/app/assets/img/icons/zalo-logo.png" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row line">
          <div className="col-md-10 bg-line"></div>
        </div>
        <div className="row zion  mt-3">
          <div className="col-md-1">
            <img
              src="https://tix.vn/app/assets/img/icons/zion-logo.jpg"
              className="img-fluid"
            />
          </div>
          <div className="col-md-7 text-light textNam">
            <h5>TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</h5>
            <p>
              Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ
              Chí Minh, Việt Nam.
            </p>
            <p>Giấy chứng nhận đăng ký kinh doanh số: 0101659783,</p>
            <p>
              đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế
              hoạch và đầu tư Thành phố Hồ Chí Minh cấp.
            </p>
            <p>Số Điện Thoại (Hotline): 1900 545 436</p>
            <p>
              Email: <span>support@tix.vn</span>
            </p>
          </div>
          <div className="col-md-4 dathongbao">
            <img src="https://s3img.vcdn.vn/123phim/2020/03/d1e6bd560daa9e20131ea8a0f62e87f8.png" />
          </div>
        </div>
      </div>
    );
  }
}
