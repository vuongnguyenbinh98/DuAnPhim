import React, { Component } from "react";
import "../News/style.scss";

export default class News extends Component {
  render() {
    return (
      <div className="news">
        <div className="news__content">
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link active"
                id="home-tab"
                data-toggle="tab"
                href="#home1"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                Điện Ảnh 24h
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="profile-tab"
                data-toggle="tab"
                href="#profile"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Review
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="contact-tab"
                data-toggle="tab"
                href="#contact"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
              >
                Khuyến Mãi
              </a>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="home1"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              {/* dienAnh24h */}
              <div className="row">
                <div className="col-md-6">
                  <div className className="dienAnh24h">
                    <img
                      src="https://s3img.vcdn.vn/123phim/2020/06/rom-phim-thang-giai-cao-nhat-tai-lhp-quoc-te-busan-an-dinh-ngay-ra-rap-tai-viet-nam-15910933229816.png"
                      className="img-fluid"
                    />

                    <a href="#">
                      <p>
                        Ròm – Phim thắng giải cao nhất tại LHP quốc tế Busan ấn
                        định ngày ra rạp tại Việt Nam
                      </p>
                    </a>
                    <p className="text">
                      Sau khi chính thức được cấp giấy phép phát hành, bộ phim
                      Ròm của đạo diễn Trần Thanh Huy thông báo ngày khởi chiếu
                      tại Việt Nam vào cuối tháng 7 tới đây.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className className="dienAnh24h">
                    <img
                      src="https://s3img.vcdn.vn/123phim/2020/05/quang-tuan-thuong-tu-ky-tren-phim-truong-de-tap-trung-dien-vai-toi-pham-15906671009175.png"
                      className="img-fluid"
                    />

                    <a href="#">
                      <p>
                        Quang Tuấn thường “tự kỷ” trên phim trường để tập trung
                        diễn vai tội phạm
                      </p>
                    </a>
                    <p className="text">
                      Lần thứ 2 vào vai phản diện trên màn ảnh, Quang Tuấn mang
                      đến một hình ảnh hoàn toàn khác với nhân vật tên tội phạm
                      biến thái có vỏ bọc tri thức.
                    </p>
                  </div>
                </div>
              </div>

              {/* end Dien Anh 24h */}
            </div>
            <div
              class="tab-pane fade"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              ...AA
            </div>
            <div
              class="tab-pane fade"
              id="contact"
              role="tabpanel"
              aria-labelledby="contact-tab"
            >
              ...BB
            </div>
          </div>
        </div>
      </div>
    );
  }
}
