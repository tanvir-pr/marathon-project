import { CheckCircle, Calendar, CreditCard } from "lucide-react";

export default function HowItWorks() {
    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-6 md:px-12">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800">How It Works</h2>
                    <p className="text-gray-600 mt-2">Follow these simple steps to join the marathon and enjoy the experience!</p>
                </div>

                {/* Steps Grid */}
                <div className="grid md:grid-cols-4 gap-8 text-center">
                    {/* Step 1 - Register */}
                    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
                        <Calendar className="text-blue-500 w-12 h-12 mb-3" />
                        <h3 className="text-xl font-semibold text-gray-800">1. Register</h3>
                        <p className="text-gray-600 mt-2">Sign up online and choose your race category.</p>
                    </div>

                    {/* Step 2 - Pay */}
                    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
                        <CreditCard className="text-green-500 w-12 h-12 mb-3" />
                        <h3 className="text-xl font-semibold text-gray-800">2. Confirm Payment</h3>
                        <p className="text-gray-600 mt-2">Complete the payment to secure your spot.</p>
                    </div>

                    {/* Step 3 - Prepare */}
                    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
                        <CheckCircle className="text-yellow-500 w-12 h-12 mb-3" />
                        <h3 className="text-xl font-semibold text-gray-800">3. Get Ready</h3>
                        <p className="text-gray-600 mt-2">Train, pick up your kit, and get race-day instructions.</p>
                    </div>

                    {/* Step 4 - Run! */}
                    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
                    <Calendar className="text-blue-500 w-12 h-12 mb-3" />
                        <h3 className="text-xl font-semibold text-gray-800">4. Join the Race</h3>
                        <p className="text-gray-600 mt-2">Show up, run, and enjoy the marathon experience!</p>
                    </div>
                </div>

                {/* Call-to-Action */}
                <div className="text-center mt-10">
                    <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
                        Register Now
                    </button>
                </div>
            </div>
        </section>
    );
}
