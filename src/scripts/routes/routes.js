import Favorite from '../views/pages/favorite';
import Detail from '../views/pages/detail';
import Home from '../views/pages/home';
import { pageNotFoundTemplate } from '../views/templates/template-creator';

const routes = {
  '/': Home,
  '/home': Home,
  '/detail/:id': Detail,
  '/favorite': Favorite,
  '/(.*)': pageNotFoundTemplate,
};

export default routes;
