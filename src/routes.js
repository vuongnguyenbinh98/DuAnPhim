import Index from "./Page/Home";
import DetailFilm from "./Page/Home/DetailFilm";
import Login from "./Page/Home/Login";
import CinemaDetail from "./Components/Cinema/Cinema-Detail";

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
];
export { routesHome };
