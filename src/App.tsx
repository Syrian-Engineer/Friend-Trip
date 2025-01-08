import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import HomePage from "./Layouts/MainPage/HomePage"
import AuthPage from "./Layouts/LoginPage/AuthPage"
import NewTrip from "./Layouts/NewTrip/Component/NewTrip/NewTrip"

const App = () => {
  return (
    <div className="">
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
         {/* Route for the login page */}
        <Route path="/Auth" element={<AuthPage />} />
          {/* Nested route for NewTrip */}
         <Route path="/newTrip" element={<NewTrip />} />
          
        
      </Routes>
    </Router>
    </div>
  )
}

export default App