import "./App.css";
import { Outlet, ScrollRestoration } from "react-router-dom";

function App() {
  return (
    <>
      <div className="w-screen min-h-screen bg-[#fff8ef] text-[#1f1409] px-5 py-15">
        <ScrollRestoration />
        <Outlet />
      </div>
    </>
  );
}

export default App;
