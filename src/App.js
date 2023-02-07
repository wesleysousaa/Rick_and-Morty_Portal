import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Pages
import Home from './pages/Home/Home';
import Person from './pages/Persons/Persons';

// Components
import Menu from './components/Menu/Menu';

// Providers
import { PageContextProvider } from './context/pageContext'

function App() {
  return (
    <div className='App'>
      <PageContextProvider>
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/persons' element={<Person />} />
          </Routes>
        </BrowserRouter>
      </PageContextProvider>
    </div>
  );
}

export default App;
