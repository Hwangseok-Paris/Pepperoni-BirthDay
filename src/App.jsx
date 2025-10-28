import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="w-screen min-h-screen bg-gray-900 text-gray-100 px-5 py-15">
        <Outlet />
      </div>
    </>
  );
}

export default App;
