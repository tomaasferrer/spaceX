import { Route, Routes } from "react-router-dom";
import { LaunchList } from "./components/LaunchList";
import { LaunchDetails } from "./components/LaunchDetails";
import { NavBar } from "./components/Navbar";
import { RocketDetails } from "./components/RocketDetails";

export function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/spaceX/" element={<LaunchList />} />
        <Route path="launch/:launchId" element={<LaunchDetails />} />
        <Route path="rockets/:rocketId" element={<RocketDetails />} />
      </Routes>
    </>
  );
}
