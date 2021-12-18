import { Routes, Route, Link} from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Auth } from './pages/Auth';
function App() {
  return (
<>
    <header>
        <Link to='/'>Домашняя страница</Link>
        <Link to='/about'>Резюме</Link>
        <Link to='/auth'>Авторизация</Link>
    </header>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
</>
  );
}

export default App;
