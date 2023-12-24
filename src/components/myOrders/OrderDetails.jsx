// // // Write all the code here
const OrderDetails = () => {
  return (
    <div className="orderDetails">
      <main>
        <h1>ORDER DETAILS</h1>
        <div>
          <h1> SHIPPING </h1>
          <p>ADDRESS SJDA 12 - 32aa dsad</p>
        </div>
        <div>
          <h1>CONTACT</h1>
          <p>Name Stuart</p>
          <p>Phone 2131232123</p>
        </div>
        <div>
          <h1>STATUS</h1>
          <p>Order Status Processing</p>
          <p>Placed At 23-02 - 2002</p>
          <p>Delivered At 23-02 - 2003</p>
        </div>
        <div>
          <h1>PAYMENT</h1>
          <p>Payment Method COD</p>
          <p>Payment Reference #asdasdsadsad</p>
          <p>Paid At 23-02 - 2003</p>
        </div>
        <div>
          <h1>AMOUNT</h1>
          <p>Items Total ₹2132</p>
          <p>Tax ₹360</p>
          <p>Total Amount ₹2564</p>
        </div>

        <article>
          <h1>ORDER ITEMS </h1>
          <div>
            <h4>
              Cheese Burger <span style={{ marginLeft: "489px" }}>12x232</span>
            </h4>
          </div>
          <div>
            <h4>
              Veg Cheese Burger{" "}
              <span style={{ marginLeft: "432px" }}>10x500</span>
            </h4>
          </div>
          <div>
            <h4>
              Burger Fries <span style={{ marginLeft: "504px" }}>10x1800</span>
            </h4>
          </div>
          <div>
            <h4>
              Sub Total <span style={{ marginLeft: "555px" }}>12x232</span>
            </h4>
          </div>
        </article>
      </main>
    </div>
  );
};
export default OrderDetails;
