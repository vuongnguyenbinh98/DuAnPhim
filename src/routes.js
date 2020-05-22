import Index from "./Page/Home";
import DetailFilm from "./Page/Home/DetailFilm";
import Login from "./Page/Home/Login";
import CinemaDetail from "./Components/Cinema/Cinema-Detail";
import Register from "./Page/Register/Register";
import CinemaCluster from "./Components/Cinema/Cinema-Detail/Cinema-Cluster";

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
  {
    path: "/detail-cinema/:maCumRap",
    exact: false,
    component: CinemaCluster,
  },
  {
    path: "/register",
    exact: false,
    component: Register,
  },
];
export { routesHome };
