const Navbar = () => {
  return (
    <div class="sticky top-0 z-[1000] bg-white">
      {" "}
      <div class="bg-[#d3066d] text-white">
        <div class="w-11/12 sm:w-4/5 py-3 m-auto text-[12px] ">
          <div>
            <span class="hidden md:inline">Customer Care: </span>
            <a
              class=" tracking-tight"
              href="tel:+Need Help ? Just Call -  01310202026 ( 10 AM to 6 PM only)"
            >
              Need Help ? Just Call - 01310202026 ( 10 AM to 6 PM only)
            </a>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div class="flex justify-between w-11/12 sm:w-4/5 py-2 m-auto">
        <a class="cursor-pointer pt-1 pr-8" href="/">
          <img
            className="self-center w-full"
            src="https://klassy.com.bd/public/uploads/settings/general/lrChtKFxC6of10DxZNezmW2eFIejECHWnZglkIHG.png"
            alt=""
          />
        </a>
        <div class="py-3 sm:inline hidden lg:w-[470px] md:w-[370px]">
          <input
            type="text"
            id="search"
            class="focus:outline-none focus:ring-1 focus:ring-red-500 border rounded-2xl px-4 py-1 w-full placeholder:text-xs"
            placeholder="Search for products"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            class="w-5 h-5 md:w-6 md:h-6 inline -ml-10 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
        <div class="flex justify-center items-center text-[12px] lg:text-[13px]  ">
          <div class="pr-1 sm:pr-2 border-e-2 pl-2 uppercase text-center cursor-pointer">
            Sign In
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              class="ml-1 w-[15px] h-[15px] md:w-[20px] md:h-[20px] inline "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <div class="pl-2 uppercase text-center">
            My bag{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              class="ml-1 w-[15px] h-[15px] md:w-[20px] md:h-[20px] inline cursor-pointer "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="pt-0 pb-3 sm:hidden block w-[350px] m-auto">
        <input
          type="text"
          id="search"
          class="focus:outline-none focus:ring-1 focus:ring-red-500 border rounded-2xl px-4 py-1 w-full placeholder:text-xs"
          placeholder="Search for products"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          class="w-5 h-5 inline -ml-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
      <div class="bg-white w-full border-y">
        <div class="w-[95%] sm:w-[80%] m-auto overflow-auto">
          <div class="flex justify-between md:justify-center m-auto py-2 text-[13px] font-semibold text-[#646464] font-sans">
            <a class="mx-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                class="w-6 h-6 inline"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </a>
            <a class="mx-4 hover:text-[#d3066d]" href="/">
              HOME
            </a>
            <a class="mx-4  hover:text-[#d3066d] " href="/brands">
              BRANDS
            </a>
            <a class="mx-4  hover:text-[#d3066d] " href="/pre-order">
              PREORDER
            </a>
            <a class="mx-4  hover:text-[#d3066d] " href="/campaigns">
              CAMPAIGNS
            </a>
            <a
              aria-current="page"
              class="mx-4 hover:text-[#d3066d] "
              href="/coupons"
            >
              COUPONS
            </a>
            <a class="mx-4 hover:text-[#d3066d]" href="/discounts">
              DISCOUNTS
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
