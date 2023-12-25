import Header from "./components/Header.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/signup" Component={Signup}/>
          <Route path="/login" Component={Login}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
