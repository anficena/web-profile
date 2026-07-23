import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import CertificatesPage from './pages/CertificatesPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="sertifikat" element={<CertificatesPage />} />
      </Route>
    </Routes>
  )
}
