import React from 'react';
import { Link, Outlet } from 'react-router';
import Header from './ui/header';

const Layout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <h1>Layout One</h1>
            <main className="flex-grow container mx-auto px-4 py-8">
                <Outlet />
            </main>

            <footer className="bg-gray-200">
                <div className="container mx-auto px-4 py-4 text-center text-gray-600">
                    © 2023 Your Company Name. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default Layout;

