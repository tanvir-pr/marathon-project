import {Medal, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export default function WhyJoin() {
    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-6 md:px-12 text-center">
                {/* Header */}
                <h2 className="text-3xl font-bold text-gray-800">Why Join Our Marathon?</h2>
                <p className="text-gray-600 mt-2">Experience the thrill, challenge yourself, and be part of an incredible journey!</p>

                {/* Features Grid */}
                <div className="grid md:grid-cols-4 gap-8 mt-10">
                    {/* Health Benefits */}
                    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
                        {/* <Running className="text-blue-500 w-12 h-12 mb-3" /> */}
                        <Clock className="text-red-500 w-12 h-12 mb-3" />
                        <h3 className="text-xl font-semibold text-gray-800">Boost Your Fitness</h3>
                        <p className="text-gray-600 mt-2">Improve endurance, stamina, and overall health.</p>
                    </div>

                    {/* Achievement */}
                    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
                        <Medal className="text-yellow-500 w-12 h-12 mb-3" />
                        <h3 className="text-xl font-semibold text-gray-800">Earn Medals & Rewards</h3>
                        <p className="text-gray-600 mt-2">Finish strong and receive exclusive medals & prizes.</p>
                    </div>

                    {/* Community */}
                    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
                        <Users className="text-green-500 w-12 h-12 mb-3" />
                        <h3 className="text-xl font-semibold text-gray-800">Be Part of a Community</h3>
                        <p className="text-gray-600 mt-2">Connect with passionate runners & fitness lovers.</p>
                    </div>

                    {/* Race Against Time */}
                    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
                        <Clock className="text-red-500 w-12 h-12 mb-3" />
                        <h3 className="text-xl font-semibold text-gray-800">Challenge Yourself</h3>
                        <p className="text-gray-600 mt-2">Test your limits and set new personal records.</p>
                    </div>
                </div>

                {/* Call-to-Action */}
                <div className="mt-10">
                    <Link to="/register" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
                        Join the Marathon Now
                    </Link>
                </div>
            </div>
        </section>
    );
}
