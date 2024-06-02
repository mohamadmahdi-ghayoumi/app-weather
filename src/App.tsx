
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return <RouterProvider router={router} />;
//   return   <Router>
//   <Routes>
//     <Route path="/" element={<Login />} />
//     {/* <Route path="weather" element={<WeatherPage />} /> */}
//   </Routes>
// </Router>
}

export default App;