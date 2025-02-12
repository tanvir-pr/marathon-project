export default function AboutMarathon() {
    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-6 md:px-12">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800">About the Marathon</h2>
                    <p className="text-gray-600 mt-2">Experience the thrill, challenge, and excitement of the ultimate race!</p>
                </div>

                <div className="grid md:grid-cols-2 gap-10 items-center">
                    {/* Image */}
                    <div>
                        <img 
                            src="https://i.ibb.co/wZQn3dBw/oo.png" 
                            alt="Marathon runners" 
                            className="rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Content */}
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-800">🏆 Our Mission</h3>
                        <p className="text-gray-600 mt-3">
                            Our marathon is more than just a race—it's a celebration of endurance, determination, and community. 
                            We aim to inspire runners of all levels to push their limits and achieve greatness.
                        </p>

                        <h3 className="text-2xl font-semibold text-gray-800 mt-6">🎉 Event Highlights</h3>
                        <ul className="list-disc list-inside text-gray-600 mt-3 space-y-2">
                            <li>🏁 Scenic and challenging race routes</li>
                            <li>🎶 Live entertainment and cheering zones</li>
                            <li>🏅 Exclusive medals & prizes for finishers</li>
                            <li>💪 Community support and training programs</li>
                        </ul>

                        <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
