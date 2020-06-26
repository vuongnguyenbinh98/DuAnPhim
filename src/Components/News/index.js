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
              <div className="row">
                <div className="col-md-6">
                  <span>
                    <i class="fa fa-thumbs-up"></i>
                    <i class="fa fa-comment"></i>
                  </span>
                </div>
                <div className="col-md-6">
                  <span>
                    <i class="fa fa-thumbs-up"></i>
                    <i class="fa fa-comment"></i>
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="dienAnh24h">
                        <img
                          src="https://s3img.vcdn.vn/123phim/2020/05/phim-cho-ca-gia-dinh-vui-ve-nhan-dip-le-quoc-te-thieu-nhi-1-6-15905643444860.png"
                          className="img-fluid"
                        />
                        <a href="#">
                          <p>
                            Phim cho cả gia đình vui vẻ nhân dịp lễ Quốc Tế
                            Thiếu Nhi 1/6
                          </p>
                        </a>
                        <p className="text">
                          Phim chiếu rạp dịp Quốc tế Thiếu nhi của năm 2020 có
                          phần kém sôi động hơn những năm trước nhưng không vì
                          vậy mà khán giả nhỏ tuổi bị “ngó lơ”. Cùng điểm qua
                          hai tựa phim hoạt
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="dienAnh24h">
                        <img
                          src="https://s3img.vcdn.vn/123phim/2020/05/antebellum-an-dinh-ngay-khoi-chieu-chinh-thuc-15900552374091.png"
                          className="img-fluid"
                        />
                        <a href="#">
                          <p>Antebellum ấn định ngày khởi chiếu chính thức</p>
                        </a>
                        <p className="text">
                          Từng gây tiếng vang với hàng loạt siêu phẩm kinh dị
                          giật gân đầy ấn tượng, nhà sản xuất của “Get Out” và
                          “Us” tiếp tục tấn công màn ảnh rộng với một trong
                          những tác phẩm kinh
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  {/* 1 */}
                  <div className="row right right1">
                    <div className="col-md-2">
                      <img
                        src="https://s3img.vcdn.vn/123phim/2020/05/david-fincher-bac-thay-su-dung-visual-effects-15900518481959.png"
                        width="50px"
                      />
                    </div>
                    <div className="col-md-10">
                      <p>David Fincher bậc thầy sử dụng Visual Effects</p>
                    </div>
                  </div>
                  {/* 2 */}
                  <div className="row right1">
                    <div className="col-md-2">
                      <img
                        src="https://s3img.vcdn.vn/123phim/2020/05/thien-linh-cai-chuyen-chua-ke-lam-tot-hon-phien-ban-chieu-rap-that-son-tam-linh-15898834629996.png"
                        width="50px"
                      />
                    </div>
                    <div className="col-md-10">
                      <p>
                        Thiên Linh Cái: Chuyện Chưa Kể làm tốt hơn phiên bản
                        chiếu rạ...
                      </p>
                    </div>
                  </div>
                  {/* 3 */}
                  <div className="row right1">
                    <div className="col-md-2">
                      <img
                        src="https://s3img.vcdn.vn/123phim/2020/05/baba-yaga-va-nhung-man-cameo-lam-khan-gia-thot-tim-tren-man-anh-rong-15895151694055.png"
                        width="50px"
                      />
                    </div>
                    <div className="col-md-10">
                      <p>
                        Baba Yaga và những màn cameo làm khán giả thót tim trên
                        màn...
                      </p>
                    </div>
                  </div>
                  {/* 4 */}
                  <div className="row right1">
                    <div className="col-md-2">
                      <img
                        src="https://s3img.vcdn.vn/123phim/2020/05/trailer-truyen-thuyet-ve-quan-tien-ngap-tran-bi-an-tu-cau-chuyen-khi-vuon-hiep-nguoi-den-can-benh-co-dan-ong-la-khoi-ngay-15891896054703.png"
                        width="50px"
                      />
                    </div>
                    <div className="col-md-10">
                      <p>
                        Trailer “Truyền Thuyết Về Quán Tiên”: ngập tràn bí ẩn từ
                        câu...
                      </p>
                    </div>
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
        <div className="row them">
          <div className="col-md-3">
            <button>XEM THÊM</button>
          </div>
        </div>
      </div>
    );
  }
}
