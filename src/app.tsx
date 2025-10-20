import { BrowserRouter, Route, Routes } from 'react-router'
import { HomeScreen } from './views'
import { AppProvider } from './providers'
import './i18n/i18n'

export default function App() {
    return (
        <AppProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomeScreen />} />
                </Routes>
            </BrowserRouter>
        </AppProvider>
    )
}
