import './App.css';
import LoginScreen from './screens/Login/LoginScreen';
import Dashboard from './screens/Dashboard/Dashboard';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import {PAGE_ROUTES} from './constants/route-constants'; 

function App() {

  return (
    <Router>
        <div className="App">
            <Routes>
                <Route
                    exact
                    path="/"
                    element={<LoginScreen />}
                />
                <Route
                    exact
                    path={PAGE_ROUTES.DASHBOARD}
                    element={<Dashboard />}
                />
                {/* <Route
                    exact
                    path="/contact"
                    element={<Contact />}
                /> */}
            </Routes>
        </div>
    </Router>
  );
}

export default App;
