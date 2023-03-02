import Favorite from '../views/pages/favorite';
import Detail from '../views/pages/detail';
import Home from '../views/pages/home';
import PageNotFound from '../views/pages/not-found';

const routes = {
  '/': Home,
  '/home': Home,
  '/detail/:id': Detail,
  '/favorite': Favorite,
  '/(.*)': PageNotFound,
};

export default routes;
