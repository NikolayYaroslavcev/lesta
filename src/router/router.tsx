import React from 'react';
import {createBrowserRouter, Navigate} from 'react-router-dom';
import {App} from '../App';
import {Premium} from 'components/pages/premium/premium';
import {Collectible} from 'components/pages/collectible/collectible';
import {NotFoundPage} from 'components/not-found-page/not-found-page';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {index: true, element: <Navigate to="/premium" replace/>},
            {path: 'premium', element: <Premium/>},
            {path: 'collectible', element: <Collectible/>},
        ],
    },
    {path: '*', element: <NotFoundPage/>},
]);
