import DashBoard from './pages/DashBoard';
import RequiresAuth from '../components/HOC/RequiresAuth';
import { WithSessionContext } from '../components/HOC/WithSessionContext'

export const ProtectedRoutes = [
    {
        path: '/dashboard',
        exact: true,
        component: RequiresAuth(WithSessionContext(DashBoard)),
    }
];
