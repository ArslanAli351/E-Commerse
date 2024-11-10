import Frame from "../assets/Frame 721.png";

export default function Footer() {
  return (
    <>
      <div className="mt-[80px] border-2 h-[440px] bg-black text-white flex gap-[87px] p-7 ">
        <div className="w-[217px]  h-[188px] gap-4 flex flex-col mt-[120px] ">
          <h1 className="font-bold	font_3">Exclusive</h1>
          <p>Subscribe</p>
          <p>Get 10% off your first order</p>
          <div className=" flex align-center gap-3 border-2 p-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="outline-none  bg-transparent  "
            />
            <button className="-ml-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.91196 12H3.99996L2.02296 4.13505C2.0103 4.08934 2.00259 4.0424 1.99996 3.99505C1.97796 3.27405 2.77196 2.77405 3.45996 3.10405L22 12L3.45996 20.896C2.77996 21.223 1.99596 20.737 1.99996 20.029C2.00198 19.9658 2.0131 19.9031 2.03296 19.843L3.49996 15"
                  stroke="#FAFAFA"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>{" "}
        <div className="w-[175px] h-44 gap-4 flex flex-col mt-[120px]">
          <h1 className="font-bold	font_1">Support</h1>
          <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>
        <div className="w-[123px]  h-60 gap-4 flex flex-col mt-[120px]">
          <h1 className="font-bold	font_1">Account</h1>
          <p>My Account</p>
          <p>Login / Register</p>
          <p>Cart</p>
          <p>Wishlist</p>
          <p>Shop</p>
        </div>
        <div className="w-[123px]  h-60 gap-4 flex flex-col mt-[120px]">
          <h1 className="font-bold	font_1">Quick Link</h1>
          <p>Privacy Policy</p>
          <p>Terms Of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>
        <div className="w-[198px]  h-[210px] gap-4 flex flex-col mt-[120px]">
          {/* <h1 className="font-bold	font_1">Download App</h1> */}
          <img src={Frame} alt="" />
        </div>
      </div>
    </>
  );
}