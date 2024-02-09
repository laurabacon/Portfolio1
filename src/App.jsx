import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <main className="mx-3">
        <Header />
        <Outlet />
        <Footer />
      </main>
    </>
  );
}

export default App;
