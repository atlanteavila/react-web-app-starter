import HomePage from './pages/Home';
import Authenticate from './pages/Authenticate';

export const commonRoutes = [
    {
        path: '/',
        exact: true,
        component: HomePage,
    },
    {
        path:'/authenticate',
        exact: true,
        component: Authenticate
    }
];

export const fallbackRoute = {
    component: Authenticate,
};
