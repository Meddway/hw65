import {Routes, Route} from 'react-router-dom';
import Toolbar from './components/Toolbar/Toolbar';
import InfoPages from './container/InfoPages/InfoPages';
import AdminPage from './container/AdminPage/AdminPage';

const App = () => {
  return (
    <div>
      <Toolbar/>
      <Routes>
        <Route path="/pages/:pageName" element={<InfoPages/>}/>
        <Route path="/pages/admin" element={<AdminPage />} />
      </Routes>
    </div>
  );
};

export default App;
