import Banner from "../components/banner";
import Navbare from "../components/Navbare";
import Ledimg from "../assets/Led img.png";
import Keyboardimg from "../assets/Keyboard img.png";
import Footer from "../components/Footer";

export default function Quantity() {
  return (
    <>
      <div>
        <Banner />

        <Navbare />
        <div className="flex">
          <h2>Home /</h2>
          <h2>Cart</h2>
        </div>

        <table className="w-[100%] mt-11">
        <thead>

          <tr className="h-[72px] rounded	">
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
          </thead>

          <tr className="h-[102px] rounded">
            <td className="flex gap-3">
              <img src={Ledimg} className="w-14 h-14" />
              <p className="center"> Led TV</p>
            </td>
            <td>$450</td>
            <td>
              <input type="number" className="border-2 w-[72px] h-11" />
            </td>
            <td>$450</td>
          </tr>
          <tfoot>

          <tr>
            <td className="flex gap-3">
              <img src={Keyboardimg} className="w-14 h-14" />
              <p className="center"> KeyBoard </p>
            </td>
            <td>$250</td>
            <td>
              <input type="number" className="border-2 w-[72px] h-11" />
            </td>
            <td>$250</td>
          </tr>
          </tfoot>


        </table>
        <div className="gap-[757px] flex ">
          <button className="border-2 w-64 h-14 rounded	">Return To Shop</button>
          <button className="border-2 w-64 h-14 rounded	">Update Cart</button>
        </div>
        <div className="h-[324px] flex gap-[173px] mt-11">
          <div className="flex">
            {" "}
            <input
              type="text"
              placeholder="Coupon Code"
              className="w-[300px] h-14 border-2 border-gray-300 mr-6 p-2"
            />
            <button className="bg-primary w-[211px] h-14 text-white">
              Apply Coupon
            </button>
          </div>

          <div className="w-[470px] h-[324px] border-2 border-black text-center p-4">
            <table className="w-[100px] border-t-0 border-black  ">
              <tr className="h-[72px] 	 border border-t-0	border-l-0	 border-r-0">
                <td>Subtotal:</td>
                <td>$1750</td>
              </tr>
              <tr className="h-[72px]  border border-t-0	border-l-0	 border-r-0	">
                <td>Shipping:</td>
                <td>Free</td>
              </tr>
              <tr className="h-[72px] 	">
                <td>Total:</td>
                <td>$1750</td>
              </tr>
              <button className="bg-primary w-[260px] h-14 text-white ml-12">
                Apply Coupon
              </button>
            </table>{" "}
          </div>
        </div>
      </div>
      <Footer />

    </>
  );
}