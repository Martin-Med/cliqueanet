import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { ForgotPassword } from './pages/ForgotPassword';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Intranet } from './pages/intranet';

function App(): JSX.Element {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      <main className="flex-1 pt-16 pb-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/intranet/*" element={<Intranet />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          // el path es el que se muestra en la URL en el navegador, y el element es el componente que se renderiza en esa ruta, 
          // el element es interno de la ruta, ese no se pone en el url porque no se va a ver en el navegador
        </Routes>
      </main>
      <Footer />
    </div>
  );
}


export default App;