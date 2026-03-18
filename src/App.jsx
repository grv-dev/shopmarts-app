import { useState } from 'react'
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState("home");
const renderPage = () => {
  switch (currentPage) {
      case "about":
      return <About />;
    case "contact":
      return <Contact />;
    default:
      return <Home />;
  }
};
  return (
    <div>
      <Header currentPage={currentPage}
    setCurrentPage={setCurrentPage}/>
    <main>
      {renderPage()}
    </main></div>
  );
}

export default App;
