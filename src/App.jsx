import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import MonitorPage from './pages/MonitorPage'
import './index.css'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/monitor" element={<MonitorPage />} />
        <Route path="/maintain" element={<HomePage />} />
        <Route path="/profile" element={<HomePage />} />
      </Routes>
    </HashRouter>
  )
}
