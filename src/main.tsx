import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import './index.css';
import { App } from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';




import {NotFoundPage} from "./components/not-found-page/not-found-page.tsx";

import {Premium} from "../src/components/pages/premium/premium.tsx";
import {Collectible} from "../src/components/pages/collectible/collectible.tsx";



const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { index: true, element: <Navigate to="/premium" replace /> },
            { path: 'premium', element: <Premium /> },
            { path: 'collectible', element: <Collectible /> },
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
