import Index from "./Page/Home";
import DetailFilm from "./Page/Home/DetailFilm";

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
];
export { routesHome };
