import Polls from './pages/Polls';
import routes from './constants/routes';
import CallCenter from './pages/CallCenter';
import BlackList from './pages/BlackList';
import Users from './pages/Users';

export default [
  {
    path: routes.polls,
    exact: true,
    component: Polls,
  },
  {
    path: routes.callCenter,
    exact: true,
    component: CallCenter,
  },
  {
    path: routes.blackList,
    exact: true,
    component: BlackList,
  },
  {
    path: routes.users,
    exact: true,
    component: Users,
  },
];
