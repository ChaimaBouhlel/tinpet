import Link from "next/link";
import axios from "axios";
import React, {useState} from "react";
import {useRouter} from "next/router";
import {useMutation, useQuery} from "@tanstack/react-query";
import {useRecoilState, useRecoilValue} from "recoil";
import authenticatedUser from "@/atoms/authenticatedUser";
import authentication from "@/atoms/authentication";
import jwtDecode from "jwt-decode"
import Cookies from 'js-cookie';

interface PayloadType {
   email: string
}

interface ErrorType {
    message: string
    // Define the structure of an error here
}
const Login = () => {
    const router = useRouter()
    const [authState, setAuthState] = useRecoilState(authentication)
    const [authUser, setAuthUser] = useRecoilState(authenticatedUser)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');

    const mutation = useMutation({
        mutationFn: async (data) => {
            return await axios.post(process.env.NEXT_PUBLIC_SIGN_IN_URL || '',
                {email, password},
                {
                    headers: {'Content-Type': 'application/json'},
                    withCredentials: true
                }
            );
        },
        onSuccess: ({data}) => {
            
            const token = data.access_token;
            Cookies.set('token', token); 
            console.log(data.access_token)
            const payload = jwtDecode(data.access_token) as PayloadType;
            console.log(payload)
            if(payload.email === email) {
                setAuthUser({email})
                console.log(authUser)
                setAuthState(true)
            }
        },
        onError: (error :ErrorType) => {
            setErrMsg(error.message)
        }
    })

    if (authState ) {
        router.push("/")
    }
    const divStyle = {
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/pets_login.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        mutation.mutate();
    }
    return (
        <div className="flex flex-row md:p-24 p-12 bg-cover h-screen" style={divStyle}>
            <div className="md:w-1/3 bg-orange-200 rounded-2xl p-12 mx-auto my-auto">
                <p className={errMsg ? "text-amber-800 text-sm font-bold mb-4" : "hidden"}
                   aria-live="assertive">{errMsg}</p>
                <h1 className="text-center font-poppins font-bold text-3xl text-amber-800 mb-4">Login</h1>
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <p className="flex-row flex text-amber-800 mt-2"> Email:</p>
                    <input
                        type="text"
                        autoComplete="off"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                        className="mb-1 rounded p-1 bg-amber-50"
                    />
                    <p className="flex-row flex text-amber-800 mt-2"> Password:</p>
                    <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                        className="mb-1 rounded p-1 bg-amber-50 text-gray-700"
                    />
                    <button disabled={!password || !email ? true : false}
                            className="mt-3 bg-amber-700 text-amber-50 font-bold font-poppins rounded-lg py-2 hover:shadow-xl"
                    >Sign
                        In
                    </button>
                </form>

                <p className="mt-2 text-sm text-amber-800">
                    {"Don't have an account?"}
                    <span className="ml-1 font-bold underline">
                                <Link href="/register">Sign Up</Link>
                        </span>
                </p>
            </div>
        </div>
    )
}

export default Login