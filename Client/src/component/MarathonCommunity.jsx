export default function MarathonCommunity() {
    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-6 md:px-12">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800">Join the Marathon Community</h2>
                    <p className="text-gray-600 mt-2">Sign up, read testimonials, and get exclusive offers!</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Sales Promotion */}
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <h3 className="text-xl font-semibold text-gray-800">🏃 Special Registration Offer!</h3>
                        <p className="text-gray-600 mt-2">Register now and get a 20% discount on the entry fee.</p>
                        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                            Register Now
                        </button>
                    </div>

                    {/* Reviews Section */}
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <h3 className="text-xl font-semibold text-gray-800">🌟 What Runners Say</h3>
                        <p className="italic text-gray-600 mt-2">
                            "An amazing experience! The energy, the crowd, and the challenge were unforgettable."
                        </p>
                        <p className="text-sm text-gray-500 mt-1">- Alex R.</p>
                    </div>

                    {/* Newsletter Signup */}
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <h3 className="text-xl font-semibold text-gray-800">📩 Stay Updated</h3>
                        <p className="text-gray-600 mt-2">Subscribe to our newsletter for marathon tips and updates.</p>
                        <div className="mt-4 flex flex-col sm:flex-row gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-3 py-2 border rounded-lg w-full"
                            />
                            <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
