import { jsx as _jsx } from 'react/jsx-runtime';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
const root = createRoot(document.getElementById('root'));
root.render(
  _jsx(React.StrictMode, {
    children: _jsx(BrowserRouter, { children: _jsx(App, {}) }),
  })
);
