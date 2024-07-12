import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Inicio from "./pages/Inicio";
import Sobre from "./pages/Sobre";
import Apadrinhe from "./pages/Apadrinhe";
import Adote from "./pages/Adote";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Contato from "./pages/Contato";
import Privacidade from "./pages/Privacidade";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <main className="conteudo">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/apadrinhe" element={<Apadrinhe />} />
          <Route path="/adote" element={<Adote />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/privacidade" element={<Privacidade />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

/* Funcionamento:

O estado isLoggedIn começa como false (usuário não logado).

Ao clicar em "Entrar", a função handleLogin no App é chamada, definindo isLoggedIn para true e o nome do usuário.

O Navbar re-renderiza, mostrando a mensagem de boas-vindas e o link "Perfil".

Ao clicar em "Logout", handleLogout é chamado, definindo isLoggedIn para false e limpando o nome do usuário.

O Navbar atualiza novamente, exibindo a mensagem de não logado. */
