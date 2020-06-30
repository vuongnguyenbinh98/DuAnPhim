import Index from "./Page/Home";
import DetailFilm from "./Page/Home/DetailFilm";
import Login from "./Page/Home/Login";
import CinemaDetail from "./Components/Cinema/Cinema-Detail";
import Register from "./Page/Register/Register";
import CinemaCluster from "./Components/Cinema/Cinema-Detail/Cinema-Cluster";
import Seats from "./Components/Seats";
import Dashboard from "./Page/Admin/Dashboard";
import ThemNguoiDung from "./Page/Admin/ThemNguoiDung";
import HomeAdmin from "./Page/Admin/index";

const routesHome = [
  {
    path: "/",
    exact: true,
    component: Index,
  },
  {
    path: "/home",
    exact: false,
    component: Index,
  },

  {
    path: "/detail-film/:id",
    exact: false,
    component: DetailFilm,
  },
  {
    path: "/detail-film",
    exact: false,
    component: DetailFilm,
  },
  {
    path: "/dang-nhap",
    exact: false,
    component: Login,
  },
  {
    path: "/detail-cinema/:maHeThongRap",
    exact: false,
    component: CinemaDetail,
  },
  // {
  //   // path: "/detail-cinemaa/:maCumRap",
  //   path: "/checkout/:id",
  //   exact: false,
  //   component: CinemaCluster,
  // },
  // {
  //   // path: "/detail-cinemaa/:maCumRap",
  //   path: "/checkout/:id",
  //   exact: false,
  //   component: Seat,
  // },
  {
    path: "/register",
    exact: false,
    component: Register,
  },
  {
    path: "/seat/:maLichChieu",
    exact: false,
    component: Seats,
  },
];
const routesAdmin = [
  {
    path: "/admin/dashboard",
    exact: false,
    component: Dashboard,
  },
  {
    path: "/admin/them-nguoi-dung",
    exact: false,
    component: ThemNguoiDung,
  },
  {
    path: "/admin/index",
    exact: false,
    component: HomeAdmin,
  },
];
export { routesHome, routesAdmin };
