import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Todo from './Todo';
import { AppContextProvider } from './context/AppContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppContextProvider>

        <Todo />
    </AppContextProvider>
);

