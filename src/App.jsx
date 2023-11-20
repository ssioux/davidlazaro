import "./app.scss";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import MainDashBoard from "./components/Dashboard/MainDashBoard";
import Chess from "./components/Chess/Game";
import Error from "./components/error/Error";
import NotFound from "./components/error/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/chess" element={<Chess />} />
          <Route path="/dashboard" element={<MainDashBoard />} />
          {/* Error Pages */}
   
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
