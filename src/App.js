import Header from "./components/Header"; // Подключаем шапку
import Experiences from "./components/Experiences"; // Подключаем карточки
import "./App.css"; // Подключаем общие стили

function App() {
  return (
    <div className="app">
      <Header />
      <Experiences />
    </div>
  );
}

export default App;