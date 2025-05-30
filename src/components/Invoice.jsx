import "../styles/invoice.css";

export default function Invoice({ invoices }) {
  return (
    <>
      {invoices.map((invoice) => (
        <div class="d-flex justify-between" style={{ paddingBottom: "0.5rem" }}>
          <div class="invoice-details">
            <div class="invoice-text">
              Rent Invoice <span>{invoice.date}</span>
            </div>
            <div>
              <div class="invoice-amount">{invoice.amount}</div>
              {!invoice.isPaid && <div class="due-date">{`Due date ${invoice.dueDate}`}</div>}
            </div>
          </div>
          <div class="invoice-payment">
            <div class="invoice-id">INVRT123456AD</div>
            {!invoice.isPaid ? (
              <div class="d-flex justify-between">
                <div>
                  <div class="payment-status">PAID</div>
                  <div class="payment-date">{`on ${invoice.paidDate}`}</div>
                </div>
                <div class="download-icon">
                  <img src="https://img.icons8.com/ios/50/download--v1.png" alt="download--v1" />
                </div>
              </div>
            ) : (
              <div class="pay-now-button">Pay Now</div>
            )}
          </div>
        </div>
      ))}
    </>
  );
}
