import React from 'react';
import {createRoot} from 'react-dom/client';
import Page from './ld51/components/Page.jsx';

const container = document.getElementById('ld51');
const root = createRoot(container);
root.render(<Page title="LD51"/>);

