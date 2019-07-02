import { renderRoutes } from 'react-router-config';

import { commonRoutes, fallbackRoute } from './public';
import {ProtectedRoutes } from './protected';

const allRoutes = [
    ...commonRoutes,
    ...ProtectedRoutes,
    fallbackRoute,
];

export const routes = (props = {}) => renderRoutes(allRoutes, props);
