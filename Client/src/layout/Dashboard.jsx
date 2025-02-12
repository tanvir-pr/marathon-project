
import { Link } from "react-router-dom";
import Pagetittle from "../component/Pagetittle";

const Dashboard = () => {
    return (
    //     <div>
    //          <Pagetittle
    //         favicon="/assets/favicon.png"
    //             title="Dashboard"></Pagetittle>
    //             <div className="container mx-auto p-6">
    //         <h1 className="text-3xl font-bold text-center mb-8">Dashboard</h1>
    //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    //             {/* My Marathons */}
    //             <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
    //                 <h2 className="text-xl font-semibold mb-2">My Marathons</h2>
    //                 <p className="text-gray-600 mb-4">View and manage the marathons you created.</p>
    //                 <Link
    //                     to="/myMarathonPage"
    //                     className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
    //                 >
    //                     Go to My Marathons
    //                 </Link>
    //             </div>

    //             {/* My Apply List */}
    //             <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
    //                 <h2 className="text-xl font-semibold mb-2">My Apply List</h2>
    //                 <p className="text-gray-600 mb-4">View marathons you have applied for.</p>
    //                 <Link
    //                     to="/applypage"
    //                     className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
    //                 >
    //                     Go to My Apply List
    //                 </Link>
    //             </div>

    //             {/* Create Marathon */}
    //             <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
    //                 <h2 className="text-xl font-semibold mb-2">Create Marathon</h2>
    //                 <p className="text-gray-600 mb-4">Create a new marathon for others to register.</p>
    //                 <Link
    //                     to="/addMarathon"
    //                     className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
    //                 >
    //                     Create Marathon
    //                 </Link>
    //             </div>

    //             {/* All Marathons */}
    //             <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
    //                 <h2 className="text-xl font-semibold mb-2">All Marathons</h2>
    //                 <p className="text-gray-600 mb-4">Explore all available marathons.</p>
    //                 <Link
    //                     to="/marathons"
    //                     className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
    //                 >
    //                     Browse Marathons
    //                 </Link>
    //             </div>
    //         </div>
    //     </div>
        // </div>
        <div>
  <Pagetittle favicon="/assets/favicon.png" title="Dashboard" />
  <div className="container mx-auto pt-16 p-6">
    <h1 className="text-3xl font-bold text-center mb-8 text-yellow-600">Dashboard</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* My Marathons */}
      <div className="p-6 border rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out bg-yellow-50 hover:bg-yellow-100">
        <h2 className="text-xl font-semibold mb-2 text-yellow-700">My Marathons</h2>
        <p className="text-gray-600 mb-4">View and manage the marathons you created.</p>
        <Link
          to="/myMarathonPage"
          className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition duration-300 ease-in-out"
        >
          Go to My Marathons
        </Link>
      </div>

      {/* My Apply List */}
      <div className="p-6 border rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out bg-yellow-50 hover:bg-yellow-100">
        <h2 className="text-xl font-semibold mb-2 text-yellow-700">My Apply List</h2>
        <p className="text-gray-600 mb-4">View marathons you have applied for.</p>
        <Link
          to="/applypage"
          className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition duration-300 ease-in-out"
        >
          Go to My Apply List
        </Link>
      </div>

      {/* Create Marathon */}
      <div className="p-6 border rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out bg-yellow-50 hover:bg-yellow-100">
        <h2 className="text-xl font-semibold mb-2 text-yellow-700">Create Marathon</h2>
        <p className="text-gray-600 mb-4">Create a new marathon for others to register.</p>
        <Link
          to="/addMarathon"
          className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition duration-300 ease-in-out"
        >
          Create Marathon
        </Link>
      </div>

      {/* All Marathons */}
      <div className="p-6 border rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out bg-yellow-50 hover:bg-yellow-100">
        <h2 className="text-xl font-semibold mb-2 text-yellow-700">All Marathons</h2>
        <p className="text-gray-600 mb-4">Explore all available marathons.</p>
        <Link
          to="/marathon"
          className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition duration-300 ease-in-out"
        >
          Browse Marathons
        </Link>
      </div>
    </div>
  </div>
</div>

    );
};

export default Dashboard;
