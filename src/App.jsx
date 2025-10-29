import "./App.css";
import { Outlet, ScrollRestoration } from "react-router-dom";

function App() {
  return (
    <>
      <div className="w-screen min-h-screen bg-gray-900 text-gray-100 px-3 py-15">
        <ScrollRestoration />
        <Outlet />
      </div>
    </>
  );
}

export default App;
