import Axios from "axios";
import * as ActionType from "../Constants/ActionType";

export const actThemNguoiDungAPI = (user) => {
  const userAdmin = JSON.parse(localStorage.getItem("userAdmin"));
  return (dispatch) => {
    Axios({
      method: "POST",
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
      data: user,
      headers: {
        Authorization: `Bearer  ${userAdmin.accessToken}`,
      },
    })
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

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
export const logout = () => {
  return (dispatch) => {
    if (localStorage.getItem("credentials")) {
      localStorage.removeItem("credentials");
    }
    if (localStorage.getItem("userAdmin")) {
      localStorage.removeItem("userAdmin");
    }

    dispatch(actGetListLogin(null));
  };
  // return (dispatch) => {
  //     localStorage.removeItem("credentials");
  //     dispatch(actGetListLogin(null));
  // };
};

export const actLoginAPI = (user, history) => {
  return (dispatch) => {
    Axios({
      method: "POST",
      url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      data: user,
    })
      .then((rs) => {
        // console.log(rs.data);
        if (rs.data.maLoaiNguoiDung === "QuanTri") {
          localStorage.setItem("userAdmin", JSON.stringify(rs.data));
          history.push("./admin/index");
          dispatch(actGetListLogin(rs.data));
        } else if (rs.data.maLoaiNguoiDung === "KhachHang") {
          history.push("/home");
          localStorage.setItem("credentials", JSON.stringify(rs.data));
          dispatch(actGetListLogin(rs.data));
        } else {
          alert("Nhap sai tai khoan mat khau");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const actGetListLogin = (detaiLogin) => {
  return {
    type: ActionType.GET_LIST_LOGIN,
    data: detaiLogin,
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
//lay loai nguoi dung
export const actGetLoaiNguoiDUngAPI = () => {
  return (dispatch) => {
    Axios({
      method: "GET",
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung",
    })
      .then((rs) => {
        console.log("loai" + rs.data);
        dispatch(actGetLoaiNguoiDung(rs.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const actGetLoaiNguoiDung = (loaiNguoiDung) => {
  return {
    type: ActionType.GET_LOAI_NGUOI_DUNG,
    data: loaiNguoiDung,
  };
};
//end loai nguoi dung
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
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${id}&maNhom=GP05`,
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
//LAY DANH SACH PHONG VE
export const getRoomTicketAPI = (roomTicketCode) => {
  return (dispatch) => {
    Axios({
      method: "GET",
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${roomTicketCode}`,
    })
      .then((response) => {
        dispatch({
          type: ActionType.GET_ROOM_TICKET,
          data: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
//END LAY DANH SACH PHONG VE
//BOOKING TICKET SUCCESS
export const actBookingTicket = (bookingInfo, accessToken) => {
  return (dispatch) => {
    Axios({
      method: "POST",
      url: "http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe",
      data: bookingInfo,
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    })
      .then((response) => {
        console.log(response.data);
        if (response.data) {
          dispatch({
            type: ActionType.ACT_BOOKING_TICKET,
            data: response.data,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
