import Axios from "axios";

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
export const actGetDetailMovie = (detailFilm) => {
  return {
    type: "GET_DETAIL_MOVIE",
    data: detailFilm,
  };
};
