import {Routes, Route} from 'react-router-dom';
import Toolbar from './components/Toolbar/Toolbar';
import InfoPages from './container/InfoPages/InfoPages';

const App = () => {
  return (
    <div>
      <Toolbar/>
      <Routes>
        <Route path="/pages/:pageName" element={<InfoPages/>}/>
      </Routes>
    </div>
  );
};

export default App;
