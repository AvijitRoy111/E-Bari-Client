import { useState, useEffect } from "react";
import axios from "axios";

const BrowseHome = () => {
    const [homes, setHomes] = useState([]);
    const [loading, setLoading] = useState(true);

    // How many items to show
    const [visibleCount, setVisibleCount] = useState(3);

    const fetchHomes = async () => {
        try {
            const res = await axios.get("/fake.json");
            const data = res.data;

            // Top 9 expensive homes
            const expensiveHomes = data
                .sort((a, b) => (b.price_max || b.price) - (a.price_max || a.price))
                .slice(0, 9);

            setHomes(expensiveHomes);
        } catch (error) {
            console.error("Error fetching homes:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchHomes();
    }, []);

    // Skeleton Card
    const SkeletonCard = () => (
        <div className="max-w-sm relative rounded-xl overflow-hidden shadow-md animate-pulse">
            <div className="w-full h-48 bg-gray-300"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute top-3 left-4 bg-gray-400 h-6 w-32 rounded"></div>
            <div className="absolute top-3 right-4 bg-gray-300 w-10 h-10 rounded-full"></div>
        </div>
    );

    // Home Card
    const HomeCard = ({ item }) => (
        <div className="max-w-sm relative rounded-xl overflow-hidden shadow-md">
            <img
                src={item.images[0]}
                alt={item.title}
                className="w-full h-৫২ object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

            <h3 className="absolute top-3 left-4  text-white text-xl font-semibold">
                {item.title}
            </h3>
            <div className="absolute top-3 right-4 bg-white ext-black w-10 h-10 rounded-full flex items-center justify-center font-semibold shadow">
                {item.sellCount}
            </div>
        </div>
    )
    const handleSeeMore = () => {
        setVisibleCount((prev) => prev + 3);
    };

    const handleSeeLess = () => {
        setVisibleCount(3);
    };

    return (
        <div className="mt-8">
            {/* Header */}
            <div className="flex flex-col items-center justify-center gap-4 pb-6">
                <h3 className="text-4xl font-bold">Browse expensive homes</h3>
                <p className="text-xl font-normal text-center px-2 md:px-32">
                    Welcome to Abriculteurs, the family-run agency committed to exceptional service.
                    Discover a meticulous presentation of this property: professional photos. Trust
                    our expertise to turn your real estate into remarkable successes.
                </p>
            </div>

            {/* Cards Grid */}
            <div className="w-full max-w-7xl mx-auto px-4 lg:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {loading
                        ? Array.from({ length: 3 }).map((_, idx) => <SkeletonCard key={idx} />)
                        : homes.slice(0, visibleCount).map((item) => (
                            <HomeCard key={item.id} item={item} />
                        ))}
                </div>
            </div>


            {/* Buttons */}
            <div className="flex justify-center mt-6">
                {!loading && visibleCount < 9 && (
                    <button
                        onClick={handleSeeMore}
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow"
                    >
                        See More
                    </button>
                )}

                {!loading && visibleCount >= 9 && (
                    <button
                        onClick={handleSeeLess}
                        className="px-6 py-2 bg-red-600 text-white rounded-lg shadow"
                    >
                        See Less
                    </button>
                )}
            </div>
        </div>
    );
};

export default BrowseHome;