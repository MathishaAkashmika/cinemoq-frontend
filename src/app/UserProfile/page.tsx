import Navbar from "../components/Navbar";

const UserProfile = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-br from-purple-800 to-black min-h-screen">
        <h3 className="text-4xl font-bold text-white text-center  mb-6">
          Account Information
        </h3>

        <div className="flex justify-center items-center">
          <div className="w-[700px] bg-gray-900 rounded-xl p-8 shadow-2xl text-white border border-gray-700">
            <div className="flex items-center mb-6 gap-16 border-2 border-gray-700 rounded-lg p-4 shadow-md">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-4 border-purple-500 shadow-md">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Profile"
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="flex gap-6">
                <button className="px-4 py-2 bg-white text-green-400 font-semibold rounded-md text-sm">
                  <i className="fa-solid fa-upload"></i> UPLOAD
                </button>
                <button className="px-4 py-2 bg-white text-purple-500 font-semibold rounded-md text-sm">
                  REMOVE
                </button>
              </div>
            </div>

            <form>
              <div className="border-2 border-gray-700 p-4">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm mb-1">First Name</label>
                    <input
                      type="text"
                      className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Last Name</label>
                    <input
                      type="text"
                      className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-purple-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm mb-1">Mobile Number</label>
                    <input
                      type="text"
                      className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Gender</label>
                    <select className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-purple-500">
                      <option>Select Gender</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-purple-500"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm mb-1">Address</label>
                  <input
                    type="text"
                    className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-purple-500"
                  />
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6 border-2 border-gray-700 p-4 mt-5">
                <div className="flex-1">
                  <label className="block text-sm mb-1">Password</label>
                  <input
                    type="password"
                    className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-purple-500"
                  />
                </div>
                <button className="px-4 py-2 bg-purple-600 rounded-md hover:bg-purple-700 text-sm mt-6 font-semibold">
                  CHANGE PASSWORD
                </button>
              </div>

              <div className="flex justify-between items-center mt-8 border-t border-gray-700 pt-4">
                <div className="flex gap-4">
                  <button className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 text-sm">
                    SAVE
                  </button>
                  <button className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 text-sm">
                    CANCEL
                  </button>
                </div>
                <button className="px-6 py-2 bg-white text-red-600 rounded-md text-sm font-semibold">
                  DELETE ACCOUNT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
