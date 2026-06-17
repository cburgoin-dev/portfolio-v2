import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './styles/variables.css'; 
import './styles/layout.css';
import './index.css'
import App from './App.tsx'
import { LanguageProvider } from './translations/LanguageContext.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <LanguageProvider>
            <App />
        </LanguageProvider>
    </StrictMode>,
)
