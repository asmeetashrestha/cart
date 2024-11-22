import React from "react";
import { useSelector } from "react-redux";

const ShoppingCart = () => {
  // Fetch the cart data from Redux
  const cart = useSelector((state) => state.cart);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateDiscount = () => {
    return cart.reduce(
      (discount, item) =>
        discount + (item.discountPrice - item.price) * item.quantity,
      0
    );
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl mb-6">Your Jeevee Shopping Cart</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Product List Section */}
        <div className="flex-grow">
          <div className="border-b pb-4 mb-4 space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center gap-4 mb-4">
                <div>
                  <input
                    type="checkbox"
                    className="w-6 h-6 rounded-md checked:bg-pink-600 checked:border-pink-600"
                  />
                </div>
                <div className="flex justify-between w-full">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-md mr-2"
                  />
                  <div className="flex-grow">
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-sm text-gray-500">
                      {item.color} • {item.size}
                    </p>
                    <div className="flex space-x-2 items-center">
                      <button className="p-2 text-2xl">
                        <i className="bi bi-dash"></i>
                      </button>
                      <strong className="text-2xl">{item.quantity}</strong>
                      <button className="p-2 text-2xl">
                        <i className="bi bi-plus-lg"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col h-full justify-between">
                  <button className="text-gray-500 hover:text-red-500 self-end">
                    ✖
                  </button>
                  <div className="flex w-1/2 space-x-2">
                    <span className="line-through text-nowrap">
                      NPR {item.discountPrice}
                    </span>
                    <p>-{item.discountPercentage}%</p>
                    <strong className="text-nowrap text-green-700">
                      NPR {item.price}
                    </strong>
                  </div>
                  {item.inclusiveTax && (
                    <p className="self-end">&#91; inclusive of all tax &#93;</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary Section */}
        <div className="w-full lg:w-1/3 bg-white p-6 shadow-md rounded-md">
          <h2 className="text-2xl font-semibold mb-8 relative">
            Order summary
          </h2>
          <div className="mb-4">
            <div className="flex justify-between text-sm">
              <p>Total</p>
              <p>NPR {calculateTotal()}</p>
            </div>
            <div className="flex justify-between text-sm">
              <p>Discount</p>
              <p>- NPR {calculateDiscount()}</p>
            </div>
            <div className="flex flex-col py-5">
              <div className="flex justify-between p-5">
                <i className="bi bi-exclamation-circle text-2xl mr-2"></i>
                <p>
                  Delivery charge may vary depending on the shipping address of
                  your order.
                </p>
              </div>
              <p className="self-end">&#91; inclusive of all tax &#93;</p>
            </div>
          </div>
          <div className="flex justify-between text-lg font-semibold mb-6 text-sky-700">
            <p>Grand total &#91;{cart.length} items&#93;</p>
            <p>NPR {calculateTotal() - calculateDiscount()}</p>
          </div>
          <button className="w-full bg-pink-600 text-white py-2 rounded-md font-medium hover:bg-pink-700">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
