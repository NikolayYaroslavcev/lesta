import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import './index.css';
import { App } from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';

import {CollectibleTab} from "./components/collectible-tab/collectible-tab.tsx";

import {PremiumTab} from "./components/premium-tab/premium-tab.tsx";
import {NotFoundPage} from "./components/not-found-page/not-found-page.tsx";



const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { index: true, element: <Navigate to="/premium" replace /> },
            { path: 'premium', element: <PremiumTab /> },
            { path: 'collectible', element: <CollectibleTab /> },
        ],
    },
    { path: '*', element: <NotFoundPage /> },
]);

const container = document.getElementById('root');

if (container) {
    const root = createRoot(container);

    root.render(
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    );
} else {
    throw new Error(
        "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file."
    );
}
