import Footer from "./components/Footer";
import Header from "./components/Header";
import TournamentList from "./pages/Tournament/TournamentList";
import TournamentCard from "./pages/Tournament/TournamentCard";
import TournamentForm from "./pages/Tournament/TournamentForm";
import HomePage from "./pages/HomePage";
import TeamPage from "./pages/TeamPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CalendarPage from "./pages/CalendarPage";
import CategoriesForm from "./pages/Categories/CategoriesForm";
import CategoriesList from "./pages/Categories/CategoriesList";
import TeamList from "./pages/Teams/TeamList";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          {/* Calendar  */}
          <Route path="/calendar" element={<CalendarPage />}></Route>
          {/* Torneo  */}
          <Route
            path="/tournaments/create"
            element={<TournamentForm />}
          ></Route>
          <Route path="/tournaments" element={<TournamentList />}></Route>
          <Route path="/tournament/:id" element={<TournamentCard />}></Route>
          {/* Categorias  */}
          <Route
            path="/tournament/:id/category/create"
            element={<CategoriesForm />}
          ></Route>
          <Route
            path="/tournament/:id/categories"
            element={<CategoriesList />}
          ></Route>
          <Route
            path="/tournament/:id/category/:id/teams"
            element={<TeamList />}
          ></Route>

          <Route
            path="/tournament/:idTorneo/category/:idCategory/teams/:id"
            element={<h1>hss</h1>}
          />

          {/* Equipos  */}
          <Route path="/category/team/create" element={<TeamPage />}></Route>
          {/* Jugadores */}
          <Route path="/players" element={<TeamPage />}></Route>
        </Routes>
      </BrowserRouter>
      {/*       <Footer />
       */}
    </>
  );
}

export default App;
