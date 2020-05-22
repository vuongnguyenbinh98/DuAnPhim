import Axios from "axios";
import * as ActionType from "../Constants/ActionType";

export const actResgisterUser = (user) => {
  // const userRegister = JSON.parse(localStorage.getItem("userAdmin"));
  return (dispatch) => {
    Axios({
      method: "POST",
      url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      data: user,
      // headers: {
      //   Authorization: "Bearer" + userRegister.accessToken,
      // },
    })
      .then((rs) => {
        console.log(rs.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const actLoginAPI = (user, history) => {
  return (dispatch) => {
    Axios({
      method: "POST",
      url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      data: user,
    })
      .then((rs) => {
        console.log(rs.data);
        history.push("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const actGetDetailMovieAPI = (id) => {
  return (dispatch) => {
    Axios({
      method: "GET",
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
    })
      .then((rs) => {
        console.log(rs.data);
        dispatch(actGetDetailMovie(rs.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
//Lay danh sach Rap
export const actGetListCinemaAPI = () => {
  return (dispatch) => {
    Axios({
      method: "GET",
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap",
    })
      .then((res) => {
        console.log(res.data);
        dispatch(actGetListCinema(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
//End Rap

//Lay chi tiet Rap
export const actGetDetailCinemaAPI = (id) => {
  return (dispatch) => {
    Axios({
      method: "GET",
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${id}`,
    })
      .then((result) => {
        console.log(result.data);
        dispatch(actGetDetailCinema(result.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const actGetDetailCinema = (detailCinema) => {
  return {
    type: ActionType.GET_LIST_DETAIL_CINEMA,
    data: detailCinema,
  };
};
//End chi tiet Rap
//Lay thong tin lich chieu he thong rap
export const actGetInfoDetailCinemaAPI = (id) => {
  return (dispatch) => {
    Axios({
      method: "GET",
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${id}&maNhom=GP01`,
    })
      .then((rs) => {
        console.log(rs.data);
        dispatch(actGetInfoDetailCinema(rs.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const actGetInfoDetailCinema = (infoDetailCinema) => {
  return {
    type: ActionType.GET_INFO_DETAIL_CINEMA,
    data: infoDetailCinema,
  };
};
//End Lay thong tin lich chieu he thong rap
export const actGetDetailMovie = (detailFilm) => {
  return {
    type: "GET_DETAIL_MOVIE",
    data: detailFilm,
  };
};

export const actGetListCinema = (listCinema) => {
  return {
    type: ActionType.GET_LIST_CINEMA,
    data: listCinema,
  };
};
