import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import EmployeeListPage from './pages/EmployeeListPage';

function App() {
  return (
    <div >
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/employees" element={<EmployeeListPage />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
