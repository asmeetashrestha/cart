import React from "react";

const ShoppingCart = () => {
    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            {/* <div className="w-full h-2 bg-gray-500">ad section</div> */}
            <h1 className="text-3xl mb-6">Your Jeevee Shopping Cart</h1>
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Product List Section */}
                <div className="flex-grow">
                    <div className="border-b pb-4 mb-4 space-y-4">
                        {/* Product Item */}
                        <div className="flex items-center gap-4 mb-4">
                            <div>
                                <input
                                    type="checkbox"
                                    name="" id="" className="w-6 h-6 rounded-md checked:bg-pink-600 checked:border-pink-600"
                                />
                            </div>
                            <div className="flex justify-between w-full">
                                <img
                                    src="https://via.placeholder.com/100" // Replace with actual image URL
                                    alt="Basic Tee"
                                    className="w-24 h-24 object-cover rounded-md mr-2"
                                />
                                <div className="flex-grow">
                                    <h2 className="text-lg font-semibold">Basic Tee</h2>
                                    <p className="text-sm text-gray-500">
                                        Sienna • Large
                                    </p>
                                    <div className="flex space-x-2 items-center">
                                        <button  className="p-2 text-2xl"> <i class="bi bi-dash"></i>                                        </button>
                                        <strong className="text-2xl"> 5 </strong>
                                        <button className="p-2 text-2xl" > <i class="bi bi-plus-lg"></i>                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col h-full justify-between">
                                <button className="text-gray-500 hover:text-red-500 self-end">
                                    ✖
                                </button>
                                <div className=" flex w-1/2 space-x-2">
                                    <span className="line-through text-nowrap">NPR 319</span> <p>-15%</p> <strong className="text-nowrap text-green-700">NPR 215</strong>
                                </div>
                                <p className="self-end">&#91;  includive all tax&#93;</p>
                            </div>
                        </div>

                        {/* Another Product */}
                        <div className="flex items-center gap-4 mb-4">
                            <div>
                                <input
                                    type="checkbox"
                                    name="" id="" className="w-6 h-6 rounded-md checked:bg-pink-600 checked:border-pink-600"
                                />
                            </div>
                            <div className="flex justify-between w-full">
                                <img
                                    src="https://via.placeholder.com/100" // Replace with actual image URL
                                    alt="Basic Tee"
                                    className="w-24 h-24 object-cover rounded-md mr-2"
                                />
                                <div className="flex-grow">
                                    <h2 className="text-lg font-semibold">Basic Tee</h2>
                                    <p className="text-sm text-gray-500">
                                        Sienna • Large
                                    </p>
                                    <div className="flex space-x-2 items-center">
                                        <button  className="p-2 text-2xl"> <i class="bi bi-dash"></i>                                        </button>
                                        <strong className="text-2xl"> 5 </strong>
                                        <button className="p-2 text-2xl" > <i class="bi bi-plus-lg"></i>                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col h-full justify-between">
                                <button className="text-gray-500 hover:text-red-500 self-end">
                                    ✖
                                </button>
                                <div className=" flex w-1/2 space-x-2">
                                    <span className="line-through text-nowrap">NPR 319</span> <p>-15%</p> <strong className="text-nowrap text-green-700">NPR 215</strong>
                                </div>
                                <p className="self-end">&#91;  includive all tax&#93;</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Order Summary Section */}
                <div className="w-full lg:w-1/3 bg-white p-6 shadow-md rounded-md">
                    <h2 className="text-2xl font-semibold mb-8 after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-gray-200 after:bottom-[-10px] after:start-0 relative ">Order summary</h2>
                    <div className="mb-4">
                        <div className="flex justify-between text-sm">
                            <p>Total</p>
                            <p>NPR 99.00</p>
                        </div>
                        <div className="flex justify-between text-sm">
                            <p>
                                Discount
                            </p>
                            <p>- NPR 5.00</p>
                        </div>
                        <div className="flex flex-col py-5">
                        <div className="flex justify-between p-5">
                        <i class="bi bi-exclamation-circle text-2xl mr-2"></i>

                            <p>Delivery charge may vary depending on the shipping address of your order.</p>
                        </div>
                        <p className="self-end">&#91;  includive all tax &#93;</p>

                        </div>
                    </div>
                    <div className="flex justify-between text-lg font-semibold mb-6 text-sky-700">
                        <p>Grand total &#91;2 items&#93;</p>
                        <p>NPR 112.32</p>
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