import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import Produtos from './components/Produtos';
import Produto from './components/Produto';
import Contato from './components/Contato';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <div className="main">
            <BrowserRouter>
                <Header />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Produtos />} />
                        <Route path="produto/:id" element={<Produto />} />
                        <Route path="contato" element={<Contato />} />
                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;