import { renderRoutes } from 'react-router-config';

import { commonRoutes, fallbackRoute } from './common';

const allRoutes = [
    ...commonRoutes,
    fallbackRoute,
];

export const routes = (props = {}) => renderRoutes(allRoutes, props);
