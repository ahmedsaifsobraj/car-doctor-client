import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UseAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL: 'https://car-doctor-server-pearl-five.vercel.app',
    withCredentials: true
})
const useAxiosSecure = () => {
    const navigate = useNavigate();
    const {logOut}=UseAuth();
    useEffect(() => {
        axiosSecure.interceptors.response.use
            (
                res => {
                return res;
            }, error => {
                console.log('error track in the interceptor', error.response.status)
                if (error.response.status === 401 || error.response.status === 403) {
                    logOut()
                        .then(() => {
                            navigate('/login');
                        })
                        .catch(error => console.log(error))
                }
            }
            )
    }, [])
    return axiosSecure;
}

export default useAxiosSecure;
