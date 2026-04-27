import { useEffect, useState } from "react";
import axiosPublic from "../api/axiosPublic";

const useProperties = () => {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                setLoading(true);
                const response = await axiosPublic.get('/properties'); 
                setProperties(response.data.data);
            } catch (error) {
//                 console.error("Fetch error:", error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchProperties();
//     }, []);

//     return {properties, loading};
// };

// export default useProperties;