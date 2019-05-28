import AboutPage from './pages/AboutPage';
import { HomePage } from './pages/Home';

export const commonRoutes = [
    {
        path: '/',
        exact: true,
        component: HomePage,
    },
    {
        path:'/about',
        exact: true,
        component: AboutPage
    }
];

export const fallbackRoute = {
    component: HomePage,
};
