import Navigation from "./navigation/Navigation";
import Home from "./Home/Home";

function App() {
  return (
    <div>
      <header className="absolute inset-x-0 top-0 z-50">
        <Navigation></Navigation>
      </header>

      <Home></Home>
    </div>
  );
}

export default App;
