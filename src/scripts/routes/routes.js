import Favorite from '../views/pages/favorite';
import Detail from '../views/pages/detail';
import Home from '../views/pages/home';

const routes = {
  '/': Home,
  '/home': Home,
  'detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
