import BillPayments from "./pages/BillPayments";
import Landing from "./pages/Landing";
import RentPayments from "./pages/RentPayments";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/landing" element={<Landing />} />
        <Route path="/bill-payments" element={<BillPayments />} />
        <Route path="/rent-payments" element={<RentPayments />} />
      </Routes>
    </Router>
  );
};

export default App;
