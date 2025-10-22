import { BrowserRouter, Route, Routes } from 'react-router'
import { HomeScreen } from './views'
import { AppProvider } from './providers'
import './i18n/i18n'
import { Profiler } from 'react'
import { useProfiler } from './hooks'

export default function App() {
    const { onRender } = useProfiler('App')
    return (
        <Profiler id="App" onRender={onRender}>
            <AppProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<HomeScreen />} />
                    </Routes>
                </BrowserRouter>
            </AppProvider>
        </Profiler>
    )
}
