import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { SkyContainer } from "sky-alert";
import "sky-alert/style.css";
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SkyContainer/>
    <App/>
  </StrictMode>
)
