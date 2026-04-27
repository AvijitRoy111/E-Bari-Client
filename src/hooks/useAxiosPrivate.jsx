import axios from "axios";

const axiosprivate = axios.create({
    baseURL: 'http://localhost:5000', 
});

const useAxiosPrivate = () => {
  return axiosprivate
}

export default useAxiosPrivate;