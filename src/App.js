import ChatDisplay from "./components/ChatDisplay";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
// import { Login } from "@mui/icons-material";
import Login from "./components/Login";
function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app__display">
              <Sidebar />
              <Routes>
                <Route exact path="/chat/:chatId" element={<ChatDisplay />} />
              </Routes>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
