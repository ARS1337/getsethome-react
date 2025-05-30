import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/rent-payments.css";
import { footerRentPayments } from "../mockData";
import { invoices } from "../mockData";
import Invoice from "../components/Invoice";

export default function RentPayments() {
  return (
    <>
      <Header>Rent Payments</Header>
      <main>
        <div className="invoice-container">
            <Invoice invoices={invoices}/>
        </div>
        <div className="bottom-placeholder-rent-payments"></div>
        <Footer icons={footerRentPayments} />
      </main>
    </>
  );
}
