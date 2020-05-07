import Home from "./Page/Home/Home";
import DetailFilm from "./Page/Home/DetailFilm";

const routesHome = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/home",
    exact: false,
    component: Home,
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
];
export { routesHome };
