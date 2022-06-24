import './reset.css';
import {Main} from './pages/main';
import {Routes, Route} from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path='*' element={<Main />} />
    </Routes>
  );
};
