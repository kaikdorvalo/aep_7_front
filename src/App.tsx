import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/home/HomePage'
import { OcorrenciasPage } from './pages/ranking_location/OcurrencyPage'

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />,
      <Route path="/ocorrencias" element={<OcorrenciasPage />} />,
    </Routes>
  )
}

export default App
