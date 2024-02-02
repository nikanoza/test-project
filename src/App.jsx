import { Navigate, Route, Routes } from "react-router-dom";
import store from "./store";
import Home from "./pages/home";
import { useEffect } from "react";
import Currency from "./pages/Currency";
import Airports from "./pages/Airports";

function App() {
  const activeCountry = store((state) => state.activeCountry);
  const getCountriesData = store((state) => state.getCountriesData);

  useEffect(() => {
    getCountriesData();
  }, [getCountriesData]);
  return (
    <main>
      <header>
        {/* {ლოგო} */}
        {activeCountry && "" /* {ნავიგაცია} */}
      </header>
      <Routes>
        <Route
          path="/"
          element={Navigate({ to: "/countries", replace: true })}
        />
        <Route path="/countries" element={<Home />} />
        <Route path="/countries/:name/currency" element={<Currency />} />
        <Route path="/countries/:name/airports" element={<Airports />} />
      </Routes>
    </main>
  );
}

export default App;
