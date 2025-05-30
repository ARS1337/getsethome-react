import Header from "../components/Header";
import Footer from "../components/Footer";
import { footerBillPayments } from "../mockData";
import "../styles/bill-payments.css"
import { tableHeaders, tableData } from "../mockData";
import TableContainer from "../components/TableContainer";
export default function BillPayments(){
    return (
        <>
          <Header>Bill Payments</Header>
          <main>
            <TableContainer headers={tableHeaders} data={tableData}/>
            <div className="bottom-placeholder-bill-payments"></div>
            <Footer icons={footerBillPayments} />
          </main>
        </>
      );
}