const CheckoutPage = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(142.9deg, rgba(113, 9, 129, 1) 0%, rgba(0, 0, 0, 1) 51.5%)",
      }}
      className="min-h-screen flex justify-center items-center"
    >
      {/** Sample comment */}
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl w-full bg-black text-white">
        <div className="bg-gray-800  p-6">
          <h2 className="text-2xl font-bold mb-12">BOOKING SUMMARY</h2>
          <div className="mb-8">
            <p className="text-sm text-gray-400">MOVIE TITLE</p>
            <p className="font-semibold">SPIDERMAN NO WAY HOME</p>
          </div>
          <div className="mb-8">
            <p className="text-sm text-gray-400">Date</p>
            <p className="font-semibold">Mon, 23 Oct 2023</p>
          </div>
          <div className="flex justify-between mb-10">
            <div>
              <p className="text-sm text-gray-400">TICKETS</p>
              <p className="font-semibold">C8, C9, C10</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">HOURS</p>
              <p className="font-semibold">14:40</p>
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-400">Transaction Detail</p>
            <p className="flex justify-between">
              REGULAR SEAT <span>LKR 55.70 x3</span>
            </p>
            <p className="flex justify-between">
              Service Charge (6%) <span>LKR 3.30 x3</span>
            </p>
            <p className="flex justify-between font-bold mt-2 border-t pt-2">
              Total Payment <span>LKR 62.10</span>
            </p>
          </div>
        </div>

        <div className="bg-black p-6">
          <h2 className="text-2xl font-bold mb-4">Payment Details</h2>
          <div className="flex gap-4 mb-10">
            <label className="flex items-center gap-1">
              <input type="radio" name="payment" /> Paypal
            </label>
            <label className="flex items-center gap-1">
              <input type="radio" name="payment" /> Credit Card
            </label>
            <label className="flex items-center gap-1">
              <input type="radio" name="payment" /> Visa
            </label>
          </div>
          <input
            type="text"
            placeholder="Card Number"
            className="w-full p-2 mb-4 bg-gray-800 text-white rounded"
          />
          <div className="flex gap-4 mb-4">
            <input
              type="text"
              placeholder="MM/YY"
              className="w-1/2 p-2 bg-gray-800 text-white rounded"
            />
            <input
              type="text"
              placeholder="CVV"
              className="w-1/2 p-2 bg-gray-800 text-white rounded"
            />
          </div>
          <input
            type="text"
            placeholder="Name On Card"
            className="w-full p-2 mb-4 bg-gray-800 text-white rounded"
          />
          <input
            type="text"
            placeholder="Discount Code"
            className="w-full p-2 mb-4 bg-gray-800 text-white rounded"
          />
          <label className="flex items-center gap-2 text-sm mb-8 mt-4">
            <input type="checkbox" />
            By clicking this, I agree to Ticketer Privacy Policy
          </label>
          <button className="w-full py-2 bg-purple-700 text-white rounded hover:bg-purple-800">
            Pay LKR 800
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
