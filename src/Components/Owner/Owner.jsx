import { Search } from "lucide-react";
import banner from "../../assets/images/banner/banner.jpg";
import bottomImage from "../../assets/images/banner/banner.jpg"; 

const Owner = () => {
  return (
    <section className="w-full">

      {/* ===================== TOP SECTION ===================== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-auto">

        {/* LEFT IMAGE */}
        <div className="h-72 md:h-96 lg:h-[450px] w-full">
          <img
            src={banner}
            alt="Owner section"
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col justify-center px-6 lg:px-16 py-6">
          <h2 className="text-3xl font-bold mb-4">Need a home loan? Get pre-approved</h2>

          <p className="text-gray-600 mb-6">
            Find a lender who can offer competitive mortgage rates and help you with pre-approval.
          </p>

          <button className="px-6 py-3 bg-green-700 hover:bg-green-800 text-white rounded-full w-fit">
            Get pre-approved now
          </button>

          <p className="text-xs text-gray-400 mt-4 underline cursor-pointer">Advertising disclosure</p>
        </div>
      </div>

      {/* ===================== BOTTOM SECTION ===================== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-0 items-stretch px-4 lg:px-0">

        {/* LEFT SIDE TEXT + SEARCH */}
        <div className="flex flex-col justify-center px-4 lg:px-20">
          <h2 className="text-3xl font-semibold mb-4">Get Local Info</h2>

          <p className="text-gray-600 mb-6 max-w-lg">
            Does it have pet-friendly rentals? How are the schools? Get important local
            information on the area you’re most interested in.
          </p>

          {/* SEARCH INPUT FIELD */}
          <div className="flex items-center w-full max-w-md bg-white rounded-full shadow border px-4 py-3">
            <input
              type="text"
              placeholder="Search ZIP or city"
              className="flex-1 outline-none bg-white"
            />

          <Search className="text-gray-500 ml-2 cursor-pointer" />
          </div>

          <p className="text-xs text-gray-400 mt-4 underline cursor-pointer">Advertising disclosure</p>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="h-80 md:h-[420px] w-full rounded overflow-hidden">
          <img
            src={bottomImage}
            alt="Local area"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default Owner;
