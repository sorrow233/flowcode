import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import DownloadPage from './pages/DownloadPage'
import VisionPage from './pages/VisionPage'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="download" element={<DownloadPage />} />
                    <Route path="vision" element={<VisionPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
